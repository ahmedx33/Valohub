import { Link } from "react-router-dom";
import { PRODUCTS } from "./constants/products";
import FilterProducts from "./filter-products";
import Dots from "./other/dots";
import Splash from "./other/splash";
import Product from "./product";
import Button from "./ui/button";
import { useState } from "react";

export default function AccountsSection() {
	const [filter, setFilter] = useState("");
	console.log("from accounts", filter);
	return (
		<section className="relative w-full mx-auto h-fit bg-[#1F2326] py-8 container">
			<div className="absolute left-0 bottom-0">
				<Dots />
			</div>
			<div className="absolute right-0 top-0">
				<Dots />
			</div>
			<div className="relative z-10 flex flex-col justify-start items-center h-full text-center px-4">

				<div className="mt-20 flex flex-col items-center mb-12">
					<h1 className="text-white text-center font-bold whitespace-nowrap max-md:text-3xl mb-4 max-lg:text-5xl lg:text-[90px] w-full max-w-[1444px]">
						<div className="w-full flex items-center justify-center">
							<Splash />
						</div>
						VALORANT ACCOUNTS
					</h1>
					<FilterProducts onFilter={setFilter} />
				</div>
				<div className="flex flex-wrap gap-20 justify-center px-2 h-fit">
					{PRODUCTS.map((product) => (
						<Product id={product.id} image={product.image} name={product.name} price={product.price} />
					))}
				</div>
				<Link to={"/valorant"}>
					<Button
						variant="bg"
						className="mt-32  max-md:mx-auto overflow-hidden"
					>
						SEE MORE
					</Button>
				</Link>
			</div>
		</section>
	);
}
