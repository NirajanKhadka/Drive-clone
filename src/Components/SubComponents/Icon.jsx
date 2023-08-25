function Icon({ src }) {
	return (
		<div className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex justify-center items-center">
			<img src={src} className="w-5 h-5 object-center" />
		</div>
	);
}

export default Icon;
