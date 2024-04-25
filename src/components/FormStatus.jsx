import React, { useState } from 'react';
import SubmitButton from './SubmitButton';

const FormStatus = () => {
  const [email, setEmail] = useState('');

  const formAction = async (event) => {
    event.preventDefault(); // Evita que o formulário seja submetido normalmente
    
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    alert("Email recebido: " + email); // Corrigido para acessar o valor de 'email' corretamente
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={formAction}>
      <input
        type="email"
        name="email"
        placeholder="Digite um email"
        value={email}
        onChange={handleEmailChange} // Adicionado para atualizar o estado 'email'
      />
      <SubmitButton />
    </form>
  );
};

export default FormStatus;



// import SubmitButton from "./SubmitButton";



// const FormStatus = () => {
//     const formAction = async(formData) => {
//         await new Promise((resolve) => setTimeout(resolve, 3000))
        
        
//         alert("Email recebido" + formData,get("email"))

//     }

//   return <form action={formAction}>
//     <input type="email" name="email" placeholder="Digite um email" />
//     <SubmitButton />
//   </form>;
// };

// export default FormStatus;
