import Button from "./ui/button";
import { WavesComponent } from "./waves-component";

export default function LolAccountsSection() {
	return (
		<section className="relative w-full h-fit bg-[#1F2326] py-8  mt-[30rem]">
			<div className="relative z-10 flex flex-col justify-start items-center h-full text-center px-4">
				<div className="mt-20 flex flex-col items-center mb-12">
					<h1 className="text-white font-bold whitespace-nowrap text-[40px] md:text-[80px] lg:text-[120px] w-full max-w-[1444px]">
						LOL ACCOUNTS
					</h1>
					<div className="flex gap-2 flex-wrap justify-center">
						<div className="w-[146px] h-[48px] rounded-lg  bg-[#FF4654] text-[30px] font-semibold">
							NA
						</div>
						<div className="w-[146px] h-[48px] rounded-lg border-2 border-[#FF4654] text-white text-[30px] font-semibold">
							EUNE
						</div>
						<div className="w-[146px] h-[48px] rounded-lg border-2 border-[#FF4654] text-white text-[30px] font-semibold">
							EUW
						</div>
						<div className="w-[146px] h-[48px] rounded-lg border-2 border-[#FF4654] text-white text-[30px] font-semibold">
							OCE
						</div>
						<div className="w-[146px] h-[48px] rounded-lg border-2 border-[#FF4654] text-white text-[30px] font-semibold">
							BR
						</div>
					</div>
				</div>
				<div className="flex flex-wrap gap-20 justify-center px-2 h-fit">
					{Array.from({ length: 3 }).map((_, i) => (
						<div
							key={i}
							className=" w-full max-w-[442px] h-[636px] border-2 relative"
						>
							<div className="size-full relative overflow-hidden flex items-end">
								<img
									src={`/lol-accounts-${i + 1}.png`}
									className="w-full h-[488px] z-10 top-0 absolute"
								/>
								<WavesComponent
									width={1042}
									height={300}
									className="absolute -bottom-12 -left-96"
								/>
								<div className="flex absolute items-end z-20 p-4">
									<h1 className="text-[40px] text-start font-semibold">
										1-20 Skins Mail Access | EU
									</h1>
									<p className="text-[40px]  text-start font-semibold">
										$10
									</p>
								</div>
							</div>
							<Button className="absolute bottom-4">
								Add to card
							</Button>
						</div>
					))}
				</div>
				<Button
					variant="bg"
					className="mt-32 max-md:w-[90%] max-md:mx-auto overflow-hidden"
				>
					SEE MORE
				</Button>
			</div>
		</section>
	);
}
