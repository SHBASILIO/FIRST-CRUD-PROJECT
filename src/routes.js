const express = require ('express')
const routes = express.Router()
const container = require('./app/controllers/container')
const movimentacoes = require('./app/controllers/movimentacoes')

routes.get('/', function(req, res){
    return res.redirect("/container")
})

routes.get('/container', container.index)
routes.get('/container/create', container.create)
routes.get('/container/:id', container.show)
routes.get('/container/:id/edit', container.edit)
routes.post('/container', container.post)
routes.put('/container', container.put)
routes.delete('/container', container.delete)

/* ROTAS DE MOVIMENTAÇÃO */

routes.get('/movimentacoes', movimentacoes.index)
routes.get('/movimentacoes/create', movimentacoes.create)
routes.get('/movimentacoes/:id', movimentacoes.show)
routes.get('/movimentacoes/:id/edit', movimentacoes.edit)
routes.post('/movimentacoes', movimentacoes.post)
routes.put('/movimentacoes', movimentacoes.put)
routes.delete('/movimentacoes', movimentacoes.delete)

module.exports = routes