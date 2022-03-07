const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)

app.use(express.static("public"))

const faceitData = require("./faceitData.json")

app.get("/", (req, res) => {
	res.send(faceitData)
})

server.listen(process.env.PORT || 3000, () => {
	console.log("Listening on port 3000 ...")
})
