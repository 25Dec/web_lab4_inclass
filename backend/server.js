import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

const app = express();
const port = process.env.PORT || 8001;
const connection_url =
	"mongodb+srv://thien2002nhan:th13n2002nh4n@mernapp.zoqqyub.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {
	useNewUrlParser: true,
	// useCreateIndex: true,
	// useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));

app.post("/dating/cards", (req, res) => {
	const dbCard = req.body;
	Cards.create(dbCard, (err, data) => {
		if (err) res.status(500).send(err);
		else res.status(201).send(data);
	});
});

app.get("/dating/cards", (req, res) => {
	Cards.find((err, data) => {
		if (err) res.status(500).send(err);
		else res.status(201).send(data);
	});
});

app.listen(port, () => console.log(`Listening on localhost: ${port}`));
