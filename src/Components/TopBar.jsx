function TopBar() {
	return (
		<div className=" col-span-2 p-2 pr-4 flex justify-between items-center">
			{/* Search bar */}
			<div className="rounded-full bg-[#EDF2Fc] w-[700px] h-12 flex items-center py-2 px-4 gap-2 group">
				{/* search icon */}
				<div className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex justify-center items-center">
					<img src="/search.svg" className="w-5 h-5 object-center" />
				</div>

				{/* search input area */}
				<input
					className="w-[90%] h-full bg-transparent outline-none hover:bg-blue"
					placeholder="Search in Drive"
				></input>

				{/* filter icon */}
				<div className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex justify-center items-center">
					<img src="/filter.png" className="w-5 h-5 object-center" />
				</div>
			</div>

			{/* Icons */}
			<div className="flex items-center gap-4">
				<div className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex justify-center items-center">
					<img src="/tick.png" className="w-5 h-5 object-center" />
				</div>
				<div className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex justify-center items-center">
					<img src="/question.png" className="w-5 h-5 object-center" />
				</div>
				<div className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex justify-center items-center">
					<img src="/setting.png" className="w-5 h-5 object-center" />
				</div>
				<div className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex justify-center items-center">
					<img src="/menu.png" className="w-5 h-5 object-center" />
				</div>
				<div className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex justify-center items-center">
					<img src="/user.png" className="w-5 h-5 object-center" />
				</div>
			</div>
		</div>
	);
}

export default TopBar;
