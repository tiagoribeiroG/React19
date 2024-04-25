import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "enviando.." : "Enviar"}
    </button>
  );
};

export default SubmitButton;
