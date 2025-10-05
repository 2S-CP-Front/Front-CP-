import { useForm, type SubmitHandler } from "react-hook-form";
import { Header } from "../../compenents/Header/Header";


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

    if (!post.ok) {
      setError("nomeUsuario", {
        type: "server",
        message: "Falha ao cadastrar. Tente novamente.",
      });
      setError("email", {
        type: "server",
        message: "Falha ao cadastrar. Tente novamente.",
      });
      return;
    }

    const novo: User = await post.json();
    localStorage.setItem("name", novo.nome);
    alert(`Cadastro realizado para: ${novo.nomeUsuario}`);
    reset();
    window.location.reload();
  };

  return (
    <>
      <Header />
      <section className="grid h-screen place-content-center">
        <h1>Cadastro</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid min-w-100 gap-y-2 rounded-2xl px-4 py-2 shadow-lg"
          noValidate
        >
          {/* Campo Nome Completo */}
          <div className="grid gap-y-1">
            <label htmlFor="nome">Nome completo</label>
            <input
              type="text"
              id="nome"
              placeholder="Seu nome"
              className="rounded-md border-2 border-blue-700 px-2 py-1 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              {...register("nome", {
                required: "Campo nome é obrigatório",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
            />
            {errors.nome && (
              <small className="text-red-500">{errors.nome.message}</small>
            )}
          </div>

          {/* Campo Nome de Usuário */}
          <div className="grid gap-y-1">
            <label htmlFor="nomeUsuario">Nome de usuário</label>
            <input
              type="text"
              id="nomeUsuario"
              placeholder="nomeUsuario"
              className="rounded-md border-2 border-blue-700 px-2 py-1 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
               {...register("nomeUsuario", {
                required: "Campo nome de usuário é obrigatório",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
            />
            {errors.nomeUsuario && (
              <small className="text-red-500">
                {errors.nomeUsuario.message}
              </small>
            )}
          </div>
          {/* Campo E-mail */}
          <div className="grid gap-y-1">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="user.name@example.com"
              className="rounded-md border-2 border-blue-700 px-2 py-1 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              {...register("email", {
                required: "Campo e-mail é obrigatório",
              })}
            />
            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>

          {/* Botão de Submit */}
          <button
            type="submit"
            className="justify-self-end rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Cadastrar
          </button>
        </form>
      </section>
    </>
  );
}
