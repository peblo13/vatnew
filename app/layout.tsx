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
      <head>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: system-ui, -apple-system, sans-serif; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
