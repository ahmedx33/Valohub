import Text4 from "./other/text4";
import Text5 from "./other/text5";
import { WavesComponent } from "./waves-component";

export function PhasesSection() {
	return (
		<div className="relative h-[120rem] max-lg:h-fit">
			<div className="w-full max-lg:h-[84rem] h-full relative container mx-auto">
				<div className="absolute -left-20 -bottom-0 max-lg:hidden z-50">
					<Text4 />
				</div>

				<div className="absolute -right-20 top-72 max-lg:hidden z-50">
					<Text5 />
				</div>
			</div>
			<WavesComponent className="right-0 absolute top-[16rem]" />
			<div className="absolute bg-[#FF4656] mt-24 z-20 h-[80rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
				<div className="w-full h-[125%] max-lg:h-full overflow-hidden relative  py-24 bg-[#FF4656] max-lg:px-0 px-80">
					<img
						src="/phases-overlay.svg"
						className="w-fit h-fit absolute -bottom-24 rotate-[3deg] left-1/2 -translate-x-1/2 max-lg:hidden"
					/>
					<div className="h-full bg-black w-1 mx-auto relative max-lg:w-full max-lg:bg-transparent max-lg:flex max-lg:flex-col">
						<div className="size-4 rounded-full bg-black absolute left-1/2 -translate-x-1/2 -top-2 max-lg:bg-transparent" />
						<div className="size-4 rounded-full bg-black absolute left-1/2 -translate-x-1/2 -bottom-2 max-lg:bg-transparent" />
						<div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-black absolute left-[-40%] -translate-x-1/2 -rotate-90 top-14 max-lg:border-b-transparent" />
						<div className="w-[617px] flex flex-col h-fit pb-4 min-h-[224px] max-lg:left-0 max-lg:ml-[4.5rem]  -left-[41rem] bg-[#1F2326] max-lg:w-[77%] px-2 top-[3.8rem] relative rounded-xl before:content-['1'] before:w-[82px] before:h-[77px] before:bg-[#1f2326] before:-left-16 pl-7 pt-4 before:top-0 before:absolute before:rounded-l-full before:flex before:items-center before:text-white before:text-[45px] before:pl-6">
							<h1 className="font-bold uppercase mb-6 text-[25px] text-white">
								Select an Account
							</h1>
							<p className="text-white font-normal text-[20px]">
								Browse through our store and pick the
								account that best suits your
								preferences.
							</p>
						</div>
						<div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-black absolute left-1.5 -translate-x-1/2 rotate-90 top-80 max-lg:border-b-transparent" />
						<div className="w-[617px] flex flex-col h-fit pb-4 min-h-[224px] bg-[#1F2326] -right-[3rem] max-lg:right-0 max-lg:ml-auto max-lg:w-[80%] max-lg:mr-[4.5rem]  top-[6rem] relative rounded-xl before:content-['2'] before:w-[82px] before:h-[77px] before:bg-[#1f2326] before:-right-16 pl-7 pt-4 before:top-0 before:absolute before:rounded-r-full before:flex before:items-center before:text-white before:text-[45px] before:pl-6">
							<h1 className="font-bold uppercase mb-6 text-[25px] text-white">
								Enter Your Email:
							</h1>
							<p className="text-white font-normal text-[20px]">
								Provide the email where you’d like to
								receive your order.
							</p>
						</div>
						<div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-black absolute left-[-40%] -translate-x-1/2 -rotate-90 top-[36.5rem] max-lg:border-b-transparent" />
						<div className="w-[617px] flex flex-col h-fit pb-4 min-h-[224px] max-lg:left-0 max-lg:ml-20  -left-[41rem] bg-[#1F2326] max-lg:w-[75%] px-2 top-[8.5rem] relative rounded-xl before:content-['3'] before:w-[82px] before:h-[77px] before:bg-[#1f2326] before:-left-16 pl-7 pt-4 before:top-0 before:absolute before:rounded-l-full before:flex before:items-center before:text-white before:text-[45px] before:pl-6">
							<h1 className="font-bold uppercase mb-6 text-[25px] text-white">
								Complete Payment:
							</h1>
							<p className="text-white font-normal text-[20px]">
								Decide on your preferred payment method
								to finalize your purchase.
							</p>
						</div>
						<div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-black absolute left-1.5 -translate-x-1/2 rotate-90 top-[53rem] max-lg:border-b-transparent" />
						<div className="w-[617px] flex flex-col h-fit pb-4 min-h-[224px] bg-[#1F2326] -right-[3rem] max-lg:right-0 max-lg:ml-auto max-lg:w-[80%] px-2 max-lg:mr-[4.5rem]  top-[10.5rem] relative rounded-xl before:content-['4'] before:w-[82px] before:h-[77px] before:bg-[#1f2326] before:-right-16 pl-7 pt-4 before:top-0 before:absolute before:rounded-r-full before:flex before:items-center before:text-white before:text-[45px] before:pl-6">
							<h1 className="font-bold uppercase mb-6 text-[25px] text-white">
								Instant Delivery:{" "}
							</h1>
							<p className="text-white font-normal text-[20px]">
								Receive your chosen account instantly
								after placing your order.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
