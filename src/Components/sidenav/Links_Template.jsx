import navLinks from "../../../navLinks.json";

function Links_Template({ setLink }) {
	return (
		<ul>
			{navLinks.sidenavLinks.map(({ title, icon }) => {
				return (
					<li
						onClick={() => setLink(title)}
						className="flex gap-3 justify-start items-center pl-4 text-sm h-8 rounded-2xl hover:bg-slate-200 hover:cursor-pointer"
					>
						<i className="w-5 h-5">
							<img src={icon} alt="" className="w-full h-full object-contain" />
						</i>
						<span className="col-start-2 col-end-4">{title}</span>
					</li>
				);
			})}{" "}
		</ul>
	);
}

export default Links_Template;
