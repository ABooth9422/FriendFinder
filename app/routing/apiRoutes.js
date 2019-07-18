var friendArray = require('../data/friend')



module.exports = function (app) {

    app.get("/api/friends", function (req, resp) {
        resp.json(friendArray)
    })

    app.post("/api/friends", function (req, resp) {
        req.body.scores = req.body.scores.map((item) => {
            return parseInt(item)
        })
        var match = checker(req.body, friendArray)
        friendArray.push(req.body)
        resp.json(match)

        function checker(req, friends) {
            var match = req
            var difference = 1000
            friends.forEach(element => {
                var total = 0
                for (let index = 0; index < element.scores.length; index++) {
                    total += Math.abs(req[index] - element.scores[index])
                }
                if (total < difference) {
                    match = element
                    difference = total
                }
            });
            return match
        }

    })


}