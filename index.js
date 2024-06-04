const express = require('express');
const app = express();
const port =3000;
const router = require("./routes/index");
router(app);
/*
//aula de banco
const conexao = require("./Util/conexao");
const tabela = require("./Util/tabela");

tabela.init(conexao);
console.log(tabela.listar());


/*
//teste de rota aula 3 
const {Router} = require("express"); //
const router = Router();
router.get("/carros", (req, res)=>{
    res.send("teste");
});
*/


app.listen(port, (error)=>{
    if(error){
        console.log("erro");
        return;
    }
    console.log("ok");
});

