import { Await, Link, useLoaderData } from "react-router-dom";
import FilterProducts from "./filter-products";
import Dots from "./other/dots";
import Splash from "./other/splash";
import Product from "./product";
import Button from "./ui/button";
import { Suspense, useState } from "react";
import { Spinner } from "./ui/spinner";


type LoaderData = {
	categoriesPromise: Promise<Category[]>;
};


export default function AccountsSection() {
	const [filter, setFilter] = useState("");
	const { categoriesPromise } = useLoaderData() as LoaderData;

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

					<div className="z-10">
						<Suspense fallback={""}>
							<Await resolve={categoriesPromise}>
								{(categories: Category[]) => {
									const regions = Array.from(
										new Set(
											categories
												.filter(category => category.title.startsWith("Valorant"))
												.map(category => category.title.split(" ").pop())
										)
									);

									return <FilterProducts regions={regions} onFilter={setFilter} />;
								}}
							</Await>
						</Suspense>
					</div>
				</div>
				<div className="flex flex-wrap gap-20 justify-center px-2 h-fit">
					<Suspense fallback={<Spinner />}>
						<Await resolve={categoriesPromise}>
							{(categories: Category[]) => {
								const filteredCategories = categories.filter(
									category =>
										category.title.startsWith("Valorant") && category.title.includes(filter)
								);

								const groupedValorantCategory = filteredCategories.reduce(
									(acc: { title: string; products_bound: Product[] }, category: Category) => {
										const { products_bound } = category;

										if (acc.products_bound.length === 0) {
											acc = {
												title: "Valorant",
												products_bound: [...products_bound],
											};
										} else {
											acc.products_bound.push(...products_bound);
										}

										return acc;
									},
									{ title: "Valorant", products_bound: [] }
								);


								return (
									<div>
										<div className="flex flex-wrap gap-10 justify-center px-2 h-fit">
											{groupedValorantCategory.products_bound.slice(0, 3).map((product: Product) => (
												<Product key={product.uniqid} {...product} />
											))}
										</div>
									</div>
								);
							}}
						</Await>
					</Suspense>
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
