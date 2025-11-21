# 🌱 FiapIn - Conexão Agro 4.0

> "Conecte-se ao Agro 4.0: Encontre os melhores profissionais que unem campo e tecnologia."

O **FiapIn** é uma plataforma web desenvolvida para conectar profissionais do agronegócio, com foco na inovação e tecnologia no campo. O projeto oferece uma interface moderna para buscar e visualizar perfis de especialistas em áreas como Agronomia, Tecnologia, Gestão e Veterinária.

Este projeto faz parte da **Global Solution** da FIAP.

---

## 📸 Funcionalidades

- **📋 Listagem de Profissionais:** Visualização de cards com foto, nome, cargo, localização e principais habilidades.
- **🔍 Filtros Dinâmicos:** Barra de busca por texto (nome/cargo) e botões de filtro rápido por área de atuação.
- **🌗 Dark Mode:** Alternância de tema (Claro/Escuro) com suporte à preferência do sistema.
- **📄 Detalhes em Modal:** Visualização expandida do perfil com resumo, experiências, formação e contato.
- **📱 Responsividade:** Layout adaptável para dispositivos móveis e desktops.

---

## 🚀 Tecnologias Utilizadas

O projeto utiliza as ferramentas mais recentes do ecossistema React:

- **[React](https://react.dev/)** (v19)
- **[Vite](https://vitejs.dev/)** (Build Tool)
- **[Tailwind CSS](https://tailwindcss.com/)** (v4) - Estilização via `@theme` e `@import`
- **Node.js** - Para scripts auxiliares

---

## 📂 Estrutura do Projeto

```bash
fiapin/
├── public/              # Arquivos públicos
├── src/
│   ├── assets/          # Imagens (logo)
│   ├── components/      # Componentes (Header, FilterBar, ProfileCard, etc.)
│   ├── data/            # Dados mockados (perfis.json)
│   ├── App.jsx          # Componente principal
│   ├── index.css        # Configuração do Tailwind v4
│   └── main.jsx         # Ponto de entrada
├── gerarDados.js        # Script gerador de perfis
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/Caio-Front-End/FiapIn](https://github.com/Caio-Front-End/FiapIn)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd FiapIn
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
6.  **Abra no navegador:**
    `A aplicação estará disponível em http://localhost:5173 (ou na porta indicada no seu terminal).`

---

## 👨‍💻 Desenvolvedores

| Nome                           | Rede Social                                                                | RM's   |
| ------------------------------ | -------------------------------------------------------------------------- | ------ |
| Caio Nascimento Battista       | [LinkedIn](https://www.linkedin.com/in/cnbtt/)                             | 561383 |
| Manoah Leão                    | [LinkedIn](https://www.linkedin.com/in/manoah-le%C3%A3o-735a83346/)        | 563713 |
