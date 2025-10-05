import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./style/index.css";
import { Login } from './routes/Login';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
