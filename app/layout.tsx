import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "VAT Faktura",
  description: "Generator faktur bez limitów",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className="antialiased">{children}</body>
    </html>
  )
}
