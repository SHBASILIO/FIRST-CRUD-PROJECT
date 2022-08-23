const { off } = require('process')
const { idleCount } = require('../../config/db')
const {dateend, datestart} = require('../../lib/utils')
const Movimentacao = require('../model/Movimentacao')

module.exports = {
    index(req, res){
        Movimentacao.all(function(movimentacoes, movimentacao){
            return res.render('movimentacoes/index', {movimentacoes})
        })
    },

    create(req, res){
        return res.render('movimentacoes/create')
    },

    post(req, res){
        const keys = Object.keys(req.body)
        
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }

        Movimentacao.create(req.body, function(movimentacao){
            return res.redirect(`/movimentacoes/${movimentacao.id}`)
        })
    },

    show(req, res){
        Movimentacao.find(req.params.id, function(movimentacao){
            if(!movimentacao) return res.send("Movimentação not found")

            movimentacao.startdate = datestart(movimentacao.startdate).format
            movimentacao.enddate = dateend(movimentacao.enddate).format

            return res.render("movimentacoes/show", { movimentacao })
        })
    },

    edit(req, res){
        Movimentacao.find(req.params.id, function(movimentacao){
            if(!movimentacao) return res.send("Movimentação not found")

            movimentacao.startdate = datestart(movimentacao.startdate).format
            movimentacao.enddate = dateend(movimentacao.enddate).format

            return res.render('movimentacoes/edit', { movimentacao })
        })
    },

    put(req, res){
        const keys = Object.keys(req.body)
        
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }

        Movimentacao.update(req.body, function(){
            return res.redirect(`/movimentacoes/${req.body.id}`)
        }) 
    },

    delete(req, res){
        Movimentacao.delete(req.body.id, function(){
            return res.redirect(`/movimentacoes`)
        })
    },
}
