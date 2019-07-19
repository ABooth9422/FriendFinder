var friendArray = require('../data/friend')


//exporting our functions to our server file
module.exports = function (app) {
    //returning our json object when the user calls /api/friends
    app.get("/api/friends", function (req, resp) {
        resp.json(friendArray)
    })
    //making a post where we do our logic to find the new friend
    app.post("/api/friends", function (req, resp) {
        //going through the object we push and parsing the score to make it an integer instead of a string
        req.body.scores = req.body.scores.map((item) => {
            //returning each individual item that gets returned to the new array 
            return parseInt(item)
        })

        //defining our match variable as a function and passing in the arguments before we push our object to the server
        var match = checker(req.body, friendArray)
        friendArray.push(req.body)
        //returning our json object as a response to the page
        resp.json(match)
        //logic for the match
        function checker(req, friends) {

            //our match is being passed in from our req as req.body
            var match = req
            //making a variable for the difference that the user can never get to on the initial survey
            var difference = 1000

            //for each element in our friends array we are going to loop through  and compare the scores of the 
            //survey answers of the person that is filling out the questions and what we have on file to look for the best match.

            friends.forEach(element => {
                var total = 0
                for (let index = 0; index < element.scores.length; index++) {
                    total += Math.abs(req.scores[index] - element.scores[index])
                }
                //if the total is less than the difference we switch the difference to the total of the current match
                //at the beginning of the for each function we reset the total back to 0
                //if the total of the new element being looped is less  than it gets swapped in for the match
                if (total < difference) {
                    match = element
                    difference = total
                }
            });
            //after we are finished with the loop we return the match
            return match
        }
       
    })


}