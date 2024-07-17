import React from 'react';

interface CardProps {
    title: string;
    description: string;
    buttonText: string;
    more: string;
    span: string;
    imgSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, buttonText, more, span, imgSrc }) => {
    return (
        <div className="card w-[350px] shadow-xl rounded-[15px] h-full flex flex-col overflow-hidden">
            <div className="flex flex-1 bg-[#f2f2f2]"><img src={imgSrc} className="card-image w-full h-[200px]" /></div>
            <div className="flex flex-[1.3] flex-col">
                <div className="flex flex-1 flex-col gap-5 m-5">
                    <div className=""><h1 className="text-black text-[25px] font-medium">{title}</h1></div>
                    <div className=""><p className="text-black font-light">{description}</p></div>
                    <div className=""><p className="more-consoles text-[#005ca5] hover:underline cursor-pointer">{more} <span className='more-consoles-span'>{span}</span></p></div>
                </div>
                <div className="flex flex-1 m-5 items-end">
                    <button type="button" className="h-[50px] text-white bg-[#005ca5] px-5 rounded-[8px]">{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;