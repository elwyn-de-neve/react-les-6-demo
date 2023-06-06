import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LanguageContextProvider from "./context/LanguageContext";
import AuthContextProvider from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <LanguageContextProvider>
                <App/>
            </LanguageContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
