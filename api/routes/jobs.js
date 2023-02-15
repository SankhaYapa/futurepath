const router=require("express").Router();
const Job=require("../models/Jobs");
//post job
router.post("/",async(req,res)=>{
    const newjob=new Job(req.body);
    try{
        const saveJob=await newjob.save();
        res.status(200).json(saveJob);
    }
    catch(error){
        res.status(500).json(error)
    }
})
//update a job

router.put("/:id", async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (job.userId === req.body.userId) {
        await job.updateOne({ $set: req.body });
        res.status(200).json("your post has been updated");
      } else {
        res.status(403).json("you can update only your post");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });

//delete a job
  router.delete("/:id", async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (job.userId === req.body.userId) {
        await job.deleteOne();
        res.status(200).json("your post has been deleted");
      } else {
        res.status(403).json("you can delete only your post");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //get all jobs

router.get("/", async (req, res) => {
    try {
      const jobs = await Job.find({});
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json(error);
    }
  });
module.exports = router;