import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Cadastro from "./routes/Cadastro";

export default function App(){
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
            </Routes>
        </div>
    )
}
