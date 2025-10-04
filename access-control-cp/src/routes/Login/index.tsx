import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { Usuario } from "../../types/Usuario";

type LoginForm = Pick<Usuario, "nomeUsuario" | "email">;

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    defaultValues: { nomeUsuario: "", email: "" }
  });

  const onSubmit = (data: LoginForm) => {
    console.log("Login:", data);
    alert(`Bem-vindo(a), ${data.nomeUsuario}!`);
  };

  return (
    <div className="mx-auto my-12 w-full max-w-md px-4">
      <h1 className="mb-6 text-3xl font-bold">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="nomeUsuario" className="text-sm text-slate-600">Nome de usuário</label>
          <input
            id="nomeUsuario"
            type="text"
            className="h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-sky-500"
            {...register("nomeUsuario", {
              required: "Informe o nome de usuário.",
              minLength: { value: 3, message: "Use ao menos 3 caracteres." }
            })}
            placeholder="ex.: maicon_douglas"
          />
          {errors.nomeUsuario && (
            <p className="text-sm text-rose-600">{errors.nomeUsuario.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-slate-600">E-mail</label>
          <input
            id="email"
            type="email"
            className="h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-sky-500"
            {...register("email", { required: "Informe o e-mail." })}
            placeholder="ex.: voce@exemplo.com"
          />
          {errors.email && (
            <p className="text-sm text-rose-600">{errors.email.message}</p>
          )}
        </div>

        <button type="submit" className="h-11 rounded-lg bg-sky-500 px-4 font-semibold text-white">
          Entrar
        </button>
      </form>

      <p className="mt-6 text-center text-slate-600">
        Não tem uma conta?
        <Link to="/cadastro" className="ml-1 font-semibold text-sky-600 hover:underline">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}
