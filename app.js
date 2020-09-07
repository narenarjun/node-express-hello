const express = require("express")
const app = express()

const simpleRoute = require("./src/routes/simple")

const Port = process.env.PORT || 8000;

app.use(express.json());

app.use(simpleRoute);

app.listen(Port, () => {
    console.log(`Express Server up in port ${Port}`);
})
