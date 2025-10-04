import type React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

type LoginForm = {
    nomeUsuario: string;
    email: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const estiloErro: React.CSSProperties = { color: "#e11d48", marginTop: "6px", fontSize: "13px" };

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        reset
    } = useForm<LoginForm>({
        mode: "onTouched",
        defaultValues: { nomeUsuario: "", email: "" }
    });


    const onSubmit = (data: LoginForm) => {
        console.log("Tentativa de login", data);
        alert(`Bem-vindo(a), ${data.nomeUsuario}!`);
        reset();
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "50px auto" }}>
            <h1>Login</h1>


            <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <label htmlFor="nomeUsuario">Nome de Usuário</label>
                    <input
                        type="text"
                        id="nomeUsuario"
                        placeholder="ex.: maicon_douglas"
                        aria-invalid={!!errors.nomeUsuario || undefined}
                        {...register("nomeUsuario", {
                            required: "Informe o nome de usuário.",
                            minLength: { value: 3, message: "Use ao menos 3 caracteres." },
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+$/,
                                message: "Use apenas letras, números, ponto, underline e hífen."
                            }
                        })}
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                    {errors.nomeUsuario && (
                        <p role="alert" style={estiloErro}>
                            {errors.nomeUsuario.message}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="ex.: voce@exemplo.com"
                        aria-invalid={!!errors.email || undefined}
                        {...register("email", {
                            required: "Informe o e-mail.",
                            pattern: { value: emailRegex, message: "E-mail inválido (ex.: nome@dominio.com)." }
                        })}
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                    {errors.email && (
                        <p role="alert" style={estiloErro}>
                            {errors.email.message}
                        </p>
                    )}
                </div>


                <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    style={{
                        padding: "10px",
                        backgroundColor: "#57d1fec7",
                        color: "white",
                        border: "none",
                        cursor: isSubmitting || !isValid ? "not-allowed" : "pointer",
                        opacity: isSubmitting || !isValid ? 0.7 : 1
                    }}
                >
                    {isSubmitting ? "Entrando…" : "Entrar"}
                </button>
            </form>

            <p style={{ marginTop: "20px", textAlign: "center" }}>
                Não tem uma conta?
                <Link to="/cadastro" style={{ marginLeft: "5px", color: "#57d1fec7" }}>
                    Cadastre-se
                </Link>
            </p>
        </div>
    );
}
