"use client"

import Image from 'next/image'
import classNames from "classnames";
import { useAppContext } from '@/app/context';
import { IconBars3, IconDesk, IconLua, IconSol } from './icons';
import ImageSvg from './ImageSvg';
import { fontYellow } from '@/app/ui/fonts';
import useWindowWidth from '../useWindowWidth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Cabecalho() {

    const { persist, setThemeColor, setOpenMenu } = useAppContext()
    const themeColor = persist.themeColor
    const isDark = persist.isDark
    const isOpen = persist.openMenu

    const windowWidth = useWindowWidth();

    function getThemeClass(selecionado: boolean): string {
        const themeClass = (themeColor === "light"
            ? selecionado ? 'bg-gray-200' : ''
            : selecionado ? 'bg-gray-700' : '') + ' rounded-full'
        return themeClass
    }

    function getThemeIcon(selecionado: boolean): string {
        return isDark
            ? selecionado ? 'stroke-white' : 'stroke-gray-400 hover:stroke-white'
            : selecionado ? 'stroke-black' : 'stroke-gray-700 hover:stroke-black'
    }

    function getThemeOpen(): string {
        return isDark
            ? "hover:bg-gray-700"
            : "hover:bg-gray-200"
    }

    const solSelecionado = themeColor === 'light'
    const deskSelecionado = themeColor === 'system'
    const luaSelecionado = themeColor === 'dark'

    const router = useRouter()

    return (
        <div className={`
                flex h-14 items-center
            `}>
            <div className={classNames(
                "flex items-center justify-center cursor-pointer rounded-full h-10 w-10",
                getThemeOpen())}
                onClick={() => {
                    if (windowWidth > 768) {
                        setOpenMenu(!isOpen)
                    }
                    if (windowWidth < 768) {
                        router.push('/')
                    }
                }}>
                {IconBars3}
            </div>
            <div className={`
                    flex items-center justify-center ml-1
                `}>
                <a href="https://www.rodrigocw.com" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center cursor-pointer">
                        <ImageSvg src="/images/inklogo.svg" width={27} height={32} alt="RodrigoCW" />
                        <span className={`${fontYellow.className} text-2xl`}>RodrigoCW</span>
                    </div>
                </a>
            </div>
            <div className={`
                    flex flex-grow
                `}>
            </div>
            <div className={`
                    flex last:mr-2 justify-end h-10 border border-gray-400 rounded-2xl cursor-pointer
                `}>
                <ul className={`
                        flex flex-row items-center ml-1 mr-1
                    `}>
                    <li className={classNames(
                        'flex flex-row items-center justify-center ml-1 mr-1 w-8 h-8',
                        getThemeClass(solSelecionado)
                    )}
                        onClick={() => setThemeColor('light')}>
                        {IconSol(getThemeIcon(solSelecionado))}
                    </li>
                    <li className={classNames(
                        'flex flex-row items-center justify-center ml-1 mr-1 w-8 h-8',
                        getThemeClass(deskSelecionado)
                    )}
                        onClick={() => setThemeColor('system')}>
                        {IconDesk(getThemeIcon(deskSelecionado))}
                    </li>
                    <li className={classNames(
                        'flex flex-row items-center justify-center ml-1 mr-1 w-8 h-8',
                        getThemeClass(luaSelecionado)
                    )}
                        onClick={() => setThemeColor('dark')}>
                        {IconLua(getThemeIcon(luaSelecionado))}
                    </li>
                </ul>
            </div>
        </div>
    )
}

/*
<div className={`text-center`}>
                <h1 className={`font-bold mt-0 mb-0`}>Desvendando o Rust</h1>
            </div>
*/