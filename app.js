const express=require('express')

const ejs =require('ejs')
const bodyParser = require('body-parser')


const app =express()


const port =4000

app.set('view engine','ejs')
 app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
   
   
   res.render('index')
})

app.post('/save',(req,res)=>{
   console.log(req.body)
   res.redirect('/')
})

app.listen(port,()=>{console.log(`Server Created On Port No:${port}`)})