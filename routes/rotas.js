const { application } = require('express');
const express = require('express');
const router = express.Router();
const connection = require('../database/data');
const despesaModel = require('../model/despesa_model');


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});
    
router.get('/dashboard', (req, res) => {

    despesaModel.findAll({
        raw:true, order:[
            ['id','DESC']
        ]
    }).then(despesas => {
        res.render('dashboard',{
            despesas: despesas
        });
    });

});

router.get('/insert', (req, res) => {
    res.render('insert');
});

//Salvar dados na tabela de despesas
router.post('/saveInsert', (req, res) => {

    let NumNota = req.body.NumNota.toUpperCase();
    let DateNota = req.body.DateNota;
    let DateDespesa = req.body.DateDespesa;
    let valor = req.body.valor;
    let despesa = req.body.despesa.toUpperCase();
    let localidade = req.body.localidade.toUpperCase();
    let descricao = req.body.descricao.toUpperCase();
    let observacao = req.body.obs.toUpperCase();


    despesaModel.create({
        numero_nota: NumNota,
        data_nota: DateNota,
        data_despesas: DateDespesa,
        valor_nota: valor,
        despesa: despesa,
        localidade: localidade,
        descricao: descricao,
        observacao: observacao
    }).then(()=>{
        res.redirect('/dashboard');
    });

});

router.get('/search/:id', (req, res) => {    
    let id = req.params.id;
    despesaModel.findOne({
        where:{id: id}
    }).then(despesaModel => {
        if(despesaModel != undefined){
            res.render('search',{
                despesaModel: despesaModel
        });
    }else{
        res.redirect('/dashboard');
        };
    });
});



module.exports = router;