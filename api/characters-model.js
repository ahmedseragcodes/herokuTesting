const db = require("../data/dbConfig");

function getAllChars(){
    return db("Characters")
}


module.exports = {
    getAllChars
}