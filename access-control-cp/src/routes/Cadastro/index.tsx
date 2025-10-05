import { useForm, type SubmitHandler } from "react-hook-form";
import { Header } from "../../compenents/Header/Header"; // Ajuste o caminho conforme sua estrutura



type Inputs = {
  nome: string;
  nomeUsuario: string;
  email: string;
};

type User = {
  id: number;
  nome: string;
  nomeUsuario: string;
  email: string;
};

function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<Inputs>();

const onSubmit: SubmitHandler<Inputs> = async (raw) => {
    const data: Inputs = {
      nome: raw.nome.trim(),
      nomeUsuario: raw.nomeUsuario.trim().toLowerCase(),
      email: raw.email.trim().toLowerCase(),
    };
