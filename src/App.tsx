import CommunitySection from "./components/community-section";
import HeroSection from "./components/hero";
import AccountsSection from "./components/accounts";
import { PhasesSection } from "./components/phases";
import LolAccountsSection from "./components/lol-accounts";
import JoinCommunity from "./components/join-community";

function App() {
	return (
		<>
			<HeroSection />
			<div className="container mx-auto px-4 ">
				<CommunitySection />
			</div>
			<JoinCommunity />
			<AccountsSection />
			<PhasesSection />
			<LolAccountsSection />
		</>
	);
}

export default App;
