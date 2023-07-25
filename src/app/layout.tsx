import "./globals.css";
import type { Metadata } from "next";
import { inter, roboto, roboto_slab, source_sans_3 } from "@/utils/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "News Explorer",
  description: "Explore news around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${roboto_slab.variable} ${source_sans_3.variable}`}
    >
      <body className="mx-auto text-zinc-900 bg-white font-sans font-normal text-lg leading-normal relative">
        {children}
        <Footer />
      </body>
    </html>
  );
}
