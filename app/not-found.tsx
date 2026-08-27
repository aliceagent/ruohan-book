import Link from "next/link"

export default function NotFound() {
  return (
    <div className="space-y-3 py-20 text-center">
      <h1 className="font-serif text-4xl">没有这一页</h1>
      <p className="text-muted-foreground">That page is not in the book — yet.</p>
      <Link href="/" className="underline">
        Back home
      </Link>
    </div>
  )
}
