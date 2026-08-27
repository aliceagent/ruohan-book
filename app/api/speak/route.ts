import { generateSpeech } from "ai"
import { gateway } from "@ai-sdk/gateway"
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts"
import { unstable_cache } from "next/cache"

import { MAX_SPEAK_CHARS, speakableHanzi } from "@/lib/speakable"

export const maxDuration = 30

async function streamToBuffer(stream: NodeJS.ReadableStream) {
  const chunks: Buffer[] = []
  for await (const chunk of stream) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }
  return Buffer.concat(chunks)
}

async function edgeMandarin(text: string) {
  const tts = new MsEdgeTTS()
  try {
    await tts.setMetadata("zh-CN-XiaoxiaoNeural", OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3)
    const { audioStream } = tts.toStream(text, { rate: 0.88 })
    return await streamToBuffer(audioStream)
  } finally {
    tts.close()
  }
}

async function gatewaySpeech(text: string) {
  const result = await generateSpeech({
    model: gateway.speechModel("openai/tts-1-hd"),
    text,
    voice: "nova",
    speed: 0.9,
    language: "zh",
    outputFormat: "mp3",
    maxRetries: 0,
  })
  return Buffer.from(result.audio.uint8Array)
}

async function synthesize(text: string) {
  try {
    const audio = await edgeMandarin(text)
    if (audio.length > 500) return audio
  } catch (error) {
    console.error("Edge neural TTS failed", error)
  }
  return gatewaySpeech(text)
}

const cachedSpeech = unstable_cache(
  async (text: string) => {
    const bytes = await synthesize(text)
    return bytes.toString("base64")
  },
  ["zh-xiaoxiao-tts-v1"],
  { revalidate: 60 * 60 * 24 * 30 },
)

export async function GET(request: Request) {
  const raw = new URL(request.url).searchParams.get("text") ?? ""
  const text = speakableHanzi(raw)

  if (!text || text.length > MAX_SPEAK_CHARS) {
    return new Response("Invalid text", { status: 400 })
  }
  if (!/[\u4e00-\u9fff]/.test(text)) {
    return new Response("Chinese text required", { status: 400 })
  }

  try {
    const audio = Buffer.from(await cachedSpeech(text), "base64")
    return new Response(audio, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
      },
    })
  } catch (error) {
    console.error("Neural TTS failed", error)
    return new Response("TTS unavailable", { status: 503 })
  }
}
