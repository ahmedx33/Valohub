import CommunityCards from "./community-cards";
import Dots from "./other/dots";

export default function CommunitySection() {
    return (
        <section className="relative w-full h-fit">
            <div className="absolute left-0">
                <Dots />
            </div>
            <CommunityCards />

            <div className="absolute right-0 -top-20">
                <Dots />
            </div>
        </section>
    )
}
