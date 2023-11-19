const express = require('express')
const router = express.Router()
const connection = require("./connection.js")
const mysql = require('mysql');

router.get('/students',(req,res) =>{
        const query = "SELECT * from students";
        connection.query(query,(err,result,fields) =>{
            console.log(result)
            res.json(result)
        })

        
})
router.get('/subjects',(req,res) =>{
    const query = "SELECT * from subjects";
    connection.query(query,(err,result,fields) =>{
        console.log(result)
        res.json(result)
    })
    
})
router.get('/students/:id',(req,res)=> {
    let id = req.params.id
    const query = "SELECT * from students where id = " + id;
    connection.query(query,(err,result,fields) =>{
        console.log(result)
        res.json(result)
    })
    if(id > 10) {
        res.statusCode = 404
        res.sendStatus(404)
    }
})
router.get('/subjects/:id',(req,res)=>{
    let id = req.params.id
    const query = "SELECT * from subjects where id = " + id;
    connection.query(query,(err,result,fields) =>{
        console.log(result)
        res.json(result)
    })
    if(id > 10) {
        res.sendStatus(404)
    }
})

module.exports=router