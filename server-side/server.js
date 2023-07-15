const express = require('express');
const politiciRoutes = require('./src/routes')

const app = express();
const port = 3000;

app.use(express.json())

app.listen(port, () => console.log(`app listening on port ${port}`));

app.get("/", (req, res) => {
    res.send("salut")
});

app.use("/api/v1/", politiciRoutes);