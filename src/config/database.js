const { underscoredIf } = require("sequelize/lib/utils");

module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "secret",
    database: "teste-dominando-nodejs",
    define:{
        timestamp: true, // Cria duas coluna update_at e created_at
        underscored: true, //troca a nomeclatura =>  nomeTeste1 => nome_teste_1 =
        underscoredAll: true
    }
}