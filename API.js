const EXPRESS=require('EXPRESS');
const APP=EXPRESS()
const path=require('path')
const port=process.env.PORT || 5000

APP.use(EXPRESS.static(path.join(__dirname,'build')))
APP.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
    
})


APP.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})