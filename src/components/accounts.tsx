import { PRODUCTS } from "./constants/products";
import Product from "./product";
import Button from "./ui/button";

export default function AccountsSection() {
	return (
		<section className="relative w-full h-fit bg-[#1F2326] py-8 ">
			<div className="relative z-10 flex flex-col justify-start items-center h-full text-center px-4">
				<div className="mt-20 flex flex-col items-center mb-12">
					<h1 className="text-white font-bold whitespace-nowrap max-md:text-3xl mb-4 max-lg:text-5xl lg:text-[90px] w-full max-w-[1444px]">
						VALORANT ACCOUNTS
					</h1>
					<div className="flex gap-2 flex-wrap justify-center">
						<div className="w-[146px] h-[48px] rounded-lg  bg-[#FF4654] text-[30px] font-semibold">
							NA
						</div>
						<div className="w-[146px] h-[48px] rounded-lg border-2 border-[#FF4654] text-white text-[30px] font-semibold">
							EU
						</div>
						<div className="w-[146px] h-[48px] rounded-lg border-2 border-[#FF4654] text-white text-[30px] font-semibold">
							BR
						</div>
						<div className="w-[146px] h-[48px] rounded-lg border-2 border-[#FF4654] text-white text-[30px] font-semibold">
							AP
						</div>
						<div className="w-[146px] h-[48px] rounded-lg border-2 border-[#FF4654] text-white text-[30px] font-semibold">
							KR
						</div>
					</div>
				</div>
				<div className="flex flex-wrap gap-20 justify-center px-2 h-fit">
					{PRODUCTS.map((product) => (
						<Product id={product.id} image={product.image} name={product.name} price={product.price} />
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
