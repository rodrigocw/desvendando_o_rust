"use client"

import { createContext, useContext, useEffect, useState } from 'react';
import { ReactNode } from 'react';

interface PersistData {
    themeColor: string
    openMenu: boolean
    //windowWidth: number
    isDark: boolean
}

interface AppContextProps {
    persist: PersistData
    setThemeColor: (theme: string) => void
    setOpenMenu: (openMenu: boolean) => void
    //setWindowWidth: (windowWidth: number) => void
}

const AppContext = createContext({
    persist: {},
    setThemeColor: (theme: string) => { },
    setOpenMenu: (openMenu: boolean) => { },
    //setWindowWidth: (windowWidth: number) => { }
} as AppContextProps)

const keyLocalStorage = 'livro-persist' //storedValues[key]

const getLocalStoragePersist = () => {
    const localStorageValue = getStoredValues()
    const themeColor = localStorageValue["themeColor"] !== null ? localStorageValue["themeColor"] : "system"
    const openMenu = localStorageValue["openMenu"] !== null ? localStorageValue["openMenu"] : true
    //const windowWidth = localStorageValue["windowWidth"] !== null ? localStorageValue["windowWidth"] : window.innerWidth
    const persist: PersistData = {
        themeColor: themeColor,
        openMenu: openMenu,
        //windowWidth: windowWidth,
        isDark: themeColor !== "system" ? (themeColor === "dark" ? true : false) : window.matchMedia('(prefers-color-scheme: dark)').matches,
    }
    return persist
}

const getPersist = () => {
    const localStoragePersist = getStoredValues();
    if (localStoragePersist === null) {
        const persist: PersistData = {
            themeColor: 'light',
            openMenu: true,
            //windowWidth: window.innerWidth,
            isDark: false,
        };
        const dataToStore = {
            themeColor: persist.themeColor,
            openMenu: persist.openMenu
        };
        localStorage.setItem(keyLocalStorage, JSON.stringify(dataToStore))
        return persist;
    } else {
        const persist = getLocalStoragePersist()
        return persist
    }
};

const getStoredValues = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedValues = localStorage.getItem(keyLocalStorage);
        if (storedValues) {
            return JSON.parse(storedValues);
        }
    }
    return null;
};

const getLocalStorageValue = (key: string) => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedValues = getStoredValues();
        return storedValues[key];
    }
    return null;
};

const setLocalStorageValue = (key: keyof PersistData, value: any) => {
    if (typeof window !== 'undefined' && window.localStorage) {
        let storedValues = getStoredValues();
        if (storedValues) {
            storedValues[key] = value;
            localStorage.setItem(keyLocalStorage, JSON.stringify(storedValues));
        }
    }
};

export function AppProvider({ children }: { children: ReactNode }) {
    const [persist, setPersist] = useState({} as PersistData)
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const tempPersist = getPersist()
            setPersist(tempPersist)
            document.documentElement.setAttribute(
                'data-theme',
                tempPersist.isDark ? 'dark' : 'light'
            )
        }
    }, []);

    if (JSON.stringify(persist) === '{}') {
        return null
    }

    const setThemeColor = (theme: string) => {
        setLocalStorageValue("themeColor", theme)
        const tempPersist = getLocalStoragePersist()
        setPersist(tempPersist)
        document.documentElement.setAttribute(
            'data-theme',
            tempPersist.isDark ? 'dark' : 'light'
        )
    }

    const setOpenMenu = (openMenu: boolean) => {
        setLocalStorageValue("openMenu", openMenu)
        setPersist({ ...persist, openMenu });
    }

    //const setWindowsWidth = (windowWidth: number) => {
    //    setPersist({ ...persist, windowWidth });
    //}

    return (
        <AppContext.Provider
            value={{
                persist,
                setThemeColor: setThemeColor,
                setOpenMenu: setOpenMenu,
                //setWindowWidth: setWindowsWidth
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}