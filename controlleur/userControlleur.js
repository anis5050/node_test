const userModel=require('../models/userModel')
const bcrypt=require('bcrypt')
var randtoken=require('rand-token')
var jwt = require("jsonwebtoken");
const _=require('lodash')
var nodemailer = require('nodemailer');
const { result } = require('lodash');
var refreshTokens={}
module.exports={
     createUser:function(req,res){
        userModel.create(req.body,function(err,user){
            console.log('ok')
            if(err){
                console.log(err)
            res.json({msg:'error',statut:500,data:null})           
         }
         else{
             res.json({msg:'utilisateur ajouté', statut:200,data:user})
         }
        }
        )
    },
     getAlUsers: function(req,res){
     userModel.find({}).populate('products').exec(function(err,User){
         if(err){
        res.json({msg:'error',statut:500,data:null})
        }else{
        res.json({msg:'liste des utilisateurs',statut:200,data:User})
    }
    })
    },
     getOneUser:function(req,res){
    userModel.findById({_id:req.params.id}).exec(function(err,User){
        if(err){
            res.json({msg:'error',statut:500,data:null})
        }else{
            res.json({msg:'one user',statut:200,data:User})
        }
    })
    },
     deleteUser:function(req,res){
    userModel.deleteOne({_id:req.params.id},function(err,User){
        if(err){
            res.json({msg:'error',statut:500,data:null})
        }else{
            res.json({msg:'delete user',statut:200,data:User})
        }
    })
    },
     updateUser:function(req,res){
    userModel.updateOne({_id:req.params.id},req.body,{new:true,runValidators:true},function(err,User){
        if(err){
            res.json({msg:'error',statut:500,data:null})
        }else{
            res.json({msg:'update user',statut:200,data:User})
        }
    })
    },
     authentificate: function(req,res,next){
    userModel.findOne({
        email:req.body.email
    },function(err,userInfo){
        if(err){
            next(err);
        }else{
            if(userInfo!=null){
                console.log('aaa',userInfo)//les informations user
            if(bcrypt.compareSync(req.body.password,userInfo.password)){
                var refreshToken=randtoken.uid(256)
                refreshTokens[refreshToken]=userInfo._id
                console.log('bbb',refreshTokens[refreshToken])
                const token=jwt.sign({
                    id:userInfo._id 
                },req.app.get('secretkey'),{expiresIn:'1h'});
                res.json({
                    statut:'success',
                    message:'userfound',
                    data:{
                        user:userInfo,
                        accesstoken:token,
                        refreshToken:refreshToken
                        
                    }
                });
            }else {
                res.json({statut:'error',message:'invalid password',data:null});
        }
    }
    else{
        res.json({statut:'error',message:'invalid email',data:null});
    }
    }
    });
    },
    
}