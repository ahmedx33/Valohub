import { WavesComponent } from "../waves-component";

export function Footer() {
	return (
		<footer className="h-[352px] mt-24 relative w-full bg-[#FF4654]">
			<WavesComponent className=" h-64 max-md:hidden -top-16 left-0 w-fit absolute scale-x-[-1] z-0" />
			<div className="size-full relative overflow-hidden">
				<img
					src="/phases-overlay.svg"
					className="h-[822.71px] absolute -bottom-[31rem] -left-48 w-fit rotate-[3deg] max-md:hidden"
				/>
				<img
					src="/phases-overlay.svg"
					className="h-[822.71px] absolute -bottom-[5rem] -right-48 w-fit rotate-[3deg]  max-md:hidden"
				/>
				<div className="size-full  flex gap-16 items-center justify-center absolute">
					<div className="flex flex-col gap-6 max-lg:hidden">
						<img src="/footer-image-1.svg" />
						<h3 className="text-[40px] font-bold text-center">
							VALORANT
						</h3>
					</div>
					<img
						src="/footer-image-2.svg"
						className="relative z-20 max-md:w-[200px]"
					/>
					<div className="flex flex-col gap-6 max-lg:hidden">
						<img src="/footer-image-3.svg" />
						<h3 className="text-[40px] font-bold text-center">
							LEAGUE OF LEGENDS
						</h3>
					</div>
				</div>
			</div>
		</footer>
	);
}
