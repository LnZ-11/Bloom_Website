import Carousel from "./carousel";

interface CardProps {
    image: string;
}

export default function Card({image}: CardProps) {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="grid grid-cols-2 gap-4 h-96 grid-rows-1 w-full p-6">
                <div className="col-span-1 row-span-1">
                <Carousel />
                </div>
                <div className="col-span-1 row-span-1 flex overflow-hidden justify-center items-center p-6">
                <img src={image} alt="image" className="object-cover shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.35)] rounded-xl" />
                </div>
            </div>
        </div>
    );
}