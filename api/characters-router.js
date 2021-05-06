const express = require("express");
const router = express.Router();
const Characters = require("./characters-model");

//ENDPOINTS 

//[GET] All Characters
router.get("/", (req, res, next)=>{
    Characters.getAllChars()
    .then((allChars)=>{
        res.status(200).json(allChars);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })
})

module.exports = router;