"use client"

import Link from "next/link"
import { Yellowtail } from "next/font/google"
import { lorem } from "../../lorem"
import ImageSvg from "./ImageSvg";
import { rust } from "../../ui/data/livro";
import Cabecalho from "./Cabecalho";
import { useAppContext } from "@/app/context";
import Rodape from "./Rodape";
import Sumario from "./Sumario";
import useWindowWidth from "../useWindowWidth";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const fontYellow = Yellowtail({ subsets: ['latin'], weight: "400" })
const livro = rust

export default function Layout({
  children,
  previousChapter,
  nextChapter,
}: Readonly<{
  children: React.ReactNode;
  previousChapter: string | null;
  nextChapter: string | null;
}>) {
  const router = useRouter();
  const { persist, setThemeColor, setOpenMenu } = useAppContext();
  const themeColor = persist.themeColor;
  const isDark = persist.isDark;

  const windowWidth = useWindowWidth();

  const maxWidth = "w-[889px]";

  const sectionRef = useRef(null);
  const asideRef = useRef(null);

  return (
    <div className="flex flex-col h-screen">
      <header
        className={`fixed top-0 w-full ${isDark ? "bg-black" : "bg-white"}`}
        aria-label="Cabeçalho do site"
      >
        <Cabecalho />
      </header>

      <div className={`flex pt-14 pb-8 overflow-hidden`}>
        {windowWidth > 768 && (
          <aside
            className={`bg-gray-100 w-auto p-1 overflow-y-auto`}
            role="complementary"
            aria-label="Sumário do livro"
          >
            <Sumario />
          </aside>
        )}

        <main className="flex-1 overflow-y-auto">
          <section
            className={`${windowWidth > 1280 ? maxWidth : ""
              } flex-shrink-0 ml-1 mr-1`}
            role="article"
            aria-label="Capítulo do livro"
          >
            <div className={`text-center font-bold mb-2 ${windowWidth > 640 ? "text-4xl" : "text-3xl"} `}>
              Desvendando o Rust</div>
            {children}
          </section>
          <div className="flex justify-center mt-4">
            {previousChapter && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                aria-label="Página anterior"
                onClick={() => router.push(previousChapter)}
              >
                Anterior
              </button>
            )}
            {nextChapter && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                aria-label="Próxima página"
                onClick={() => router.push(nextChapter)}
              >
                Próximo
              </button>
            )}
          </div>

          {windowWidth > 1280 && (
            <div className="flex-grow flex-shrink-0"></div>
          )}
        </main>
      </div>

      <footer
        className={`fixed bottom-0 w-full ${isDark ? "bg-black" : "bg-white"}`}
        aria-label="Rodapé do site"
      >
        <Rodape />
      </footer>
    </div>
  );
}


/* sobra 890

 TELA 420

 289 < 1024
 390 > 1024

'sm': '640px',
// => @media (min-width: 640px) { ... }

'md': '768px',
// => @media (min-width: 768px) { ... }

'lg': '1024px',
// => @media (min-width: 1024px) { ... }

'xl': '1280px',
// => @media (min-width: 1280px) { ... }

'2xl': '1536px',
// => @media (min-width: 1536px) { ... }

Ate 640 nao tem aside
De 641 ate 1024 - 12px
De 1025 ate 1280 - 16px
De 1280 > Limite

*/