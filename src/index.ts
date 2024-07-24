import express from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const app =  express()
app.use(express.json())
app.post("/",async (req,res)=>{
    await prisma.user.create({
        data:{
            email:req.body.email,
            name:req.body.name
        }
    })

    res.json({
        msg:"done ji!!"
    })
})

app.get("/",(req,res)=>{
    res.json({
        msg:"chnga ji!"
    })
})
app.get("/user",(req,res)=>{
    res.json({
        msg:"nya h ji!!"
    })
})
app.get("/user/aman",(req,res)=>{  //changed so can test the layerings (
    res.json({
        msg:"nya h ji!!"
    })
})

app.listen(3000)