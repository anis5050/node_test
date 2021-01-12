const tacheControlleur=require('../controlleur/Tachecontrolleur')

const route=require('express').Router()//module express est responsable au routage
route.post('/addtache',tacheControlleur.createTache)
route.get('/allTache',tacheControlleur.getAlTaches)
route.get('/oneTache/:id',tacheControlleur.getOne)
route.delete('/deleteTache/:id',tacheControlleur.deleteTache)
route.put('/updateTache/:id',tacheControlleur.updateTache)


module.exports=route