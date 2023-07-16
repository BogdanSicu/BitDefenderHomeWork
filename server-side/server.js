const express = require('express');
const politiciRoutes = require('./src/policies/routes');
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config({path: "./config.env"})

const app = express();
const port = 3000;

app.use(cors(
    {
        origin: "http://localhost:4200"
    }
));

app.use(express.json())

app.get("/", (req, res) => {
    res.send("salut")
});

app.use("/api/v1/", politiciRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

