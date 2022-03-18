const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const cors = require('cors');

app.use(express.static("public"))
app.use(cors({
    origin: "*"
}))

const faceitData = require("./faceitData.json")

app.get("/", (req, res) => {
	res.send(faceitData)
})

app.get("/status", (req, res) => {
    res.send({
        "status" : "active"
    })
})

server.listen(5000, () => {
	console.log("Listening on port 5000 ...")
})
