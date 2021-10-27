// Start your es6 scripts here

import express from 'express'


const app = express()
app.get('/', (req, res)=>{
    res.send("Learn GraphQl")
})

app.listen(5000, ()=> console.log(`Server is running on http://localhost:5000`))