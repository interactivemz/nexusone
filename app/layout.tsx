import React from "react";
import "../styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://nexusone.co.mz"),
  title: "Nexus One — O Ponto Onde Líderes se Encontram",
  description:
    "Clube exclusivo de empreendedores em Moçambique — acesso, visão e networking de excelência.",
  openGraph: {
    title: "Nexus One — O Ponto Onde Líderes se Encontram",
    description:
      "Clube exclusivo de empreendedores em Moçambique — acesso, visão e networking de excelência.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <link
          rel="preload"
          href="/fonts/Cottox-400.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Cottox-600.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
