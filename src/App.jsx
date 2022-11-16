import React from "react";
import "./App.css";
import DatingCards from "./components/DatingCards";
import Header from "./components/Header";
import SwipeButton from "./components/SwipeButtons";

const App = () => {
	return (
		<div className="app">
			<Header />
			<DatingCards />
			<SwipeButton />
		</div>
	);
};

export default App;
