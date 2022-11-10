const express = require('express');
const app = express();
const port = 3000;
const rotas = require('./routes/rotas');
const connection = require('./database/data');

//Autenticação com o Banco de Dados
connection.authenticate()
 .then(() => {
    console.log("Conexão realizada com sucesso com o banco de dados!")
 })
 .catch(err => {
    console.log(err);
 });

 
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', rotas);


app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
});