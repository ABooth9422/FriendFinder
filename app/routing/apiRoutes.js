

var path = require('path')
var friendArray=require('friendArray')


module.exports= function(app){

app.get("/api/friends",function(req,resp){
    resp.json(friendArray)
})

app.post("/api/friends",function(req,resp){
    friendArray.push(req.body)

})



}