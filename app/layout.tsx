import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urieel dev",
  description: "Portofolio de Urieel dev, en donde se presentan sus proyectos y experiencia laboral, así como su CV y contacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="https://res.cloudinary.com/dz5tntwl1/image/upload/v1707420278/urieeldev-favicon_s8aczx.svg" type="image/x-icon" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
