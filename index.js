const bodyParser = require('body-parser');
const express=require('express')
const app=express()
require("./db/db");

const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
})
const Student=require('./models/task')

app.use(express.json()); 
const routeTasks=require('./routes/tasks')
app.use(bodyParser.json())
app.use('/api/tasks',routeTasks,(req,res)=>{
    res.sendStatus(401);
    res.send('Hello');
})

