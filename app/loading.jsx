export default function Loading() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center gap-2">
			<div className="w-24 aspect-square grid grid-cols-2 gap-1 relative animate-pulse">
				<div className="rounded-xl w-full aspect-square bg-lime-600 z-10"></div>
				<div className="rounded-xl w-full aspect-square bg-zinc-600 z-10"></div>
				<div className="rounded-xl w-full aspect-square bg-blue-600 z-10"></div>
				<div className="rounded-xl w-full aspect-square bg-green-600 z-10"></div>
				<div className="absolute w-44 bg-gradient-to-tr from-zinc-100 to-zinc-300 animate-spin [transform-origin:_center_center] [left:_calc(50%_-_88px)] [top:_calc(50%_-_88px)]  rounded-full aspect-square z-0 "></div>
			</div>
		</div>
	);
}
