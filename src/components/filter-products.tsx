import { useState } from "react";
import { cn } from "./utils/cn";

export default function FilterProducts({ regions, onFilter }: { regions: (string | undefined)[]; onFilter: (value: string) => void }) {
    const [filter, setFilter] = useState<string>("NA");

    const handleFilter = (value: string) => {
        setFilter(value);
        onFilter(value);
    };

    return (
        <div className="flex gap-2 flex-wrap justify-center">
            {regions.map((region) => (
                <button
                    key={region}
                    onClick={() => handleFilter(region as string)}
                    className={cn(
                        "w-[146px] h-[48px] rounded-lg border border-[#FF4656] transition-all text-white text-[30px] max-md:text-[23px] font-semibold cursor-pointer hover:bg-[#FF4656]",
                        filter === region && "bg-[#FF4656] text-black"
                    )}
                >
                    {region}
                </button>
            ))}
        </div>
    );
}
