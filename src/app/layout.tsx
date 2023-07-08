import "./globals.css"
import "../../public/fonts/font.css"
import "../../public/fonts/icons.css"
import localFont from "next/font/local"
import type { Metadata } from "next"

const ibmFont = localFont({
  src: [
    {
      path: "../../public/fonts/IBMPlexSans.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IBMPlexSans-Bold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-ibm"
})

const stratosFont = localFont({
  src: "../../public/fonts/StratosDeliverooWeb-SemiBold.woff",
  weight: "500",
  style: "normal", 
  display: "swap",
  variable: "--font-stratos"
})

export const metadata: Metadata = {
  title: "Deliveroo page clone",
  description: "Deliveroo page from Rambuteau",
  icons: {
    icon: "/icon.png"
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${ibmFont.className} ${ibmFont.variable} ${stratosFont.variable}` }>
        {children}
      </body>
    </html>
  )
}
