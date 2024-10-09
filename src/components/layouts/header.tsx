import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const LINKS = [
    { name: "Home", path: "/", type: "path" },
    { name: "LEAGUE OF LEGENDS", path: "/lol", type: "path" },
    { name: "VALORANT", path: "/valorant", type: "path" },
    { name: "COMMUNITY", path: "/#community", type: "path" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-3 left-1/2 transform -translate-x-1/2 w-full h-[82px] px-4 md:px-10 lg:px-20 z-[999]">
            <svg
                className="absolute top-0 left-0 w-full h-full lg:block hidden"
                width="1677"
                height="82"
                viewBox="0 0 1677 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M36.7814 81L13.1711 1.99938L1634.23 0.500254L1666.99 52.1233L1664.26 81H36.7814Z"
                    fill="#1F2326"
                    stroke="white"
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

            <svg
                className="absolute top-0 left-0 w-full h-full lg:hidden block"
                width="417"
                height="47"
                viewBox="0 0 417 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4.09753 0.857039L405.479 0L413.645 29.7107L412.955 46.5658H10.0141L4.09753 0.857039Z"
                    fill="#1F2326"
                />
                <path
                    d="M415.748 35.802L405.581 0.856934H404.984L413.327 33.8606L410.422 45.9943H413.085L415.748 35.802Z"
                    fill="white"
                    stroke="white"
                />
                <path
                    d="M7.08657 0.856934H4.16914L1.25171 11.2733L10.004 45.9943H13.1298L4.7943 11.2733L7.08657 0.856934Z"
                    fill="white"
                    stroke="white"
                />
            </svg>

            <div className="max-lg:absolute relative mx-auto  h-full flex items-center justify-between z-10  container max-sm:px-5 max-lg:w-full left-0 md:px-[2rem] lg:px-7">
                <Link to={"/"} className="mx-5">
                    {/* Adjusted logo size for mobile */}
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="h-8 md:h-10" // Reduced logo size on small screens
                    />
                </Link>

                <ul className="items-center gap-6 lg:flex hidden mx-auto">
                    {LINKS.map((link) => (
                        <li
                            key={link.name}
                            className="text-[16px] md:text-[18px] font-semibold text-white hover:text-[#FF4654] transition-all"
                        >
                            {link.type === "path" ? (
                                <Link to={link.path}>{link.name}</Link>
                            ) : (
                                <a href={link.path}>{link.name}</a>
                            )}
                        </li>
                    ))}
                </ul>
                <button className="bg-[#FF4654] text-white text-[16px] md:text-[18px] font-bold px-4 py-2 rounded-lg lg:block hidden">
                    Buy Now
                </button>

                <button
                    className="lg:hidden block text-white text-3xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FiMenu />
                </button>
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 w-full bg-[#1F2326] p-5 lg:hidden flex flex-col items-center space-y-4 mx-auto md:left-[2rem]">
                        <ul className="flex flex-col items-center gap-4">
                            {LINKS.map((link) => (
                                <li
                                    key={link.name}
                                    className="text-[18px] font-semibold text-white hover:text-[#FF4654] transition-all"
                                    onClick={handleLinkClick}
                                >
                                    {link.type === "path" ? (
                                        <Link to={link.path}>{link.name}</Link>
                                    ) : (
                                        <a href={link.path}>{link.name}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-[#FF4654] text-white text-[18px] font-bold px-5 py-2 rounded-lg">
                            Buy Now
                        </button>
                    </div>
                )}

            </div>
        </header>
    );
}
