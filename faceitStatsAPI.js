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
// const datapath = "C:/Users/baswi/Documents/GitHub/advanced-faceit-get-statistics/faceit_data/";

const general_info_path = datapath + "general_information.json";
const kills_path = datapath + "kills.json";
const opening_kills_path = datapath + "opening_kills.json";
const weapon_damages_path = datapath + "weapon_damages.json";
const grenades_path = datapath + "grenades.json";
const damages_path = datapath + "damages.json";
const deaths_path = datapath + "deaths.json";
const trades_path = datapath + "trades.json";

app.get("/", (req, res) => {
	res.sendFile(general_info_path);
});

app.get("/kills", (req, res) => {
	res.sendFile(kills_path);
});

app.get("/deaths", (req, res) => {
	res.sendFile(deaths_path);
});

app.get("/openingkills", (req, res) => {
	res.sendFile(opening_kills_path);
});

app.get("/damages", (req, res) => {
	res.sendFile(damages_path);
});

app.get("/weapondamages", (req, res) => {
	res.sendFile(weapon_damages_path);
});

app.get("/trades", (req, res) => {
	res.sendFile(trades_path);
});

app.get("/grenades", (req, res) => {
	res.sendFile(grenades_path);
});

server.listen(5000, () => {
	console.log("Listening on port 5000 ...");
});
