const express=require('express')

const app=express()
var cors=require('cors')
const db=require('./config/database')
const userRouter=require('./router/userRouter')
const TacheRouter=require('./router/TacheRouter')





var bodyParser=require('body-parser')
app.set("secretkey","anis")
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/users',userRouter)
app.use('/Tache',TacheRouter)



app.listen(4000,function(){
    console.log('runningwith 4000')
})
