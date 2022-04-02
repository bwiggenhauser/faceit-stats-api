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
const opening_kills_path = datapath + "opening_kills.json";
const weapon_damages_path = datapath + "weapon_damages.json";
const grenades_path = datapath + "grenades.json";

app.get("/", (req, res) => {
	res.send({
		status: "active",
	});
});

app.get("/kills", (req, res) => {
	const data = require(kills_path);
	res.send(data);
});

app.get("/openingkills", (req, res) => {
	const data = require(opening_kills_path);
	res.send(data);
});

app.get("/weapondamages", (req, res) => {
	const data = require(weapon_damages_path);
	res.send(data);
});

app.get("/grenades", (req, res) => {
	const data = require(grenades_path);
	res.send(data);
});

server.listen(5000, () => {
	console.log("Listening on port 5000 ...");
});
