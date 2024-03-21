// importing express.js
const express= require('express');
// creating instance of express to create express app
const app=express();
// create router instance for routing from express
const router= express.Router();
// get api creation router.get(path,callback)
router.post('/hello',function (req,res){
    res.send('my first api!');
})
//global middleware for all api calling defined with router
app.use('/',router)
// code for server start app.listen(port,callback)
app.listen(8000,function (){
   console.log('server started at port:',8000);
})
