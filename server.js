const express=require('express')
const app=express()

app.use('/',require('./Router/handler'))

const port=process.env.PORT||3000

app.listen(port,()=>{
    console.log(`your server is running no localhost:${port}`);
})