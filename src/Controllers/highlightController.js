const mongoose = require("mongoose")
const TextInput = require("../Models/highlightModel")

exports.registrarTextInput = function(req, res, next){
//Equivale ao create table em sql
    TextInput.create({
        id_input: req.body.id_input,
        text_input: req.body.text_input,
        listForHighlight: req.body.listForHighlight
    }, function(err, textInput){
        if(err)
            return res.status(500).send({
                message: "Erro ao criar produtp",
                erro:err
            })

        return res.status(200).send({
            message: "TextInput criado com sucesso",
            TextInput: textInput
        })
    })
}

//Puchar todos
exports.getAllText = function(req, res, next){
    TextInput.find({ }, {text_input: 1, listForHighlight: 1}, function(err, textInput){
      if(err)
        return res.status(500).send({
          message: "Erro ao adquirir todos os perfis",
          erro: err
        })
  
      return res.status(200).send(textInput)
    }).sort({ "nome": 1 }).collation( { locale: 'en', strength: 1 } )
  }

//Busca por nome
exports.Update = function(req, res, next){
    const _update = {
        text_input: req.body.text_input,
        listForHighlight: req.body.listForHighlight
    }
    const id_input = req.params.textInput_id_input

    TextInput.update({"id_input": id_input}, _update, function(err, textInput){
      if(err)
        return res.status(500).send({
          message: "Usuario nao encontrado",
          erro: err
        })
  
      return res.status(200).send(textInput)
    })
  }

