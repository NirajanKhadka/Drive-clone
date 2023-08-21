import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LinksTemplate from "./Links_Template";

const sidebar = () => {
	return (
		<div className="flex flex-col  gap-5 pt-3 p-6 w-[290px] border h-screen">
			{/* Logo */}
			<div className="flex gap-3 ">
				<img src="./drive.svg" className="w-12 object-cover" alt="" />
				<p className=" text-2xl">Drive</p>
			</div>

			{/* New Button */}
			<button
				id="newButton"
				className="rounded-2xl font-medium shadow-md w-[6.5rem] bg-white  text-lg h-[3.75rem] border flex justify-evenly items-center  hover:shadow-xl relative transition-opacity"
			>
				<FontAwesomeIcon icon={faPlus} size="lg"></FontAwesomeIcon>
				<p className="">New</p>
			</button>

			{/* Side Bar LInks  */}
			<div className="">
				<LinksTemplate />
			</div>

			{/* Storage  Bar and info*/}
			<div className="flex flex-col pl-4 gap-2">
				{/* Bar */}
				<div className="w-4/5 h-1 bg-slate-300 rounded">
					<div className="w-2/5 h-full bg-[#0B57D0] rounded"></div>
				</div>

				{/* Storage info */}
				<p className=" text-slate-600">3 GB of 15 GB used</p>
			</div>

			{/* Get more storage button */}
			<div className="pl-4">
				<button className="text-[#15c] hover:bg-blue-50 font-semibold text-md border rounded-3xl w-3/4 border-slate-600 h-10">
					Get more storage
				</button>
			</div>
		</div>
	);
};

export default sidebar;
