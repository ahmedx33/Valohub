import { useState } from "react";
import FilterProducts from "./filter-products";
import Dots from "./other/dots";
import Splash from "./other/splash";
import Product from "./product";
import Button from "./ui/button";
import { Link } from "react-router-dom";

export default function LolAccountsSection() {
	const [filter, setFilter] = useState<string>("");
	console.log("from accounts", filter);
	return (
		<section className="relative w-full h-fit bg-[#1F2326] py-8  mt-[30rem] container mx-auto">
			
			<div className="absolute left-0 bottom-0">
				<Dots />
			</div>
			<div className="absolute right-0 top-0">
				<Dots />
			</div>
			<div className="relative z-10 flex flex-col justify-start items-center h-full text-center px-4">
				<div className="mt-20 flex flex-col items-center mb-12">
					<h1 className="text-white font-bold whitespace-nowrap text-[40px] md:text-[80px] lg:text-[120px] w-full max-w-[1444px]">
						<div className="w-full flex items-center justify-center">
							<Splash />
						</div>
						LOL ACCOUNTS
					</h1>
					<FilterProducts onFilter={setFilter} />
				</div>
				<div className="flex flex-wrap gap-20 justify-center px-2 h-fit">
					{Array.from({ length: 3 }).map((_, i) => (
						<Product id={i.toString()} image={"/account-image.svg"} name={"1-20 Skins Mail Access | EU"} price={10} />
					))}
				</div>
				<Link to={"/lol"}>
					<Button
						variant="bg"
						className="mt-32 max-md:w-[90%] max-md:mx-auto overflow-hidden"
					>
						SEE MORE
					</Button>
				</Link>
			</div>
		</section>
	);
}
