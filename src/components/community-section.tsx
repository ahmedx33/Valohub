import CommunityCards from "./community-cards";
import Dots from "./other/dots";

export default function CommunitySection() {
    return (
        <section id="community" className="relative w-full h-fit">
            <div className="absolute left-0 z-10">
                <Dots />
            </div>
            <div className="relative z-50">
                <CommunityCards />
            </div>

            <div className="absolute right-0 -top-20 z-10">
                <Dots />
            </div>
        </section>
    );
}
