// ============================================================
//  libraries
const express = require('express')
require('dotenv').config()

// ============================================================
// Middlewares
const app =  express()

app.use(express.json())

// ============================================================


app.get('/', (req, res)=>{
     res.json({
         'name':'Neetesh',
         'Age':19
     })
})


// ============================================================

const PORT = process.env.PORT || 8001

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})