import CommunitySection from "./components/community-section";
import HeroSection from "./components/hero";
import Button from "./components/ui/button";
import { WavesComponent } from "./components/waves-component";
import AccountsSection from "./components/accounts";
import { PhasesSection } from "./components/phases";
import LolAccountsSection from "./components/lol-accounts";

function App() {
	return (
		<>
			<HeroSection />
			<div className="container mx-auto px-4">
				<CommunitySection />
			</div>
			<div className="relative h-[800px] py-24 max-lg:bg-[#FF4656]">
				<WavesComponent className="absolute top-0 left-1/2 h-full -translate-x-1/2 " />
				<div className="absolute top-1/2 left-1/2 h-96rem transform -translate-x-1/2 -translate-y-1/2 w-full">
					<div className="my-10 flex flex-col">
						<h2 className="text-[120px] max-sm:text-3xl max-lg:text-5xl text-center text-[#1F2326]">
							JOIN THE{" "}
							<span className="font-bold">COMMUNITY</span>
						</h2>
						<p className="w-[80%] text-[#1F2326] text-[30px] mx-auto text-center">
							Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
							Ut enim
						</p>
					</div>

					<div className="w-full flex items-center gap-6 max-lg:flex-col justify-center">
						<Button>JOIN DISCORD</Button>
						<Button>JOIN TELEGRAM</Button>
					</div>
				</div>
			</div>
			<AccountsSection />
			<PhasesSection />
			<LolAccountsSection />
		</>
	);
}

export default App;
