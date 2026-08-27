import { speakableHanzi } from "@/lib/speakable"

function voiceScore(voice: SpeechSynthesisVoice) {
  const haystack = `${voice.name} ${voice.lang}`.toLowerCase()
  let score = 0
  if (voice.lang.toLowerCase().startsWith("zh-cn") || voice.lang.toLowerCase() === "zh") score += 8
  else if (voice.lang.toLowerCase().startsWith("zh-tw") || voice.lang.toLowerCase().startsWith("zh-hk")) score += 5
  else if (voice.lang.toLowerCase().startsWith("zh") || haystack.includes("chinese")) score += 3
  if (/xiaoxiao|yunxi|xiaoyi|yunyang|xiaoyan|xiaomo|xiaoxuan/.test(haystack)) score += 12
  if (haystack.includes("neural") || haystack.includes("online")) score += 6
  if (/google.*普通话|google.*中文|microsoft.*(huihui|kangkang|yaoyao)/.test(haystack)) score += 7
  if (/ting-ting|tingting|mei-jia|meijia|sin-ji|sinji/.test(haystack)) score += 4
  if (voice.localService) score -= 1
  return score
}

function pickChineseVoice() {
  const voices = window.speechSynthesis.getVoices()
  return [...voices].sort((a, b) => voiceScore(b) - voiceScore(a))[0]
}

function waitForVoices() {
  const existing = window.speechSynthesis.getVoices()
  if (existing.length) return Promise.resolve()
  return new Promise<void>((resolve) => {
    const done = () => {
      window.speechSynthesis.removeEventListener("voiceschanged", done)
      resolve()
    }
    window.speechSynthesis.addEventListener("voiceschanged", done)
    window.setTimeout(done, 700)
  })
}

export async function speakBrowserChinese(text: string, playbackRate = 1) {
  if (typeof window === "undefined" || !window.speechSynthesis) return
  const cleaned = speakableHanzi(text)
  if (!cleaned) return
  await waitForVoices()
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(cleaned)
  utterance.lang = "zh-CN"
  utterance.rate = playbackRate
  const voice = pickChineseVoice()
  if (voice && voiceScore(voice) > 0) {
    utterance.voice = voice
    utterance.lang = voice.lang
  }
  window.speechSynthesis.speak(utterance)
}
