const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Sample App");
})

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
          }
        ]
    );
})

const port = process.env.PORT || 3000;

app.listen(port, console.log(`App is running on port ${port}`))