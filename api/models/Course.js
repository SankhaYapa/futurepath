const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      max: 100,
    },
    category: {
      type: String,
      max: 100,
    },
    coursecontent: {
      type: Array,
      default: [],
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Course", CourseSchema);
