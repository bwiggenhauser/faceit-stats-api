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
const newDatapathFull = "/root/new_faceit_data/full_data/";
const newDatapathLast30 = "/root/new_faceit_data/last_30/";
// const datapath = "C:/Users/baswi/Documents/GitHub/advanced-faceit-get-statistics/faceit_data/";

const general_info_path = datapath + "general_information.json";
const new_general_info_path = newDatapath + "general_information.json";
const new_general_info_path_last_30 = newDatapath + "general_information.json";

const kills_path = datapath + "kills.json";
const new_kills_path = newDatapathFull + "kills.json";
const new_kills_path_last30 = newDatapathLast30 + "kills.json";

const opening_kills_path = datapath + "opening_kills.json";
const new_opening_kills_path = newDatapathFull + "opening_kills.json";
const new_opening_kills_path_last30 = newDatapathLast30 + "opening_kills.json";

const weapon_damages_path = datapath + "weapon_damages.json";
const new_weapon_damages_path = newDatapathFull + "weapon_damages.json";
const new_weapon_damages_path_last30 = newDatapathLast30 + "weapon_damages.json";

const grenades_path = datapath + "grenades.json";
const new_grenades_path = newDatapathFull + "grenades.json";
const new_grenades_path_last30 = newDatapathLast30 + "grenades.json";

const damages_path = datapath + "damages.json";
const new_damages_path = newDatapathFull + "damages.json";
const new_damages_path_last30 = newDatapathLast30 + "damages.json";

const deaths_path = datapath + "deaths.json";
const new_deaths_path = newDatapathFull + "deaths.json";
const new_deaths_path_last30 = newDatapathLast30 + "deaths.json";

const trades_path = datapath + "trades.json";
const new_trades_path = newDatapathFull + "trades.json";
const new_trades_path_last30 = newDatapathLast30 + "trades.json";




app.get("/", (req, res) => {
	res.sendFile(general_info_path);
});
app.get("/new", (req, res) => {
	res.sendFile(new_general_info_path);
});
app.get("/new_last_30", (req, res) => {
	res.sendFile(new_general_info_path_last30);
});



app.get("/kills", (req, res) => {
	res.sendFile(kills_path);
});
app.get("/new_kills", (req, res) => {
	res.sendFile(new_kills_path);
});
app.get("/new_kills_last_30", (req, res) => {
	res.sendFile(new_kills_path_last30);
});



app.get("/deaths", (req, res) => {
	res.sendFile(deaths_path);
});
app.get("/new_deaths", (req, res) => {
	res.sendFile(new_deaths_path);
});
app.get("/new_deaths_last_30", (req, res) => {
	res.sendFile(new_deaths_path_last30);
});



app.get("/openingkills", (req, res) => {
	res.sendFile(opening_kills_path);
});
app.get("/new_openingkills", (req, res) => {
	res.sendFile(new_opening_kills_path);
});
app.get("/new_openingkills_last_30", (req, res) => {
	res.sendFile(new_opening_kills_path_last30);
});



app.get("/damages", (req, res) => {
	res.sendFile(damages_path);
});
app.get("/new_damages", (req, res) => {
	res.sendFile(new_damages_path);
});
app.get("/new_damages_last_30", (req, res) => {
	res.sendFile(new_damages_path_last30);
});



app.get("/weapondamages", (req, res) => {
	res.sendFile(weapon_damages_path);
});
app.get("/new_weapondamages", (req, res) => {
	res.sendFile(new_weapon_damages_path);
});
app.get("/new_weapondamages_last_30", (req, res) => {
	res.sendFile(new_weapon_damages_path_last30);
});



app.get("/trades", (req, res) => {
	res.sendFile(trades_path);
});
app.get("/new_trades", (req, res) => {
	res.sendFile(new_trades_path);
});
app.get("/new_trades_last_30", (req, res) => {
	res.sendFile(new_trades_path_last30);
});



app.get("/grenades", (req, res) => {
	res.sendFile(grenades_path);
});
app.get("/new_grenades", (req, res) => {
	res.sendFile(new_grenades_path);
});
app.get("/new_grenades_last_30", (req, res) => {
	res.sendFile(new_grenades_path_last30);
});

server.listen(5000, () => {
	console.log("Listening on port 5000 ...");
});
