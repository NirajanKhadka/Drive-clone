import Icon from "./SubComponents/Icon";

function TopBar() {
	return (
		<div className="p-2 pr-4 flex justify-between items-center">
			{/* Search bar */}
			<div className="rounded-full bg-[#EDF2Fc] w-[700px] h-12 flex items-center py-2 px-4 gap-2 group">
				{/* search icon */}
				<Icon src="/search.svg"></Icon>

				{/* search input area */}
				<input
					className="w-[90%] h-full bg-transparent outline-none hover:bg-blue"
					placeholder="Search in Drive"
				></input>

				{/* filter icon */}
				<Icon src="/filter.png"></Icon>
			</div>

			{/* Icons */}
			<div className="flex items-center gap-4">
				<Icon src="/tick.png"></Icon>
				<Icon src="/question.png"></Icon>
				<Icon src="/setting.png"></Icon>
				<Icon src="/menu.png"></Icon>
				<Icon src="/user.png"></Icon>
			</div>
		</div>
	);
}

export default TopBar;
