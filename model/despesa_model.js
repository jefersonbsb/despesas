const Sequelize = require('sequelize');
const connection = require('../database/data');


const despesas = connection.define('despesas',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    numero_nota: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    data_nota: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    data_despesas: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    valor_nota: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    despesa:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    localidade: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    observacao: {
        type: Sequelize.TEXT,
        allowNull: true
    }

});

despesas.sync({force: false}).then(()=>{
    console.log("Tabela criada com sucesso");
});

module.exports = despesas;