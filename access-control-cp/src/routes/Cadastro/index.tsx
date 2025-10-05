import { useForm, type SubmitHandler } from "react-hook-form";
import { Header } from "../../compenents/Header/Header"; // Ajuste o caminho conforme sua estrutura

// Tipos de dados
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