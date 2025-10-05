function Login() {
  return (
    <section>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="nomeUsuario">Nome</label>
          <input type="text" id="nomeUsuario" placeholder="user.name"/>
          <small className="text-red-500">Erro</small>
        </div>
         <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="user.name@example.com"/>
          <small className="text-red-500">Erro</small>
        </div>

        <button>Entrar</button>
      </form>
    </section>
  );
}

export {Login};