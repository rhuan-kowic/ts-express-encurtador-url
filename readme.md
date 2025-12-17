# ✂️ TS Encurtador API

> API REST robusta para encurtamento de URLs com persistência de dados real, desenvolvida com Node.js, Express, TypeScript e Prisma.

![Badge TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Badge Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Badge SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

## 💻 Sobre o Projeto

Este projeto é a evolução de um desafio de TypeScript. Inicialmente construído com armazenamento em memória, ele foi **migrado para uma arquitetura escalável** utilizando Banco de Dados Relacional.

A aplicação agora garante a **persistência dos dados** (os links não somem ao reiniciar o servidor), utiliza **Prisma ORM** para comunicação segura com o banco e segue o padrão **MVC**.

### ✨ Funcionalidades

- [x] **Encurtar URL:** Recebe uma URL longa e gera um hash único.
- [x] **Persistência Real:** Dados salvos em banco SQLite.
- [x] **Redirecionamento:** Acessar o código curto redireciona para o site original.
- [x] **Analytics:** Contador de cliques atômico e seguro.
- [x] **Integração:** Pronto para conectar com Front-end (CORS habilitado).

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** TypeScript (Strict Mode)
- **Runtime:** Node.js
- **Framework:** Express.js
- **ORM (Object-Relational Mapping):** Prisma
- **Banco de Dados:** SQLite (Arquivo local `dev.db`)
- **Tooling:** ts-node-dev (Hot Reload)

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

# 4. Crie o Banco de Dados (Migração do Prisma)
$ npx prisma migrate dev --name init

# 5. Inicie o servidor
$ npm run dev
```

Servidor disponível em: http://localhost:3000

# 🔌 Documentação da API

## 1. Encurtar URL (POST)

Cria um novo link encurtado e inicializa o contador de cliques.

**Rota:**  
**POST /encurtar**

**Body (JSON):**

```json
{
  "urlOriginal": "https://www.google.com"
}
```

**Resposta (201):**

```json
{
  "message": "Link encurtado!",
  "link": {
    "id": "abc12",
    "urlOriginal": "https://www.google.com",
    "cliques": 0,
    "criadoEm": "2025-12-17T12:00:00.000Z"
  }
}
```

## 2. Acessar Link (GET)

Contabiliza +1 clique e redireciona para o site original.
**Rota:**  
**GET /:code**

```bash
# Exemplo
http://localhost:3000/abc12
```

## 3. Ver Estatísticas (GET)

Retorna os dados do link e o total de acessos, sem redirecionar.
**Rota:**
**GET /:code/stats**

```bash
# Exemplo
http://localhost:3000/abc12/stats
```

**Resposta (200):**

```json
{
  "id": "abc12",
  "urlOriginal": "https://www.google.com",
  "cliques": 42,
  "criadoEm" "..."
}
```

## 4. Listar Tudo (GET)

Retorna todos os links salvos na memória.
**Rota:**
**GET /links**

```json
{
  "message": [
    {
      "id": "3528q",
      "urlOriginal": "https://expressjs.com/en/guide/routing.html",
      "cliques": 12,
      "criadoEm" "...",
    },
    {
      "id": "irwrt",
      "urlOriginal": "https://expressjs.com/",
      "cliques": 1,
      "criadoEm" "..."
    }
  ]
}
```

## 🧠 Aprendizados do Projeto

Durante o desenvolvimento, foram aplicados os seguintes conceitos de TypeScript:

- Tipagem Estática: Uso de Request, Response e interfaces de dados.
- Generics: Criação da classe BancoDeDados<T>, reutilizável para qualquer entidade.
- Modificadores de Acesso: Uso de private e public nas classes.
- Integração Fullstack: Configuração de CORS para permitir consumo via React.
- De Array para SQL: Substituição de links.push() por INSERT INTO.
- ORM vs Query Crua: Uso do Prisma para evitar SQL Injection e ganhar produtividade.
- Async/Await: Tratamento correto de Promises, já que o banco de dados não responde instantaneamente.
- Migrations: Versionamento da estrutura do banco de dados via código
