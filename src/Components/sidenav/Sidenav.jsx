import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LinksTemplate from "./Links_Template";

const sidebar = () => {
	return (
		<div className="flex flex-col  gap-5 pt-3 p-6 w-[304px] border h-screen">
			{/* Logo */}
			<div className="flex gap-3 ">
				<img src="./drive.svg" className="w-12 object-cover" alt="" />
				<p className=" text-2xl">Drive</p>
			</div>

			{/* New Button */}
			<div className="rounded-2xl font-medium shadow-md w-[6.25rem] bg-white  text-lg h-[3.75rem] border flex justify-evenly items-center ">
				<FontAwesomeIcon icon={faPlus} size="lg"></FontAwesomeIcon>
				<p className="">New</p>
			</div>

			{/* Side Bar LInks  */}
			<div className="">
				<LinksTemplate />
			</div>
		</div>
	);
};

export default sidebar;
