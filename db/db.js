const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://shreyanshu07:lpu%4012001972@cluster0.lmoaotd.mongodb.net/?retryWrites=true&w=majority",{
    
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log(e);
})