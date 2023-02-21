const express=require('express')
const task=require('../models/task');
const router=express.Router();
router.get('/',(req,res)=>{
    task.find({})
    .then(tasks=>res.json(tasks))
    .catch(err=>res.status(500).json({error:err}))
})
router.post('/add',(req,res)=>{
    const {title}=req.body
    const newTask=new task({title});
    console.log(newTask);
    newTask.save()
    .then(task=>res.json(task))
    .catch(err=>res.status(500).json({error:err}))
})
router.delete('/delete/:id',(req,res)=>{
    const id=req.params.id
    task.findByIdAndDelete(id)
    .then(task=>res.json(task))
    .catch(err=>res.json(500,err))
})
router.post('/update/:id',(req,res)=>{
    const {done}=req.body
    task.findByIdAndUpdate(req.params.id,{done})
    .then(task=>res.send('Updated'))
    .catch(err=>res.json(500,err))
})
module.exports=router;