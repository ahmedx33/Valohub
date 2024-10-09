import { Suspense, useState } from "react";
import FilterProducts from "./filter-products";
import Dots from "./other/dots";
import Splash from "./other/splash";
import Button from "./ui/button";
import { WavesComponent } from "./waves-component";
import Text2 from "./other/text2";
import Text3 from "./other/text3";
import { Await, Link, useLoaderData, useLocation } from "react-router-dom";
import Product from "./product";
import { Spinner } from "./ui/spinner";

type LoaderData = {
    categoriesPromise: Promise<Category[]>;
};

export default function ValorantProductsPage() {
    const [filter, setFilter] = useState<string>("NA");
    const { categoriesPromise } = useLoaderData() as LoaderData;
    const location = useLocation();

    // Check if the current route starts with "/valorant"
    const isValorantRoute = location.pathname.startsWith("/valorant");

    return (
        <div className="mt-36 z-10">
            <div className="relative h-[800px] py-24 max-lg:bg-[#FF4656] z-10">
                <WavesComponent className="absolute top-0 left-1/2 h-full max-lg:hidden -translate-x-1/2 " />
                <div className="w-full h-full relative container mx-auto">
                    <div className="absolute -left-20 max-lg:hidden z-50">
                        <Text2 />
                    </div>
                    <div className="absolute -right-20 -bottom-32 max-lg:hidden z-50">
                        <Text3 />
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 h-96rem transform -translate-x-1/2 -translate-y-1/2 w-full">
                    <div className="my-10 flex flex-col text-center w-full">
                        <h2 className="text-[120px] max-sm:text-3xl max-lg:text-5xl text-center text-[#1F2326] font-medium">
                            VALORANT Accounts
                        </h2>
                        <p className="w-[80%] text-[#1F2326] text-[30px] max-lg:text-[20px] mx-auto text-center">
                            Search through a wide range of Valorant accounts to find the one that is right for you.
                        </p>
                    </div>
                    <div className="w-full flex items-center gap-6 max-lg:flex-col justify-center">
                        <Link to={"/"}>
                            <Button>HOME</Button>
                        </Link>
                        <Button>VALORANT</Button>
                    </div>
                </div>
            </div>

            <div className="mb-20 flex flex-col items-center relative container mx-auto mt-10">
                <div className="absolute left-0 bottom-0">
                    <Dots />
                </div>
                <div className="absolute right-0 top-0">
                    <Dots />
                </div>
                <h2 className="text-white font-bold whitespace-nowrap max-md:text-3xl mb-4 max-lg:text-5xl lg:text-[90px] w-full max-w-[1444px] text-center">
                    <div className="w-full flex items-center justify-center">
                        <Splash />
                    </div>
                    VALORANT ACCOUNTS
                </h2>
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
                            if (isValorantRoute) {
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
                                            {groupedValorantCategory.products_bound.map((product: Product) => (
                                                <Product key={product.uniqid} {...product} />
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            return null;
                        }}
                    </Await>
                </Suspense>
            </div>
        </div>
    );
}
