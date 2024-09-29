import React, { useState, useEffect } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	variant?: "main" | "bg";
}

export default function Button({
	children,
	className,
	variant = "main",
}: ButtonProps) {
	const [svgSize, setSvgSize] = useState({ width: 281, height: 71 });

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth <= 640) {
				setSvgSize({ width: 150, height: 40 });
			} else {
				setSvgSize({ width: 281, height: 71 });
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div
			tabIndex={0}
			className={`cursor-pointer relative inline-block  ${className}`}
		>
			<div className="uppercase text-[20px] font-bold absolute left-0 top-0 size-full text-white z-10 pointer-events-none flex items-center justify-center mx-auto">
				<span
					className={
						variant === "bg"
							? "italic font-bold text-center text-[40px] text-nowrap max-lg:font-medium max-md:text-[27px]"
							: "max-lg:font-medium max-lg:text-[16px] max-sm:text-[13px]"
					}
				>
					{children}
				</span>
			</div>

			{/* SVG element */}
			{variant === "main" ? (
				<svg
					className="button-svg"
					width={svgSize.width}
					height={svgSize.height}
					viewBox="0 0 281 71"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_b_0_1)">
						<rect
							x="0.765656"
							y="0.633911"
							width="279.469"
							height="61.4911"
							fill="black"
							fillOpacity="0.4"
						/>
						<rect
							x="1.26566"
							y="1.13391"
							width="278.469"
							height="60.4911"
							stroke="white"
							strokeOpacity="0.2"
						/>
					</g>
					<g filter="url(#filter1_b_0_1)">
						<rect
							x="0.5"
							y="0.5"
							width="280"
							height="70"
							stroke="#AAAAAA"
						/>
					</g>
					<path
						d="M79.6294 6.97318L73.1212 1.26782H207.879L201.371 6.97318H79.6294Z"
						fill="white"
						stroke="white"
					/>
					<rect
						x="0.765625"
						y="62.125"
						width="279.469"
						height="8.24107"
						fill="white"
					/>
					<g filter="url(#filter2_b_0_1)">
						<path
							d="M88.0517 61.808L16.8447 1.26782H1.53131V33.2812L38.6662 61.808H88.0517Z"
							fill="white"
							fillOpacity="0.1"
						/>
					</g>
					<g filter="url(#filter3_b_0_1)">
						<path
							d="M193.714 61.808L264.921 1.26782H280.234V33.2812L243.099 61.808H193.714Z"
							fill="white"
							fillOpacity="0.1"
						/>
					</g>
					<defs>
						<filter
							id="filter0_b_0_1"
							x="-9.23434"
							y="-9.36609"
							width="299.469"
							height="81.4911"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood
								floodOpacity="0"
								result="BackgroundImageFix"
							/>
							<feGaussianBlur
								in="BackgroundImageFix"
								stdDeviation="5"
							/>
							<feComposite
								in2="SourceAlpha"
								operator="in"
								result="effect1_backgroundBlur_0_1"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_backgroundBlur_0_1"
								result="shape"
							/>
						</filter>
						<filter
							id="filter1_b_0_1"
							x="-30"
							y="-30"
							width="341"
							height="131"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood
								floodOpacity="0"
								result="BackgroundImageFix"
							/>
							<feGaussianBlur
								in="BackgroundImageFix"
								stdDeviation="15"
							/>
							<feComposite
								in2="SourceAlpha"
								operator="in"
								result="effect1_backgroundBlur_0_1"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_backgroundBlur_0_1"
								result="shape"
							/>
						</filter>
						<filter
							id="filter2_b_0_1"
							x="-8.46869"
							y="-8.73218"
							width="106.52"
							height="80.5402"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood
								floodOpacity="0"
								result="BackgroundImageFix"
							/>
							<feGaussianBlur
								in="BackgroundImageFix"
								stdDeviation="5"
							/>
							<feComposite
								in2="SourceAlpha"
								operator="in"
								result="effect1_backgroundBlur_0_1"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_backgroundBlur_0_1"
								result="shape"
							/>
						</filter>
						<filter
							id="filter3_b_0_1"
							x="183.714"
							y="-8.73218"
							width="106.52"
							height="80.5402"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood
								floodOpacity="0"
								result="BackgroundImageFix"
							/>
							<feGaussianBlur
								in="BackgroundImageFix"
								stdDeviation="5"
							/>
							<feComposite
								in2="SourceAlpha"
								operator="in"
								result="effect1_backgroundBlur_0_1"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_backgroundBlur_0_1"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			) : (
				<svg
					className="button-svg"
					width="400"
					height="82"
					viewBox="0 0 554 82"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.62506 1.5L539.159 0L550.034 52L549.115 81.5H12.5043L4.62506 1.5Z"
						fill="#FF4656"
					/>
					<path
						d="M553 62.6613L539.46 1.5H538.664L549.776 59.2634L545.907 80.5H549.454L553 62.6613Z"
						fill="white"
						stroke="white"
					/>
					<path
						d="M8.77049 1.5H4.88525L1 19.7308L12.6557 80.5H16.8185L5.7178 19.7308L8.77049 1.5Z"
						fill="white"
						stroke="white"
					/>
				</svg>
			)}
		</div>
	);
}
