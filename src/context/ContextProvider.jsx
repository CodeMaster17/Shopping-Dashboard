// this file is to check wheather the the component is closed or open
import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);

    // for items in navigation bar
    const [isClicked, setIsClicked] = useState(initialState);

    // handling click function on the items in navbar
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    // setting up the sidebar according to the screen size
    const [screenSize, setScreenSize] = useState(undefined)


    // for theming 
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false);

    //   diffenrce is due to variation in calling of function
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
    }


    return <StateContext.Provider value={{
        activeMenu,
        setActiveMenu,
        isClicked, setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor, currentMode,
        setMode, setColor,
        themeSettings, setThemeSettings
    }}>

        {children}
    </StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)

