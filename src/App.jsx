import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PeopleContainer from "./PeopleContainer";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/people">
					<PeopleContainer />
				</Route>
				<Link to="/">People</Link>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
