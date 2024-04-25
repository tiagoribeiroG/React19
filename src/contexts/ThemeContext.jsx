import { Children, createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({Children}) => {
    const [theme, setTheme] = useState("claro")

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "claro" ? "escuro" : "claro"));
}

return (<ThemeContext.Provider value={{theme, toggleTheme }}> 
    {Children}
</ThemeContext.Provider>)
};

export {ThemeContext, ThemeProvider };


