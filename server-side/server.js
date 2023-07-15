const express = require('express');
const politiciRoutes = require('./src/policies/routes');
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json())

app.get("/", (req, res) => {
    res.send("salut")
});

app.use("/api/v1/", politiciRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

