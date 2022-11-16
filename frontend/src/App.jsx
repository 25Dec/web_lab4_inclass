import React, { useState } from "react";
import useMessages from "./useMessages";
import "./App.css";

const App = () => {
	const [forum, setForum] = useState("nasa");
	const { data: messages, loading: messageLoading, error: messageError } = useMessages(forum);

	return (
		<div className="App">
			<button onClick={() => setForum("nasa")}>NASA</button>
			<button onClick={() => setForum("notNasa")}>Not NASA</button>

			{messageError ? (
				<div className="error">
					Something went wrong:
					<div className="error-contents">{messageError.messages}</div>
				</div>
			) : messageLoading ? (
				<div className="loading">Loading...</div>
			) : messages && messages.length ? (
				<dl>
					{messages.map((m) => (
						<>
							<dt>{m.author}</dt>
							<dd>{m.text}</dd>
						</>
					))}
				</dl>
			) : (
				"No messages"
			)}
		</div>
	);
};

export default App;
