const express = require("express");
const Comment = require("../model/comment")

const router = express.Router();


//comment(data) och ska visa den till comment router
//create
//skapa comment med post router och en ejs input fält (för torsdag)


router.get("/createcomment", (req, res)=>{
 
 res.render("comment");

})


router.post("/createcomment", async (req, res)=>
{

    //req.body.allanameproperties
const comment =new Comment({
        text: req.body.text, 
        author:req.body.author
    })
 const response= await comment.save();
  console.log(response)
  res.redirect("/comment")


  //new Comment({text:"testdata", author:"authorname"}).save();
})
    

router.get("/comment", async (req, res) => {
const comments = await Comment.find()
// { comment : []}
//comments:comments
 res.render("comment", {comments});
}
)

module.exports = router;
/* //create 
new Modelnamn(  {ettobject}).save()
// find/read 
Modelnamn.find()
 */