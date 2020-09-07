const os = require("os")
const express = require("express")

const router = new express.Router();

let count = 0;

router.get("/",(req, res) => {
    count++;
    res.status(200).send(`Express-Node Hello from  ${os.hostname} -- ${count} \n`)

})

module.exports = router;