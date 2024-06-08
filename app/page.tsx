"use client"

import Image from "next/image";
import Layout from "./components/templates/Layout";
import { useAppContext } from "./context";
import useWindowWidth from "./components/useWindowWidth";
import Sumario from "./components/templates/Sumario";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const { persist, setThemeColor, setOpenMenu } = useAppContext()
  const themeColor = persist.themeColor
  const openMenu = persist.openMenu
  const isDark = persist.isDark

  const windowWidth = useWindowWidth();
  const router = useRouter();

  useEffect(() => {
    if (windowWidth > 640) {
      router.push("/ui/chapters/1");
    }
  }, [windowWidth, router]); // Adiciona `windowWidth` como dependência

  return (
    <Layout previousChapter={null} nextChapter={"/ui/chapters/1"}>
      <h1 className="font-bold">Sumário</h1>
      {windowWidth < 640 && <Sumario />}
    </Layout>
  );
}
