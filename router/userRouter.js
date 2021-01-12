const userControlleur=require('../controlleur/userControlleur')
const uploads = require('../middeleware/upload')
const route=require('express').Router()//module express est responsable au routage
route.post('/adduser',userControlleur.createUser)
route.get('/allUser',userControlleur.getAlUsers)
route.get('/oneUser/:id',userControlleur.getOneUser)
route.delete('/deleteuser/:id',userControlleur.deleteUser)
route.put('/updateuser/:id',userControlleur.updateUser)
route.post('/authenUser',userControlleur.authentificate)

module.exports=route