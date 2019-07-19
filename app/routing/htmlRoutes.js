
var friendArray=require('../data/friend')


var path = require('path')

module.exports= function(app){

 //all of our routes are stored here for what the user types into the address bar
 //the * is to make everything else that is not what we specify directing them to the home page.  
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