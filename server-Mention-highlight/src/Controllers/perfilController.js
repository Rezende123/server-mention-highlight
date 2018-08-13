const mongoose = require("mongoose")
const Perfil = require("../Models/perfilModel")

exports.registrarPerfil = function(req, res, next){
//Equivale ao create table em sql
    Perfil.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        senha: req.body.senha,
        sexo: req.body.sexo
    }, function(err, perfil){
        if(err)
            return res.status(500).send({
                message: "Erro ao criar produtp",
                erro:err
            })

        return res.status(200).send({
            message: "Perfil criado com sucesso",
            Perfil: perfil
        })
    })
}

//Login
exports.perfil = function(req, res, next){
  let _perfil = {
    email: req.query.email,
    senha: req.query.senha
  }

  Perfil.find(_perfil, function(err, perfil){
    if(err)
      return res.status(500).send({
        message: "Nome ou senha incorretos",
        erro: err
      })

    var msg
    if(perfil != 0) msg = "Login efetuado"
    else msg = "Erro ao fazer login"

    return res.status(200).send({
      message: msg,
      perfil
    })
  })
}

//Busca por nome
exports.nome = function(req, res, next){
  const _nome = req.params.nome_perfil

  Perfil.find({"nome": _nome}, function(err, perfil){
    if(err)
      return res.status(500).send({
        message: "Usuario nao encontrado",
        erro: err
      })

    return res.status(200).send(perfil)
  })
}

//Busca por id
exports.getPerfilById = function(req, res, next){
  const _idPerfil = req.params.id_perfil

  Perfil.findById(_idPerfil, function(err, perfil){
    if(err)
      return res.status(500).send({
        message: "Erro ao adquirir todos os produtos",
        erro: err
      })

    return res.status(200).send(perfil)
  })
}


//Puchar por letra
exports.getForLetter = function(req, res, next){
  const _term = req.params.term

  Perfil.find({"nome": {$regex: _term}}, {nome: 1} , function(err, perfil){
    if(err)
      return res.status(500).send({
        message: "Erro ao adquirir todos os perfis",
        erro: err
      })

    return res.status(200).send(perfil)
  }).sort({ "nome": 1 }).collation( { locale: 'en', strength: 1 } )
}

//Puchar todos
exports.getAll = function(req, res, next){

  Perfil.find({ }, {nome: 1}, function(err, perfil){
    if(err)
      return res.status(500).send({
        message: "Erro ao adquirir todos os perfis",
        erro: err
      })

    return res.status(200).send(perfil)
  }).sort({ "nome": 1 }).collation( { locale: 'en', strength: 1 } )
}


