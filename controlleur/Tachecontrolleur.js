const TacheModel=require('../models/Tache')

module.exports={
     createTache:function(req,res){
        TacheModel.create(req.body,function(err,tache){
            console.log('ok')
            if(err){
                console.log(err)
            res.json({msg:'error',statut:500,data:null})           
         }
         else{
             res.json({msg:'Tache ajouté', statut:200,data:tache})
         }
        }
        )
    },
     getAlTaches: function(req,res){
     TacheModel.find({}).exec(function(err,Tache){
         if(err){
        res.json({msg:'error',statut:500,data:null})
        }else{
        res.json({msg:'liste des taches',statut:200,data:Tache})
    }
    })
    },
     getOne:function(req,res){
    TacheModel.findById({_id:req.params.id}).exec(function(err,Tache){
        if(err){
            res.json({msg:'error',statut:500,data:null})
        }else{
            res.json({msg:'one Tache',statut:200,data:Tache})
        }
    })
    },
     deleteTache:function(req,res){
    TacheModel.deleteOne({_id:req.params.id},function(err,Tache){
        if(err){
            res.json({msg:'error',statut:500,data:null})
        }else{
            res.json({msg:'delete Tache',statut:200,data:Tache})
        }
    })
    },
     updateTache:function(req,res){
    TacheModel.updateOne({_id:req.params.id},req.body,function(err,Tache){
        if(err){
            res.json({msg:'error',statut:500,data:null})
        }else{
            res.json({msg:'update Tache',statut:200,data:Tache})
        }
    })
    }
    
    
}