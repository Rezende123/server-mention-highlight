const mongoose = require("mongoose")
//Modelo das "Tabelas do app"
var PerfilSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "Informe seu nome"]
    },
    email: {
      type: String,
      required: [true, "Informe seu email"]
    },
    sobrenome: {
        type: String,
        required: [true, "Informe seu sobrenome"]
    },
    senha: {
        type: String,
        required: [true, "Informe a senha"]
    },
    sexo: {
        type: String,
        required: [true, "Informe seu sexo"]
    }

}, {
    timestamps: true
})
// Produto equivale ao nome da tabela
module.exports = mongoose.model("Perfil", PerfilSchema)
