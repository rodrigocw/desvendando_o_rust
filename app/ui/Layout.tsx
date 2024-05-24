import Link from "next/link";
import ImageSvg from "./ImageSvg";
import { Yellowtail } from "next/font/google";
import { rust } from "./data/livro";
import Menu from "./Menu";

const fontYellow = Yellowtail({ subsets: ['latin'],weight: "400" })
const livro = rust

interface struct {
    id: string
    nivel: number
    url: string
    item: string
}

const getMarginLeftClass = (nivel: number) => {
    const classe = 'ml-' + ((nivel - 1) * 2)
    return classe
};

const getItem = (obj: struct) => {
    let item = obj.item
    if (obj.nivel < 3) {
        item = obj.id + ' ' + item
    }
    return item
};

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex flex-col h-screen">

            <header>
                <div className="flex justify-between items-center">
                    <div className="w-1/4">
                        <Link href={"https://www.rodrigocw.com"} target="_blank">
                            <div className={`ml-2 flex ${fontYellow.className} text-2xl`}>
                                <ImageSvg src="/images/inklogo.svg" width={27} height={32} alt="RodrigoCW" />
                                RodrigoCW
                            </div>
                        </Link>
                    </div>
                    <div className="w-full">
                        <div className="text-center"><div className="text-[30px]">Desvendando o Rust</div></div>
                    </div>
                    <div className="w-1/4"></div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">

                <aside className={`w-full max-w-[380px] overflow-y-auto bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500`}>
                    
                    <div className="ml-2">
                        <ul>
                            {livro.struts.map((item,num) => (
                                <Link key={num} href={item.url}>
                                    <li className={getMarginLeftClass(item.nivel)}>
                                        {getItem(item)}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>

                </aside>

                <main className="flex flex-col flex-1 overflow-y-auto">
                    {children}
                </main>

            </div> 

            <footer>
                <div className="flex flex-1 h-8 text-sm items-center justify-between">
                        <div className="w-1/4 ml-2 cursor-pointer">
                            <Link href={"https://www.rodrigocw.com"} target="_blank">
                                2024 RodrigoCW.
                            </Link>
                        </div>
                    <div className="w-full">
                        <div className="text-center">rodrigocw@gmail.com</div>
                    </div>
                    <div className="w-1/4"></div>
                </div>  
            </footer>

        </div>
    );
  }
