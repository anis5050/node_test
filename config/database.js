const mongoose=require('mongoose')
const mongoDB='mongodb://127.0.0.1:27017/free'
mongoose.connect(mongoDB,{useNewUrlParser:true, useUnifiedTopology:true})
mongoose.Promise=global.Promise;
module.exports=mongoose;