import Button from './ui/button'
import { WavesComponent } from './waves-component'
export default function Product({ id, image, name, price }: Product) {
    return (
        <div
            className=" w-full max-w-[442px] h-[636px] border-2 relative"
        >
            <div className="size-full relative overflow-hidden flex items-end">
                <img
                    src={image}
                    className="w-full h-[488px] z-10 top-0 absolute"
                />
                <WavesComponent
                    width={1042}
                    height={300}
                    className="absolute -bottom-12 -left-96"
                />
                <div className="flex absolute items-end z-20 p-4">
                    <h1 className="text-[40px] text-start font-semibold">
                        {name}
                    </h1>
                    <p className="text-[40px]  text-start font-semibold">
                        ${price}
                    </p>
                </div>
            </div>
            <button data-sellix-product={id}>
                <Button className="absolute bottom-4">
                    Add to card
                </Button>
            </button>
        </div>
    )
}
