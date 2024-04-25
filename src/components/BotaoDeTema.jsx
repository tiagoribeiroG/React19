    import {use} from 'react'
    import { ThemeContext } from '../contexts/ThemeContext'; 

const BotaoDeTema = () => {
    const {theme, toggleTheme} = use(ThemeContext);

  return (
   <button onClick={toggleTheme}>
    Alterar tema para  {theme === "claro" ? "escuro"  : "claro"}
   </button>
  )
}

export default BotaoDeTema
