import { useForm, type SubmitHandler } from "react-hook-form"
import { Header } from "../../compenents/Header/Header";

type Inputs = {
  nomeUsuario: string
  email: string
}


function Login() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  return (
    <>

      <Header />
      <section className="grid place-content-center h-screen ">
        <h1>Login</h1>
        <form className="px-4 py-2 rounded-2xl shadow-lg grid gap-y-2 min-w-100" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-y-1">
              <label htmlFor="nomeUsuario">Nome</label>
            <input 
              type="text" 
              id="nomeUsuario" 
              placeholder="user.name"
              className="border-2 border-blue-700 rounded-md px-2 py-1 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              {...register("nomeUsuario", {
                required: "Campo nome é obrigatório",
                minLength: {value: 3, message: "Mínimo 3 caracteres"},
              })}
            />
            {errors.nomeUsuario && (
              <small className="text-red-500">{errors.nomeUsuario.message}</small>
             )}
          </div>
          <div className="grid gap-y-1">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              placeholder="user.name@example.com"
              className="border-2 border-blue-700 rounded-md px-2 py-1 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              {...register("email", { 
                required: "Campo nome é obrigatório",
                minLength: {value: 3, message: "Mínimo 3 caracteres"},
            })}
            />
             {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
             )}
            <small className="text-red-500">Erro</small>
          </div>

          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 justify-self-end">Entrar</button>
        </form>
      </section>
    </>
  );
}

export {Login};