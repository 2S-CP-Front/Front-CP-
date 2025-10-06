import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./style/index.css";
import { Login } from './routes/Login';
import { Cadastro } from './routes/Cadastro';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="cadastro" element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
