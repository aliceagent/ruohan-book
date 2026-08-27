import Image from "next/image"

import { lessonIllustrationSrc } from "@/lib/illustrations"
import { cn } from "@/lib/utils"

export function LessonIllustration({
  lessonId,
  alt,
  variant = "thumb",
  className,
}: {
  lessonId: string
  alt: string
  variant?: "hero" | "thumb"
  className?: string
}) {
  return (
    <Image
      src={lessonIllustrationSrc(lessonId)}
      alt={alt}
      width={1024}
      height={1024}
      sizes={variant === "hero" ? "(max-width: 640px) 10rem, 14rem" : "6rem"}
      priority={variant === "hero"}
      className={cn(
        "shrink-0 bg-rose-50 object-cover ring-1 ring-rose-200/80 dark:bg-rose-950/40 dark:ring-rose-900/70",
        variant === "hero" ? "size-40 rounded-2xl sm:size-48 lg:size-56" : "size-24 rounded-xl",
        className,
      )}
    />
  )
}
