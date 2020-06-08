const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//app.get("/", (req, res) => {
//    res.send("Sample App");
//})

app.get("/getData", (req, res) => {
    res.json(
        [
          {
              "name": "Oscar",
              "age": 27
          },
          {
              "name": "Joe",
              "age": 24
          },
          {
              "name": "Tony",
              "age": 19
          }
        ]
    );
})

const port = process.env.PORT || 3000;

app.listen(port, console.log(`App is running on port ${port}`))