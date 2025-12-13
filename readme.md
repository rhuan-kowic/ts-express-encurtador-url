# ✂️ TS Encurtador API

> Uma API REST robusta para encurtamento de URLs, desenvolvida com Node.js, Express e TypeScript.

![Badge TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Badge Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## 💻 Sobre o Projeto

Este projeto é o resultado final de um **Desafio Intensivo de TypeScript**. O objetivo foi migrar do JavaScript padrão para uma arquitetura robusta e tipada, aplicando conceitos de Engenharia de Software.

A aplicação segue o padrão **MVC (Model-View-Controller)** e utiliza **Generics** para simular um banco de dados em memória reutilizável.

### ✨ Funcionalidades

- [x] **Encurtar URL:** Recebe uma URL longa e gera um ID único de 5 caracteres.
- [x] **Redirecionamento:** Acessar o código curto redireciona o usuário para o site original.
- [x] **Listagem:** Visualização de todos os links cadastrados no sistema.
- [x] **Validação:** Garante que dados inválidos não sejam processados.

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** TypeScript (Strict Mode)
- **Framework:** Express.js
- **Tooling:** ts-node-dev (para Hot Reload)
- **Design Patterns:** Repository Pattern (Genérico), MVC.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clone o repositório
$ git clone [https://github.com/rhuan-kowic/ts-express-encurtador-url.git](https://github.com/rhuan-kowic/ts-express-encurtador-url.git)

# 2. Acesse a pasta
$ cd ts-express-encurtador-url

# 3. Instale as dependências
$ npm install

# 4. Inicie o servidor
$ npm run dev