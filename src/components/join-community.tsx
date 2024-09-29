import Text2 from "./other/text2";
import Text3 from "./other/text3";
import Button from "./ui/button";
import { WavesComponent } from "./waves-component";

export default function JoinCommunity() {
    return (
        <div className="relative h-[800px] py-24 max-lg:bg-[#FF4656] rounded-xl container mx-auto">
            <div className="absolute -left-20 -bottom-32 max-lg:hidden z-50">
                <Text2 />
            </div>

            <div className="absolute -right-20 -bottom-32 max-lg:hidden z-50">
                <Text3 />
            </div>
            <WavesComponent className="absolute top-0 left-1/2 h-full -translate-x-1/2 max-lg:hidden" />
            <div className="absolute top-1/2 left-1/2 h-96rem transform -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="my-10 flex flex-col">
                    <h2 className="text-[120px] max-sm:text-3xl max-lg:text-5xl text-center text-[#1F2326]">
                        JOIN THE{" "}
                        <span className="font-bold">COMMUNITY</span>
                    </h2>
                    <p className="w-[80%] text-[#1F2326] text-[30px] mx-auto text-center">
                        Join our community of VALORANT and League of Legends players! Trade accounts, share tips, and connect with fellow gamers.
                    </p>
                </div>

                <div className="w-full flex items-center gap-6 max-lg:flex-col justify-center">
                    <Button>JOIN DISCORD</Button>
                    <Button>JOIN TELEGRAM</Button>
                </div>
            </div>
        </div>
    )
}
