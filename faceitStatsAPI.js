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
const newDatapath = "/root/new_faceit_data/";
// const datapath = "C:/Users/baswi/Documents/GitHub/advanced-faceit-get-statistics/faceit_data/";

const general_info_path = datapath + "general_information.json";
const new_general_info_path = newDatapath + "general_information.json";

const kills_path = datapath + "kills.json";
const new_kills_path = newDatapath + "kills.json";

const opening_kills_path = datapath + "opening_kills.json";
const new_opening_kills_path = newDatapath + "opening_kills.json";

const weapon_damages_path = datapath + "weapon_damages.json";
const new_weapon_damages_path = newDatapath + "weapon_damages.json";

const grenades_path = datapath + "grenades.json";
const new_grenades_path = newDatapath + "grenades.json";

const damages_path = datapath + "damages.json";
const new_damages_path = newDatapath + "damages.json";

const deaths_path = datapath + "deaths.json";
const new_deaths_path = newDatapath + "deaths.json";

const trades_path = datapath + "trades.json";
const new_trades_path = newDatapath + "trades.json";




app.get("/", (req, res) => {
	res.sendFile(general_info_path);
});
app.get("/new", (req, res) => {
	res.sendFile(new_general_info_path);
});



app.get("/kills", (req, res) => {
	res.sendFile(kills_path);
});
app.get("/new_kills", (req, res) => {
	res.sendFile(new_kills_path);
});



app.get("/deaths", (req, res) => {
	res.sendFile(deaths_path);
});
app.get("/new_deaths", (req, res) => {
	res.sendFile(new_deaths_path);
});



app.get("/openingkills", (req, res) => {
	res.sendFile(opening_kills_path);
});
app.get("/new_openingkills", (req, res) => {
	res.sendFile(new_opening_kills_path);
});



app.get("/damages", (req, res) => {
	res.sendFile(damages_path);
});
app.get("/new_damages", (req, res) => {
	res.sendFile(new_damages_path);
});



app.get("/weapondamages", (req, res) => {
	res.sendFile(weapon_damages_path);
});
app.get("/new_weapondamages", (req, res) => {
	res.sendFile(new_weapon_damages_path);
});



app.get("/trades", (req, res) => {
	res.sendFile(trades_path);
});
app.get("/new_trades", (req, res) => {
	res.sendFile(new_trades_path);
});



app.get("/grenades", (req, res) => {
	res.sendFile(grenades_path);
});
app.get("/new_grenades", (req, res) => {
	res.sendFile(new_grenades_path);
});

server.listen(5000, () => {
	console.log("Listening on port 5000 ...");
});
