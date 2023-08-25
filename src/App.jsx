import { useState } from "react";
import Sidenav from "./Components/sidenav/Sidenav";
import TopBar from "./Components/TopBar";
import Info from "./Components/main/Info";
import Contents from "./Components/main/Contents";

import "./App.css";

function App() {
	const [link, setLink] = useState("My Drive");
	return (
		<>
			<div className="flex">
				<Sidenav setLink={setLink} />
				<div className="w-full h-full flex flex-col">
					<TopBar />
					<div className="flex gap-4">
						<Info link={link} />
						<Contents link={link} />
					</div>
				</div>
			</div>
			{console.log(link)}
		</>
	);
}

export default App;
