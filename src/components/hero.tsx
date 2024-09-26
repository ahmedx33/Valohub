import Button from "./ui/button";
import Header from "./layouts/header";

export default function HeroSection() {
	return (
		<section className="relative w-full h-fit bg-[#FF4656] py-8 ">
			{/* Text and navigation are layered above the image */}
			<div className="relative z-10 flex flex-col justify-start items-center h-full text-center px-4">
				<Header />
				<div className="mt-20 flex flex-col items-center ">
					<h1 className="text-[#1F2326] font-medium text-[40px] md:text-[80px] lg:text-[120px] w-full max-w-[1444px]">
						Welcome to the
						<span className="font-bold"> #1 Riot</span>{" "}
						Account <span className="font-bold">Shop</span>
					</h1>
					<p className="w-full max-w-[1369px] text-[#1F2326] text-[18px] md:text-[24px] lg:text-[30px] mt-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore
						et dolore magna aliqua.
					</p>
				</div>

				<div className="flex items-center gap-8 mt-10 mb-16 max-lg:flex-col">
					<Button>Buy Now</Button>

					<Button>CONTACT US</Button>
				</div>

				<div className="my-10">
					<div className="bg-[#1F232680] w-[80px] h-[80px] flex items-center justify-center ">
						<img
							draggable={false}
							src="/val-logo.png"
							alt="logog"
							className="select-none"
						/>
					</div>
					<div className="bg-[#1F232680] w-[80px] h-[8px] mt-3"></div>
				</div>
			</div>

			{/* Background image */}
			<div className="absolute top-0 left-0 w-full h-full z-0">
				<img
					draggable={false}
					src="/hero.svg"
					alt="hero"
					className="w-full h-full object-cover select-none"
				/>
			</div>
		</section>
	);
}
