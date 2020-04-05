const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// 
// Rota / Recurso
/*
== Métodos HTTP ==
- GET : Busca informação do backend 
- POST : Cria informação no backend
- PUT : Altera informação no backend
- DELETE : Deletar uma informação no backend

== Tipos de Parâmetros ==

- Query Params : Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
- Route Params : Parâmetros utilizados para identificar recursos
- Request Body : Corpo da requisição, utilizado para criar ou alterar recursos 

== Bancos de Dados ==
- SQL : MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
- NoSQL: MongoDB, CouchDB, etc.


- Driver: SELECT * FROM users
- Query Builder : table('users').select('*').where()

*/
app.listen(3333);