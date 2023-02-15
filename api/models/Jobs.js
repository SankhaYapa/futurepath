const mongoose=require("mongoose");

const JobSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        max:2500,
        required:true
    },
    days:{
        type:String,
      default:null
    },
    budget:{
        type:String,
        required:true
    }

},
{timestamps:true}
);
module.exports=mongoose.model("Job",JobSchema)