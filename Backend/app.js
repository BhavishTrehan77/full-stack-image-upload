const express=require('express')
const multer=require('multer')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())


const storage=multer.diskStorage({
    filename:function filename(req,file,cb){
        cb(null,file.originalname)
    },
    destination:function destination(req,file,cb){
        cb(null,'./uploads')
    }
})

const upload=multer({storage})

app.post("/api/upload",upload.single('profilepic'),async(req,resp)=>{
    resp.json(req.file)
})




app.listen(3000)