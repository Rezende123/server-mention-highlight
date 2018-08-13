//'use strict';
const express = require('express');
const perfilController = require('../Controllers/perfilController.js');
const highlightController = require("../Controllers/highlightController.js");

module.exports = function (app) {
    const versionApi = express.Router();
    //const apiRoutes = express.Router();
    const perfilRoute = express.Router();
    const highlightRoute = express.Router();

    app.use('/api', versionApi , function (req, res) {
        res.writeHead(200);
        res.end('API FUNCIONOU! UHUUULLL\n');
    })

    app.use("/perfil",
        perfilRoute.post("/", perfilController.registrarPerfil),          //Create
        perfilRoute.get("/login", perfilController.perfil),                //login
        perfilRoute.get("/nome/:nome_perfil", perfilController.nome),      //Select nome
        perfilRoute.get("/id/:id_perfil", perfilController.getPerfilById), //Select id
        perfilRoute.get("/letter/:term", perfilController.getForLetter),
        perfilRoute.get("/all/", perfilController.getAll)
    )

    app.use("/text_highlight",
        highlightRoute.post("/",highlightController.registrarTextInput),
        highlightRoute.get("/all/",highlightController.getAllText),
        highlightRoute.put("/update/:textInput_id_input",highlightController.Update)

    )
}
