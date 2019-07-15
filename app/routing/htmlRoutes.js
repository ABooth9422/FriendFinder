
var friendArray=require('../data/friend')


var path = require('path')

module.exports= function(app){

   
app.get('/survey',function(req,resp){
    resp.sendFile(path.join(__dirname,'../public/survey.html'))
})

app.get('/home',function(req,resp){
    resp.sendFile(path.join(__dirname,"../public/home.html"))
})

app.get('/' ,function(req,resp){
    resp.sendFile(path.join(__dirname,'../public/home.html'))
})
app.get('*' ,function(req,resp){
    resp.sendFile(path.join(__dirname,'../public/home.html'))
})
}