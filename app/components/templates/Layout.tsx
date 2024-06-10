"use client"

import { Yellowtail } from "next/font/google"
import { rust } from "../../ui/data/livro";
import Cabecalho from "./Cabecalho";
import { useAppContext } from "@/app/context";
import Rodape from "./Rodape";
import Sumario from "./Sumario";
import useWindowWidth from "../useWindowWidth";
import { useRouter } from "next/navigation";

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
  const { persist, setThemeColor, setOpenMenu } = useAppContext()
  const isDark = persist.isDark
  const isOpen = persist.openMenu
  //const storageWindowWidth = persist.windowWidth

  const windowWidth = useWindowWidth()
  const isSmall = windowWidth < 640
  const isMedium = windowWidth > 768
  const isExtraLarge = windowWidth > 1280

  const maxWidth = "w-[889px]";

  const router = useRouter()

  return (
    <div className="flex flex-col h-screen">
      <header
        className={`fixed top-0 w-full ${isDark ? "bg-black" : "bg-white"}`}
        aria-label="Cabeçalho do site"
      >
        <Cabecalho />
      </header>

      <div className={`flex pt-14 pb-8 overflow-hidden`}>
        {isMedium && (
          <aside
            className={`${!isOpen && 'hidden'} w-auto p-1 overflow-y-auto`}
            role="complementary"
            aria-label="Sumário do livro"
          >
            <Sumario />
          </aside>
        )}
        <div className="flex flex-1 overflow-y-auto w-full">
          <main className="w-full">
            <section
              className={`${isExtraLarge ? maxWidth : ""} flex-shrink-0 ml-1 mr-1`}
              role="article"
              aria-label="Capítulo do livro"
            >
              <div className={`text-center font-bold mb-2 ${isSmall ? "text-3xl" : "text-4xl"} `}>
                Desvendando o Rust
              </div>
              {children}
            </section>
            <div className="flex flex-col items-center mt-4">
              <div className="flex justify-center">
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
            </div>

            {isExtraLarge && (
              <div className="flex-grow flex-shrink-0"></div>
            )}
          </main>
        </div>
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