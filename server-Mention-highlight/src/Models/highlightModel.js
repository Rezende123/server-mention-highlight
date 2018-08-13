const mongoose = require("mongoose")
//Modelo das "Tabelas do app"
var textInputSchema = new mongoose.Schema({
  id_input: {
    type: String,
    required: [true, "Falha ao adicionar"]
  },
  text_input: {
    type: String,
    required: [true, "Falha ao adicionar"]
  },
  listForHighlight: {
    type: Array,
    required: [true, "Falha ao adicionar"]
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("TextInput", textInputSchema)
