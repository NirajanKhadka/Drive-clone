function TopBar() {
	return (
		<div className=" col-span-2 p-2 flex justify-between items-center">
			{/* Search bar */}
			<div className="rounded-full bg-[#EDF2Fc] w-[700px] h-12 flex items-center py-2 px-4 gap-2 group">
				{/* search icon */}
				<div className="w-5 h-5 rounded-full cursor-pointer hover:bg-slate-200">
					<img src="/search.svg" className="w-full h-full object-cover" />
				</div>

				{/* search input area */}
				<input
					className="w-[90%] h-full bg-transparent outline-none hover:bg-blue"
					placeholder="Search in Drive"
				></input>

				{/* filter icon */}
				<div className="w-5 h-5 rounded-full cursor-pointer hover:bg-slate-200">
					<img src="/filter.png" className="w-full h-full object-cover" />
				</div>
			</div>

			{/* Icons */}
		</div>
	);
}

export default TopBar;
