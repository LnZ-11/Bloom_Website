import Carousel from "./carousel";

interface CardProps {
    image: string;
    invert: boolean;
}

export default function Card({image, invert}: CardProps) {
    return (
        <div className="flex items-center justify-center w-full h-full">
                {invert ? (
            <div className="grid grid-cols-2 gap-4 h-auto grid-rows-1 w-full">

                    <div className="col-span-1 row-span-1 flex overflow-hidden justify-center items-center p-12">
                        <img src={image} alt="image" className="object-contain size-fit shadow-[0px_0px_7px_6px_rgba(50,_50,_93,_0.25)] rounded-xl" />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <Carousel />
                    </div>
                </div>
                ):(
            <div className="grid grid-cols-2 gap-4 h-auto grid-rows-1 w-full">

                    <div className="col-span-1 row-span-1">
                        <Carousel />
                    </div>
                     <div className="col-span-1 row-span-1 flex overflow-hidden justify-center items-center p-12">
                     <img src={image} alt="image" className="object-contain size-fit shadow-[0px_0px_7px_6px_rgba(50,_50,_93,_0.25)] rounded-xl" />
                 </div>
                </div>
                )}
        </div>
    );
}