const mongoose=require("mongoose");

const AdvicerSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    advicerName:{
        type:String,
        max:2500,
        required:true
    },
    position:{
        type:String,
      default:null
    },
    experienceYears:{
        type:String,
        required:true
    }
},
{timestamps:true}
)
module.exports=mongoose.model("Advicer",AdvicerSchema)