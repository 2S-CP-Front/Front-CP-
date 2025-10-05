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
}
const resp = await fetch("http://localhost:3000/usuarios");
const usuarios: User[] = await resp.json();

const existeUser = usuarios.some(
    (u) => u.nomeUsuario.toLowerCase() === data.nomeUsuario
);
const existeEmail = usuarios.some(
    (u) => u.email.toLowerCase() === data.email
);

if (existeUser) {
    setError("nomeUsuario", {
        type: "duplicate",
        message: "Nome de usuário já em uso.",
    });
}

if (existeEmail) {
    setError("email", {
        type: "duplicate",
        message: "E-mail já cadastrado.",
    });
}

if (existeUser || existeEmail) return;
const post = await fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
});
