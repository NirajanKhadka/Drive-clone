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
			<div className="flex h-full w-full">
				<Sidenav setLink={setLink} />
				<div className="flex flex-col flex-auto">
					<TopBar />

					{/* main */}
					<div className="flex gap-4 flex-auto p-2">
						<Contents link={link} />
						<Info link={link} />
					</div>
				</div>
			</div>
			{console.log(link)}
		</>
	);
}

export default App;
