const { off } = require('process')
const Conteiner = require('../model/Conteiner')

module.exports = {
    index(req, res){
        Conteiner.all(function(container){
            return res.render('container/index', {container})
        })
    },

    create(req, res){
        return res.render('container/create')
    },

    post(req, res){
        const keys = Object.keys(req.body)
        
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }
        
        Conteiner.create(req.body, function(conteiner){
            return res.redirect(`/container/${conteiner.id}`)
        })
    },
 
    show(req, res){
       Conteiner.find(req.params.id, function(conteiner){
        if(!conteiner) return res.send("Container not found")

        return res.render("container/show", {conteiner})
       })
    },

    edit(req, res){
        Conteiner.find(req.params.id, function(conteiner){
            if(!conteiner) return res.send("Container not found")
     
            return res.render("container/edit", {conteiner})
        })
    },

    put(req, res){
        const keys = Object.keys(req.body)
        
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }

        Conteiner.update(req.body, function(){
            return res.redirect(`/container/${req.body.id}`)
        })
    },

    delete(req, res){
        Conteiner.delete(req.body.id, function(){
            return res.redirect(`/container`)
        })
    },
}
