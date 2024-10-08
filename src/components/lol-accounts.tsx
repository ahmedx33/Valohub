import { Suspense, useState } from "react";
import Dots from "./other/dots";
import Splash from "./other/splash";
import Button from "./ui/button";
import { Await, Link, useLoaderData } from "react-router-dom";
import FilterProducts from "./filter-products";
import Product from "./product";
import { Spinner } from "./ui/spinner";


type LoaderData = {
	categoriesPromise: Promise<Category[]>;
};

export default function LolAccountsSection() {
	const [filter, setFilter] = useState<string>("");
	const { categoriesPromise } = useLoaderData() as LoaderData;

	return (
		<section className="relative w-full h-fit bg-[#1F2326] py-8  lg:mt-[10rem] container mx-auto">
			<div className="absolute left-0 bottom-0">
				<Dots />
			</div>
			<div className="absolute right-0 top-0">
				<Dots />
			</div>
			<div className="relative z-10 flex flex-col justify-start items-center h-full text-center px-4">
				<div className="mb-20 flex flex-col items-center">
					<h1 className="text-white font-bold whitespace-nowrap text-[40px] md:text-[80px] lg:text-[120px] w-full max-w-[1444px]">
						<div className="w-full flex items-center justify-center">
							<Splash />
						</div>
						LOL ACCOUNTS
					</h1>

					<div className="z-10">
						<Suspense fallback={""}>
							<Await resolve={categoriesPromise}>
								{(categories: Category[]) => {
									const regions = Array.from(
										new Set(
											categories
												.filter(category => category.title.startsWith("League"))
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
										category.title.startsWith("League") && category.title.includes(filter)
								) as Category[];

								const groupedLeagueCategory = filteredCategories.reduce(
									(acc: { title: string; products_bound: Product[] }, category: Category) => {
										const { products_bound } = category;

										if (acc.products_bound.length === 0) {
											acc = {
												title: "League of Legends",
												products_bound: [...products_bound],
											};
										} else {
											acc.products_bound.push(...products_bound);
										}

										return acc;
									},
									{ title: "League of Legends", products_bound: [] }
								);


								return (
									<div>
										<div className="flex flex-wrap gap-10 justify-center px-2 h-fit">
											{groupedLeagueCategory.products_bound.slice(0, 3).map((product: Product) => (
												<Product key={product.uniqid} {...product} />
											))}
										</div>
									</div>
								);
							}}
						</Await>
					</Suspense>
				</div>
				<Link to={"/lol"}>
					<Button
						variant="bg"
						className="mt-32 max-md:mx-auto overflow-hidden"
					>
						SEE MORE
					</Button>
				</Link>
			</div>
		</section>
	);
}
