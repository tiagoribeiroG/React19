
import './App.css'
import BotaoDeTema from './components/BotaoDeTema'
import EstadoDoFormulario from './components/EstadoDoFormulario'
import FormStatus from './components/FormStatus'
import ParentComponent from './components/ParentComponent'
import PostItems from './components/PostItems'
import UserForm from './components/UserForm'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <>
      <title>Hora de codar</title>
      <meta name="description" content="Aprenda com Tiago" />
      <h1>1 - action</h1>
      <UserForm />

      <h1>2 - ref como prop</h1>
      <ParentComponent />

      <h1>3 - use para carregamento de dados</h1>
      <PostItems />

      <h1>4 - use para aplicar contextos</h1>
      <ThemeProvider>
        <BotaoDeTema />
      </ThemeProvider>
      <h1>5 - useFormStatus para status de envio  de um form</h1>
      <FormStatus />
      <h1>6 - useFormState</h1>
      <EstadoDoFormulario />
      
    </>
  );
}

export default App;