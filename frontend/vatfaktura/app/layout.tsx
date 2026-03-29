import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "VAT Faktura - Faktury bez limitów",
  description: "Profesjonalna platforma do tworzenia faktur. Bez limitów, bez karty kredytowej, całkowicie bezpłatnie.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
