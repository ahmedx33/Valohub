import CommunitySection from "./components/community-section";
import HeroSection from "./components/layouts/hero";
import Button from "./components/ui/button";
import { WavesComponent } from "./components/waves-component";

function App() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4">
        <CommunitySection />
      </div>
      <div className="relative">
        <WavesComponent />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1444px]">
          <div className="my-10">
            <h2 className="text-[120px] w-full max-w-[1444px] text-[#1F2326]">JOIN THE <span className="font-bold">COMMUNITY</span></h2>
            <p className="w-full max-w-[1369px] text-[#1F2326] text-[30px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          </div>

          <div className="w-full flex items-center gap-6 max-lg:flex-col justify-center">
            <Button>JOIN DISCORD</Button>
            <Button>JOIN TELEGRAM</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
