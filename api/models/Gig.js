const mongoose = require("mongoose");

const GigSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title:{
      type: String,
      max: 80,
    },
    category:{
      type: String,
      default:null
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gig", GigSchema);
