import Product from "./product";
import Button from "./ui/button";

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
						<Product id={i.toString()} image={"/account-image.svg"} name={"1-20 Skins Mail Access | EU"} price={10} />
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
