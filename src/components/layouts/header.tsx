import { Link } from "react-router-dom";

const LINKS = [
    { name: "Home", path: "/", type: "path" },
    { name: "LEAGUE OF LEGENDS", path: "/lol", type: "path" },
    { name: "VALORANT", path: "/valorant", type: "path" },
    { name: "COMMUNITY", path: "/community", type: "path" },
];

export default function Header() {
    return (
        <header className="fixed top-3 left-1/2 right-1/2 transform -translate-x-1/2 w-full h-[82px]  z-50 px-20 max-lg:hidden">
            <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 1677 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12.5 1.5L1634.5 0L1667.5 52L1664.71 81.5H36.409L12.5 1.5Z"
                    fill="#1F2326"
                />
                <path
                    d="M1676 62.6613L1634.91 1.5H1632.5L1666.22 59.2634L1654.48 80.5H1665.24L1676 62.6613Z"
                    fill="white"
                    stroke="white"
                />
                <path
                    d="M24.5789 1.5H12.7895L1 19.7308L36.3684 80.5H49L15.3158 19.7308L24.5789 1.5Z"
                    fill="white"
                    stroke="white"
                />
            </svg>

            <div className="relative mx-auto h-full flex items-center justify-between px-7">
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
