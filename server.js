let express = require("express");
let app = express();
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

// MIDDLEWARE
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`Port running on port:${PORT}`);
});
