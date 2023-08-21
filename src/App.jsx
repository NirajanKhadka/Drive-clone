import { useState } from "react";
import Sidenav from "./Components/sidenav/Sidenav";
import TopBar from "./Components/TopBar";

import "./App.css";

function App() {
	return (
		<>
			<div className="flex">
				<Sidenav />
				<div className="w-full h-full grid grid-cols-2 grid-rows-2">
					<TopBar />
				</div>
			</div>
		</>
	);
}

export default App;
