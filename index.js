const express = require("express");
const Router = require("./routes/router");

const app = express();
new Router(app);

// Bodyparser Mindlware
app.use(express.json());

const port = process.env.PORT || 5001;

app.listen(port, () => {
  // console.log('Server started on port' + port);
  process.send("ready");
});
