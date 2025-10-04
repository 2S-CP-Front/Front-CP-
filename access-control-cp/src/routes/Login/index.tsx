import type React from "react";
import { Link } from "react-router-dom";

export default function Login(){
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('Tentativa de login')
    }
    return (
        <div style={{padding: '20px', maxWidth: '400px', margin: '50px auto'}}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <div>
                    <label htmlFor="nomeUsuario">Nome de Usuário</label>
                    <input 
                    type="text" 
                    id="nomeUsuario"
                    style={{width: '100%', padding: '8px', marginTop: '5px'}}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email"
                    style={{width: '100%', padding: '8px', marginTop: '5px'}}
                    />
                </div>

                <button
                type="submit"
                style={{padding: '10px', backgroundColor: '#57d1fec7', color: 'white', border: 'none', cursor: 'pointer'}}> 
                Entrar
                </button>
            </form>

            <p style={{marginTop: '20px', textAlign: 'center'}}>
                Não tem uma conta?
                <Link to="/cadastro" style={{marginLeft: '5px', color: '#57d1fec7'}}>
                Cadastre-se
                </Link>
            </p>
        </div>

    )
}