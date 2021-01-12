var mongoose= require('mongoose');
const bcrypt=require('bcrypt')
const saltRounds=10
const schema=mongoose.Schema;
var userschema=mongoose.Schema({
     name:{
     type:String,
     require:true
    },
     lastname:{
     type:String,
     required:true
    },
     email:{
     type:String,
     required:true,
     
     validate:{
         validator: function validateEmail(v){
               if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
                    return(true)
                }
                else{
                    console.log('you have entered an invalid email address!')
                    return(false)
                }
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate:{
        validator: function password(number){
            var password=/^[A-Za-z]\w{7,14}$/;
            if(password.test(number)){
                  return true
              }
              else {
                  return false
              }
        }
    }},
   
    
    
    //https://meet.google.com/nmg-wssi-hvd
    products:
[
    {
        type:mongoose.Types.ObjectId,
        ref:'product'
    }
],
    
});
   userschema.pre('save',function(next){
       this.password=bcrypt.hashSync(this.password,saltRounds);
       next();
   })

module.exports=mongoose.model('user',userschema);