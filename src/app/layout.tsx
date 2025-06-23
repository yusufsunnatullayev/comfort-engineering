import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comfort Engineering",
  description:
    "Comfort Engineering - Строительство, геология, производство удобрений и агроинжиниринг",
  keywords:
    "строительство, геология, изыскания, производство удобрений, агроинжиниринг",
  authors: [{ name: "Comfort Engineering" }],
  creator: "Comfort Engineering",
  openGraph: {
    title: "Comfort Engineering",
    description:
      "Строительство, геология, производство удобрений и агроинжиниринг",
    url: "https://comfort-engineering.com",
    siteName: "Comfort Engineering",
  },
  icons: {
    icon: "/assets/blue-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
