const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config({path:'./config.env'})
//const DB = encodeURIComponent( process.env.DATABASE )
const DB=process.env.DATABASE;

mongoose.connect(DB,{

}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log(`${dbd} contains ${e}`);
})