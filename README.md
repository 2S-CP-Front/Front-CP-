# 📘 Projeto – Formulários com React + TypeScript + Tailwind + json-server

---

## 👥 Integrantes

- **Maicon Douglas** — **RM: 561279**
- **Laura Lopes** — **RM: 566376**
- **Richard Freitas** — **RM: 566127**



Aplicação simples com duas páginas (**Login** e **Cadastro**) feita em **React + TypeScript**, estilizada com **Tailwind CSS v4.1.13**, usando **React Hook Form** para validação e **json-server** para simular a API.  
O cadastro verifica **duplicidade** de `nomeUsuario` e `email` antes de criar o usuário e exibe **mensagens de erro personalizadas** abaixo dos inputs.

---

## 🏗️ Tecnologias

- **React** + **TypeScript** (Vite)
- **react-router-dom**
- **react-hook-form**
- **Tailwind CSS 4.1.13**
- **json-server** (API fake)

---

## 🗂️ Estrutura (simplificada)

```
db/
  users.json      // base do json-server
src/
  compenents/
    Header/
      Header.tsx
  pages/
    Login/
      Login.tsx
    Cadastro/
      Cadastro.tsx
  style/
    index.css // @import "tailwindcss";
  types/
    Usuario.ts
  main.tsx
postcss.config.mjs
```

---

## ⚙️ Configuração

### 1) Instalar dependências

```bash
npm install
npm install react-router-dom react-hook-form
npm install -D tailwindcss@4.1.13 @tailwindcss/postcss@4.1.13 postcss
npm install -D json-server
```

### 2) Tailwind v4.1.13

**postcss.config.mjs**
```js
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

**src/index.css**
```css
@import "tailwindcss";
```

### 3) Scripts no `package.json` (exemplo)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "api": "json-server --watch db/users.json --port 3000 --delay 300"
  }
}
```

> Ajuste a porta se preferir (`3001`, etc.). O código de exemplo usa `http://localhost:3000/usuarios`.

### 4) Banco fake (`json-server`)

**db/users.json**
```json
{
  "usuarios": [
    { "id": 1, "nome": "Maicon Douglas", "nomeUsuario": "maicon_douglas", "email": "maicon@example.com" }
  ]
}
```

---

## ▶️ Como rodar

Em dois terminais:

```bash
# Terminal 1: API fake
npm run api      # http://localhost:3000/usuarios

# Terminal 2: app
npm run dev      # Vite (frontend)
```

Abra o app no endereço indicado pelo Vite (geralmente `http://localhost:5173`).

---

## 🧩 Páginas

### Login
- Campos: `nomeUsuario`, `email`
- **React Hook Form** com validações básicas (`required`, `minLength` onde necessário)
- Mensagens de erro exibidas **abaixo dos inputs**
- Exemplo simples de consumo dos dados (ex.: `alert`, `console.log`)

### Cadastro
- Campos: `nome`, `nomeUsuario`, `email`
- **React Hook Form** com validações básicas e mensagens de erro abaixo dos inputs
- **Verifica duplicidade** antes de cadastrar:
  - Busca usuários em `GET /usuarios`
  - Compara `nomeUsuario` e `email` (normalizados em minúsculas)
  - Se houver duplicidade, usa `setError` para mostrar mensagem no campo e **bloquear** o submit
- Se não houver duplicidade:
  - Faz `POST /usuarios`
  - Salva `name` no **localStorage**
  - Dá feedback simples (ex.: `alert`) e **reset** no formulário

---

## 🧠 Tipos (TypeScript)

**src/types/Usuario.ts**
```ts
export type Usuario = {
  id: number;
  nome: string;
  nomeUsuario: string;
  email: string;
}
```

Os formulários usam tipos derivados (ex.: `Pick`) para limitar aos campos necessários.

---

## 🧪 Fluxos principais

- **Validações com RHF**: `required` e `minLength` com mensagens personalizadas.
- **Exibição de erros**: mensagens aparecem **logo abaixo** dos inputs.
- **Cadastro**:
  1. Normaliza valores (`trim`, `toLowerCase` em `email` e `nomeUsuario`)
  2. Consulta `GET /usuarios` e verifica duplicidade (`some`)
  3. Em caso de duplicidade, `setError` no campo correspondente
  4. Se estiver tudo ok, `POST /usuarios` e feedback

---

## 🛠️ Dicas & Troubleshooting

- **Tailwind não aplica estilos?**
  - `postcss.config.mjs` com `@tailwindcss/postcss`
  - `@import "tailwindcss";` no `index.css`
  - `import "./index.css"` no `main.tsx`
  - Reinicie o Vite após ajustes de PostCSS

- **API não responde?**
  - Confira se o `json-server` está rodando na **mesma porta** usada no código (`http://localhost:3000/usuarios`)
  - Verifique o caminho e o nome do arquivo `db/users.json`

---

## 🧭 Rotas

- `/login` → página de Login  
- `/cadastro` → página de Cadastro  
- Redirecionamento raiz para `/login` (opcional no `main.tsx`)

---

## 🧾 Convenções de commit (sugestão)

- `feat(auth/cadastro): checar duplicidade e exibir erros nos inputs`
- `feat(auth/login): validação básica com RHF`
- `chore(dev): adicionar json-server e script npm run api`
- `style(ui): aplicar Tailwind v4`

---

## ✅ Conclusão

O projeto possui duas telas com **validações simples**, **feedback de erro** com React Hook Form e integração com **json-server** para **verificar duplicidade** e realizar o **cadastro** de usuários. Tudo estilizado com **Tailwind 4.1.13** e navegando com **react-router-dom**.
