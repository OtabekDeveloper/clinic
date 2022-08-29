const express = require('express')
const app = express()
const mongoose = require('mongoose')
const appRouter = require('./router')
app.use(express.json())
// const cors = require('cors')

// app.use(cors())

mongoose.connect('mongodb://localhost:27017/klinic',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('bazaga ulandi');
}).catch((err)=> {
    console.log(err);
})


app.use('/api', appRouter)


const port = process.env.PORT || 5000
app.listen(5000 , ()=>{
    console.log(`${port}chi port ishga tushdi`);
})
