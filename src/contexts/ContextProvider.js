import React, {createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat : false,
    cart : false,
    userProfile : false,
    notification : false,
}
//The chat is the chat icon depicting whether it is open or closed (true means open and false means closed)
//Same is the scenario for the notification, userProfile and Cart icons.

export const ContextProvider = ( {children} ) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked] : true});

    }
    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize
            }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);