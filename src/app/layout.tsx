import type { Metadata } from "next";
import "./globals.css";
import ViewportFrame from "@/components/ViewportFrame";
import ScrollProgress from "@/components/ScrollProgress";
import CardSpotlight from "@/components/CardSpotlight";
import ClientOnly from "@/components/ClientOnly";
import MobileHeader from "@/components/MobileHeader";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Rashitha Koppurouthu | Full-Stack & AI/ML Developer",
  description:
    "Portfolio of Rashitha Koppurouthu — B.Tech AI/ML student. Full-stack developer and MERN stack enthusiast.",
  openGraph: {
    title: "Rashitha Koppurouthu | Full-Stack & AI/ML Developer",
    description:
      "Portfolio of Rashitha Koppurouthu — Full-stack developer & AI/ML enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body suppressHydrationWarning className="font-body pt-[57px] md:pt-[68px] pb-8">
        <ClientOnly>
          <CardSpotlight />
          <ScrollProgress />
          <MobileHeader />
          <Navbar />
        </ClientOnly>
        <ViewportFrame />
        {children}
      </body>
    </html>
  );
}
