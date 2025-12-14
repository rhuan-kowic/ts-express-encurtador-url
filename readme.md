# ✂️ TS Encurtador API

> Uma API REST robusta para encurtamento de URLs e Analytics, desenvolvida com Node.js, Express e TypeScript.

![Badge TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Badge Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## 💻 Sobre o Projeto

Este projeto é o resultado final de um **Desafio Intensivo de TypeScript**. O objetivo foi migrar do JavaScript padrão para uma arquitetura robusta e tipada, aplicando conceitos de Engenharia de Software.

A aplicação segue o padrão **MVC (Model-View-Controller)**, utiliza **Generics** para persistência em memória e já está configurada com **CORS** para integração com Front-end.

### ✨ Funcionalidades

- [x] **Encurtar URL:** Recebe uma URL longa e gera um ID único de 5 caracteres.
- [x] **Redirecionamento:** Acessar o código curto redireciona o usuário para o site original.
- [x] **Analytics:** Contagem automática de cliques por link.
- [x] **Listagem:** Visualização de todos os links cadastrados no sistema.
- [x] **Validação:** Garante que dados inválidos não sejam processados.

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** TypeScript (Strict Mode)
- **Framework:** Express.js
- **Segurança:** CORS (Cross-Origin Resource Sharing)
- **Tooling:** ts-node-dev (Hot Reload)
- **Arquitetura:** Repository Pattern (Genérico) & MVC.

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
    "cliques": 0
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
  "cliques": 42
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
      "cliques": 12
    },
    {
      "id": "irwrt",
      "urlOriginal": "https://expressjs.com/",
      "cliques": 1
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