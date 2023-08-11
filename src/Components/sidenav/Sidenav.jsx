import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LinksTemplate from "./Links_Template";

const sidebar = () => {
	return (
		<div className="flex flex-col  gap-8 p-6 w-60 border h-screen">
			{/* Logo */}
			<div className="flex gap-3 ">
				<FontAwesomeIcon icon={faGoogleDrive} size="2x"></FontAwesomeIcon>
				<p className=" text-2xl">Drive</p>
			</div>

			{/* New Button */}
			<div className="rounded-2xl font-medium shadow-md w-28  text-lg h-16 border flex justify-evenly items-center ">
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
