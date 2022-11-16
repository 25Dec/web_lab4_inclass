import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MySelect() {
	const [value, setValue] = useState("first");

	return (
		<FormControl>
			<InputLabel value={value} onChange={(e) => setValue(e.target.value)} inputprops={{ id: "my-select" }}>
				My Select
			</InputLabel>
			<Select>
				<MenuItem value="first">First</MenuItem>
				<MenuItem value="second">Second</MenuItem>
				<MenuItem value="third">Third</MenuItem>
			</Select>
		</FormControl>
	);
}
