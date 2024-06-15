# SafeZone

<div align="center">
  <img src="./.github/images/Safezone.png" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/github/contributors/wectornanime/safezone-back.svg?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/wectornanime/safezone-back.svg?style=for-the-badge" />
</div>

### Tópicos

🔹 [Descrição do projeto](#descrição-do-projeto-)

🔹 [Funcionalidades](#funcionalidades-️)

🔹 [Pré-requisitos](#pré-requisitos-)

🔹 [Tarefas em aberto](#tarefas-em-aberto-)

🔹 [Como rodar a aplicação](#como-rodar-a-aplicação-️)

🔹 [Mobile](https://github.com/Wectornanime/safezone-mobile)

## Descrição do projeto 📝

O SafeZone é uma solução para promover a segurança no âmbito empresarial.
Este repositório diz respeiro à versão backend do projeto, dependendo totalmente do mobile.

## Funcionalidades 🛠️

✔️ CRUD das ocorrências.

✔️ Armazenar e hospedar imagens localmente.

## Pré-requisitos ✅

⚠️ [Node Js](https://nodejs.org/en/download/)

⚠️ [Mongo db](https://www.mongodb.com/)

## Tarefas em aberto 🔄

⚠️ Adicionar sistema de usuários.

## Como rodar a aplicação 🕹️

### Clone o projeto

Primeiro faça o clone do projeto com o seguinte comando:

```
git clone https://github.com/Wectornanime/safezone-back.git
```

### Instale as dependências

Depois, acesse a pasta onde o projeto foi clonado, e instale as dependencias com o seguinte comando:

```
npm install
```

### Configure as variáveies de ambiente

Para configurar as variáveis de ambinte, você precisa criar um arquivo chamado `.env` na raiz do projeto, contendo o seguinte conteúdo:

```
PORT= #porta para executar o projeto
DATABASE_URL= #string de conexao com o banco mongodb
```

Existe um arquivo chamado `.env.example`, que você pode usar como exemplo.

### Rode a aplicação em modo de desenvolvimento:

Para rodar a aplicação em modo de desenvolvimento, execute o seguinte comando:

```
npm start
```

> Lembre-se que este projeto é uma API para um sistema mobile.

## Licença ⚖️

The [MIT License](./LICENSE) (MIT)

Copyright ©️ 2024 - SafeZone - back
