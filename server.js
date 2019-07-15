
var app= require('express')

app.use(express.urlencoded({ extended: true}))
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(process.env.PORT || 3000, function(){
    console.log("server live")
})

