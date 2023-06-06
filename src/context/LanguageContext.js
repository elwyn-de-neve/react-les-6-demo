import {createContext, useState} from "react";

export const LanguageContext = createContext(null)

const LanguageContextProvider = ({children}) => {

    const [ language, setLanguage ] = useState('nl')

    const data = {
        language: language,
        setLanguage: setLanguage
    }

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;