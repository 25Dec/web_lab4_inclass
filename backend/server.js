const express = require("express");
const app = express();

app.use(express.json());

const messages = [
	{
		author: "SC",
		text: "Rolls complete and a pitch is program. One BRAVO.",
	},
	{
		author: "PAO",
		text: "One BRAVO is an abort control model. Altitude is 2 miles.",
	},
	{
		author: "CAPCOM",
		text: "All is well at Houston. You are good at 1 minute.",
	},
];

app.get("/messages/:forum", (req, res) => {
	if (req.params && req.params.forum === "nasa") {
		return res.send(messages);
	}
	return res.status(404).send({ error: "Unknown forum" });
});

app.post("/messages/:forum", (req, res) => {
	if (req.params && req.params.forum === "nasa") {
		messages.push(req.body);
		return res.send("OK");
	}
	return res.status(404).send({ error: "Unknown forum" });
});

app.listen(5000, () => console.log("Launched on port 5000!"));
