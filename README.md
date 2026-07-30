# 📝 CRUD de Tarefas API

API REST desenvolvida em **Node.js** para gerenciamento de tarefas, aplicando conceitos fundamentais de backend como **CRUD**, manipulação de arquivos, streams e processamento de arquivos CSV.

O projeto foi desenvolvido com o objetivo de praticar criação de APIs sem frameworks, trabalhando diretamente com os recursos nativos do Node.js.

---

## 🚀 Tecnologias utilizadas

* Node.js
* JavaScript (ES Modules)
* HTTP Module
* Streams do Node.js
* CSV Parse

---

## 📌 Funcionalidades

A API permite:

* Criar tarefas
* Listar tarefas
* Buscar tarefas por título ou descrição
* Atualizar tarefas
* Excluir tarefas
* Marcar tarefas como completas ou incompletas
* Importar tarefas através de um arquivo CSV

---

# 📂 Estrutura de uma tarefa

Cada tarefa possui:

```json
{
  "id": "uuid",
  "title": "Estudar Node.js",
  "description": "Aprender criação de APIs",
  "completed_at": null,
  "created_at": "2026-07-30T00:00:00.000Z",
  "updated_at": "2026-07-30T00:00:00.000Z"
}
```

### Propriedades

| Campo          | Descrição                     |
| -------------- | ----------------------------- |
| `id`           | Identificador único da tarefa |
| `title`        | Título da tarefa              |
| `description`  | Descrição da tarefa           |
| `completed_at` | Data de conclusão da tarefa   |
| `created_at`   | Data de criação               |
| `updated_at`   | Data da última atualização    |

---

# 🔥 Rotas da API

## Criar tarefa

### POST `/tasks`

Cria uma nova tarefa.

### Body:

```json
{
  "title": "Estudar Node.js",
  "description": "Criar uma API utilizando Node puro"
}
```

Os campos abaixo são gerados automaticamente:

* `id`
* `created_at`
* `updated_at`
* `completed_at`

---

## Listar tarefas

### GET `/tasks`

Retorna todas as tarefas cadastradas.

Também permite filtragem:

```
GET /tasks?search=node
```

A busca verifica os campos:

* `title`
* `description`

---

## Atualizar tarefa

### PUT `/tasks/:id`

Atualiza uma tarefa existente.

### Body:

```json
{
  "title": "Novo título",
  "description": "Nova descrição"
}
```

Antes da atualização, a API verifica se a tarefa existe.

---

## Remover tarefa

### DELETE `/tasks/:id`

Remove uma tarefa pelo seu identificador.

Antes da remoção, é validada a existência da tarefa.

---

## Alterar status da tarefa

### PATCH `/tasks/:id/complete`

Alterna o status da tarefa.

Quando completa:

```json
{
  "completed_at": "2026-07-30T00:00:00.000Z"
}
```

Quando desmarcada:

```json
{
  "completed_at": null
}
```

---

# 📄 Importação de CSV

O projeto possui um script separado para importar tarefas através de um arquivo CSV.

A leitura é realizada utilizando a biblioteca `csv-parse` com um iterador assíncrono (`for await`).

Formato esperado:

```csv
title,description
Task 01,Descrição da Task 01
Task 02,Descrição da Task 02
Task 03,Descrição da Task 03
```

Cada linha do arquivo é transformada em uma requisição:

```
POST /tasks
```

criando automaticamente uma nova tarefa na API.

---

# ⚙️ Como executar o projeto

## Clone o repositório

```bash
git clone <repository-url>
```

## Instale as dependências

```bash
npm install
```

## Execute o servidor

```bash
npm run dev
```

O servidor será iniciado e ficará disponível em:

```
http://localhost:3333
```

---

# 📥 Executando importação CSV

Com o servidor funcionando, execute:

```bash
node src/csv/import-csv.js
```

O script irá:

1. Ler o arquivo CSV
2. Percorrer cada registro
3. Enviar os dados para a API
4. Criar as tarefas automaticamente

---

# 📚 Conceitos praticados

Durante o desenvolvimento foram aplicados conceitos como:

* Criação de servidor HTTP com Node.js
* Rotas e métodos HTTP
* Manipulação de requisições e respostas
* Middlewares
* Streams
* Leitura e escrita de arquivos
* CRUD
* Query params
* Validação de dados
* Processamento de CSV
* Organização de código

---

## 👨‍💻 Autor

Desenvolvido por **Samuel Melo**.

Projeto desenvolvido para prática de fundamentos do Node.js e construção de APIs REST.
