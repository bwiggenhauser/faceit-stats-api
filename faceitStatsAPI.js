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

const general_info_path = datapath + "general_information.json";
const kills_path = datapath + "kills.json";
const opening_kills_path = datapath + "opening_kills.json";
const weapon_damages_path = datapath + "weapon_damages.json";
const grenades_path = datapath + "grenades.json";

function fetchAndSend(path, res) {
	fetch(path)
		.then((response) => response.json())
		.then((data) => res.send(data));
}

app.get("/", (req, res) => {
	fetchAndSend(general_info_path, res);
});

app.get("/kills", (req, res) => {
	fetchAndSend(kills_path, res);
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
