import { Link } from "react-router-dom";

export default function Cadastro(){
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('Tentativa de cadastro')
    }
    return(
        <div style={{padding: '20px', maxWidth: '400px', margin: '50px auto'}}>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <div>
                    <label htmlFor="nome">Nome Completo:</label>
                    <input 
                    type="text" 
                    id="nome"
                    style={{width: '100%', padding: '8px', marginTop:'5px'}}
                     />
                </div>
                <div>
                    <label htmlFor="nomeUsuario">Nome de Usuário</label>
                    <input 
                    type="text"
                    id="nomeUsuario" 
                    style={{width: '100%', padding: '8px', marginTop: '5px'}}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    id="email"
                    style={{width: '100%', padding: '8px', marginTop: '5px'}} />
                </div>

                <button type="submit" style={{padding: '10px', backgroundColor: '#a72855ff', color: 'white', border: 'none'}}>
                    Cadastrar
                </button>
            </form>

            <p style={{marginTop: '20px', textAlign: 'center'}}>
                Já tem uma conta?
                <Link to="/Login" style={{marginLeft: '5px', color: '#57d1fec7'}}>
                Faça login
                </Link>
            </p>
        </div>
    )
}