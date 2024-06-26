import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";
import { AppProvider } from "./context";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Desvendando o Rust",
  description: "Livro - Desvendando o Rust - Autor RodrigoCW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
