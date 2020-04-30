const express = require('express');

const router =express.Router();

//@routes-  GET api/post
//@desc -   Test Route
//@acess -  Public
router.get('/',(req,res)=>res.send('User Route'))


 module.exports = router;