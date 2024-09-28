import Button from './ui/button';

export default function Product({ id, image, name, price }: Product) {
    return (
        <div className="relative w-full max-w-[442px] h-[636px]">
            <svg
                viewBox="0 0 442 636"
                preserveAspectRatio="xMidYMid meet"
                className="absolute top-0 left-0 w-full h-full z-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
            >
                <g clipPath="url(#clip0_124_3379)">
                    <path
                        d="M70.7093 469.519L-245.308 480.723L-247.326 512.435L-232.51 636.936L514.982 651.871C531.378 642.697 566.536 594.651 568.6 592.147C570.665 589.642 564.941 490.445 556.738 411.639L274.121 426.621L283.759 450.725L59.3354 445.982L70.7093 469.519Z"
                        fill="#FF4654"
                    />
                    <path
                        d="M1 635V20.3939L13.4972 7H440.692L441 635H1Z"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_124_3379">
                        <rect width="442" height="636" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-between p-4">
                <img src={image} alt={name} className="w-full h-[488px] object-cover" />
                <div className="text-center mb-[3rem]">
                    <h2 className="text-[30px] font-semibold">{name}</h2>
                    <p className="text-[30px] font-semibold">${price}</p>
                </div>
                <div className="absolute -bottom-[2rem] w-full flex justify-center">
                    <button data-sellix-product={id}>
                        <Button>Add to cart</Button>
                    </button>
                </div>
            </div>
        </div>
    );
}
