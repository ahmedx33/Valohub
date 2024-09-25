import { Link } from "react-router-dom";

const LINKS = [
    { name: "Home", path: "/", type: "path" },
    { name: "LEAGUE OF LEGENDS", path: "/lol", type: "path" },
    { name: "VALORANT", path: "/valorant", type: "path" },
    { name: "COMMUNITY", path: "/community", type: "path" },
];

export default function Header() {
    return (
        <header className="w-full h-[80px] bg-[#1F2326] container rounded-xl max-lg:hidden">
            <div className=" mx-auto h-full flex items-center justify-between px-7">
                <Link to={"/"} className="mx-5">
                    <img src="/logo.png" alt="logo" />
                </Link>
                <ul className="flex items-center gap-6">
                    {LINKS.map((link) => (
                        <li
                            key={link.name}
                            className="text-[18px] font-semibold text-white hover:text-[#FF4654] transition-all"
                        >
                            {link.type === "path" ? (
                                <Link to={link.path}>{link.name}</Link>
                            ) : (
                                <a href={link.path}>{link.name}</a>
                            )}
                        </li>
                    ))}
                </ul>
                <button className="bg-[#FF4654] text-white text-[18px] font-bold p-2 rounded-lg">
                    Buy Now
                </button>
            </div>
        </header>
    );
}
