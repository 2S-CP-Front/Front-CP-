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
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  return (
    <>

      <Header />
      <section className="grid place-content-center h-screen ">
        <h1>Login</h1>
        <form className="px-4 py-2 rounded-2xl shadow-lg grid gap-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-y-1">
            <label htmlFor="nomeUsuario">Nome</label>
            <input 
            type="text" 
            id="nomeUsuario" 
            placeholder="user.name"
            {...register("nomeUsuario", { required: true })}/>
            <small className="text-red-500">Erro</small>
          </div>
          <div className="grid gap-y-1">
            <label htmlFor="email">E-mail</label>
            <input 
            type="email" 
            id="email" 
            placeholder="user.name@example.com"
            {...register("email", { required: true })}/>
            <small className="text-red-500">Erro</small>
          </div>

          <button>Entrar</button>
        </form>
      </section>
    </>
  );
}

export {Login};

function userForm<T>(): { register: any; handleSubmit: any; formState: { errors: any; }; } {
  throw new Error("Function not implemented.");
}
