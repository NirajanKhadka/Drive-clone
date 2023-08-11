import navLinks from "../../../navLinks.json";

function Links_Template() {
	return (
		<ul>
			{navLinks.sidenavLinks.map(({ title, icon }) => {
				// ({ title, icon } = e);

				return (
					<li className="flex gap-2">
						<i className={`bg-[url('${icon}')] bg-center w-2`}></i>
						<span>{title}</span>
					</li>
				);
			})}{" "}
		</ul>
	);
}

export default Links_Template;
