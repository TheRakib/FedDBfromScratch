const express = require("express");
const Comment = require("../model/comment")

const router = express.Router();


//comment(data) och ska visa den till comment router
//create
//skapa comment med post router och en ejs input fält (för torsdag)


// router.get("/createcomment", (req, res)=>{
 
//  res.render("comment");

// })


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

router.get("/delete/:id", async (req, res)=>{
    console.log(req.params.id);
    await Comment
    .deleteOne({_id:req.params.id});
    //res.send("It works");
    res.redirect("/comment")
})
//fråga varför har vi inte använt post request för delete? 

router.get("/update/:id", async (req, res)=>{

    //vill hämta bara en data från databas
  const response= await Comment.findById({_id:req.params.id})
  console.log(response);
    //sen skicka den till edit sidan

    res.render("edit", {response})
})

router.post("/update/:id", async(req, res)=>{

//använd updateOne metoden för att kunna redigera comment
   await Comment.updateOne({_id:req.body._id},
    {$set: {text: req.body.text, author:req.body.author} })
  console.log(req.body);
 //res.send("test ")
 res.redirect("/comment")
 })

module.exports = router;
/* //create 
new Modelnamn(  {ettobject}).save()
// find/read 
Modelnamn.find()
 */