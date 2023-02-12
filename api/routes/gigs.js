const router = require("express").Router();
const Gig = require("../models/Gig");
const Post = require("../models/Gig");
const User = require("../models/User");

//create a gig

router.post("/", async (req, res) => {
  const newGig = new Post(req.body);
  try {
    const savedGig = await newGig.save();
    res.status(200).json(savedGig);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update a gig

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("your post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("your post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// //like  dislike a post
// router.put("/:id/like", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post.likes.includes(req.body.userId)) {
//       await post.updateOne({ $push: { likes: req.body.userId } });
//       res.status(200).json("The post has been liked");
//     } else {
//       await post.updateOne({ $pull: { likes: req.body.userId } });
//       res.status(200).json("The post has been disliked");
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
//get a gig
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});
//get timeline gigs
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followins.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (error) {
    res.status(500).json(error);
  }
});


//get users all gigs
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const gigs = await Gig.find({ userId: user._id });
    res.status(200).json(gigs);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all users gigs

router.get("/", async (req, res) => {
  try {
    const gigs = await Gig.find({});
    res.status(200).json(gigs);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
