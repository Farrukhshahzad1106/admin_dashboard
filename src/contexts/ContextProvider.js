import React, {createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat : false,
    carr : false,
    userProfile : false,
    notification : false,
}
//The chat is the chat icon depicting whether it is open or closed (true means open and false means closed)
//Same is the scenario for the notification, userProfile and Cart icons.

export const ContextProvider = ( {children} ) => {
    const [activeMenu, setActiveMenu] = useState(true);
    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu
            }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);