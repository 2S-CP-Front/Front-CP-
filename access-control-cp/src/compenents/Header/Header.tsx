import { Link } from "react-router";

function Header() {
    return (
        <header className="bg-blue-400 flex py-2 px-4 justify-between items-center text-white shadow-lg">
            <div className="grid">
                <h1>Maicon Douglas</h1>
                <p>maicon.douglas@example.com</p>
            </div>
            <nav>
                <ul className="flex gap-x-8">
                    <li>
                        <Link to={"/"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/cadastro"}>Cadastro</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export {Header};