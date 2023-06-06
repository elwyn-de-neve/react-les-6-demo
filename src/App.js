import content from './content/content.json'
import {useContext} from "react";
import {LanguageContext} from "./context/LanguageContext";
import {AuthContext} from "./context/AuthContext";

function App() {

    const { language, setLanguage } = useContext(LanguageContext)
    const { isAuth, login, logout } = useContext(AuthContext)

    const handleChange = (event) => {
        setLanguage(event.target.value)
    }

    console.log(isAuth)

    const title = content[language].homepage.title;
    const paragraph = content[language].homepage.paragraph;
    const welcome = content[language].homepage.welcome;

    return (
        <div>
            <select value={ language } onChange={ handleChange }>
                <option value="nl">NL 🇳🇱</option>
                <option value="en">EN 🇬🇧</option>
                <option value="fr">FR 🇫🇷</option>
                <option value="es">ES 🇪🇸</option>
            </select>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <button type="button" onClick={ isAuth ? logout : login }>{ isAuth ? "Logout" : "Login"}</button>
            { isAuth && <span>{welcome}</span> }
        </div>
    );
}

export default App;
