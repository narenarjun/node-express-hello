const os = require("os")
const express = require("express")

const router = new express.Router();

let count = 0;

router.get("/",(req, res) => {
    count++;
    res.status(200).send(`Express-Node Hello from  ${os.hostname} -- ${count} \n`)

})

/*
 * This is endpoint is used to check the liveness of server and the container. 
 */
router.get("/healthz",(req, res) => {
    res.status(200).send();
})
/*
* When database or outside api calls are done , we can use this endpoint to check all of
* them are working well.
* to stimulate the delay , we can use time delay here , but for the sake of simplicity I didn't implement it.
*/
router.get("/readyz", (req,res) => {
    res.status(200).send()

    // setTimeout(function() {
    //     res.status(200).send()
    // }, 3000)

})

module.exports = router;