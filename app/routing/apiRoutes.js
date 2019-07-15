

var path = require('path')
var friendArray=require('../data/friend')


module.exports= function(app){

app.get("/api/friends",function(req,resp){
    resp.json(friendArray)
})

app.post("/api/friends",function(req,resp){
    friendArray.push(req.body)

})

app.get("/bestfriends",function(req,resp){
    resp
})



}