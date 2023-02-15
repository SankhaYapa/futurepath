const router=require("express").Router();
const Advicer=require("../models/Advicer");
//post advicer
router.post("/",async(req,res)=>{
    const newAdvicer=new Advicer(req.body);
    try{
        const saveAdvicer=await newAdvicer.save();
        res.status(200).json(saveAdvicer);
    }
    catch(error){
        res.status(500).json(error)
    }
})
//update a Advicer

router.put("/:id", async (req, res) => {
    try {
      const advicer = await Advicer.findById(req.params.id);
      if (advicer.userId === req.body.userId) {
        await advicer.updateOne({ $set: req.body });
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
      const advicer = await Advicer.findById(req.params.id);
      if (advicer.userId === req.body.userId) {
        await advicer.deleteOne();
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
      const advicers = await Advicer.find({});
      res.status(200).json(advicers);
    } catch (error) {
      res.status(500).json(error);
    }
  });
module.exports = router;