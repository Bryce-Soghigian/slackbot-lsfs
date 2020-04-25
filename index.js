const express = require("express")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 5555;

const server = express()

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

server.listen(PORT, () => {
    console.log("the bot can hear you fam")
})