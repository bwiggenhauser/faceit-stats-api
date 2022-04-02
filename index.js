const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");

app.use(express.static("public"));
app.use(
	cors({
		origin: "*",
	})
);

const datapath = "/root/faceit_data/";

const kills_path = datapath + "kills.json";
const opening_kills = require(datapath + "opening_kills.json");
const weapon_damages = require(datapath + "weapon_damages.json");
const grenades = require(datapath + "grenades.json");

app.get("/", (req, res) => {
	res.send({
		status: "active",
	});
});

app.get("/kills", (req, res) => {
	const data = require(kills_path);
    res.send(data)
});

server.listen(5000, () => {
	console.log("Listening on port 5000 ...");
});
