let friends = require("../data/friends");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    console.log("FORM DATA FROM FRONT: ", req.body);
  });
};

// var router = express.Router()
// router.get('/', function (req res){
//     res.send('api stuff')
// })

// module.exports = router
