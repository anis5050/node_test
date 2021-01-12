var mongoose= require('mongoose');


const schema=mongoose.Schema;
var Tacheschema=mongoose.Schema({
       name:{
           type:String,
           required:true
       },
         description:{
        type:String,
        required:true
       },
       
       
       
       
})
module.exports=mongoose.model('Tache',Tacheschema);