/** Prepare textbook Chinese for TTS: drop print-only notes that make voices stumble. */
export function speakableHanzi(raw: string) {
  return raw
    .replace(/〔[^〕]*〕/g, "")
    .replace(/【[^】]*】/g, "")
    .replace(/\[[^\]]*\]/g, "")
    .replace(/[（(]\s*[例英注][^）)]*[）)]/g, "")
    .replace(/[（(][^）)]*[A-Za-z][^）)]*[）)]/g, "")
    .replace(/[《》〈〉""'']/g, "")
    .replace(/\s+/g, "")
    .trim()
}

export const MAX_SPEAK_CHARS = 600
