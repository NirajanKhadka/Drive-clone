import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const sidebar = () => {
	return (
		<div className="flex flex-col  gap-8 p-6 w-60 border h-screen">
			{/* Logo */}
			<div className="flex gap-3 ">
				<FontAwesomeIcon icon={faGoogleDrive} size="2x"></FontAwesomeIcon>
				<p className=" text-2xl">Drive</p>
			</div>

			{/* New Button */}
			<div className="w-24 rounded-2xl bg-slate-800 h-14 border flex justify-evenly items-center ">
				<FontAwesomeIcon icon={faPlus} size="lg"></FontAwesomeIcon>
				<p className="">New</p>
			</div>

			{/*  */}
		</div>
	);
};

export default sidebar;
