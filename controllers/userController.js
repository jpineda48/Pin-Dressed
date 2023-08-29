const express = require('express')
const User = require('../models/users')
const router = express.Router()


//INDEX
router.get('/', (req, res) => {
    
    res.render('index', {users : User})
    console.log("this is the user schema", User)
})

//NEW

//CREATE

//DELETE

//EDIT

//UPDATE

//SHOW

module.exports = router