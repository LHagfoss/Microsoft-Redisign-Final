import React from 'react';

interface CardProps {
    newBox: string;
    title: string;
    description: string;
    buttonText: string;
    imgSrc: string;
}

const Card: React.FC<CardProps> = ({ newBox, title, description, buttonText, imgSrc }) => {
    const isInvisible = newBox.includes("invis");

    return (
        <div className="card w-[350px] shadow-xl rounded-[15px] h-full flex flex-col overflow-hidden">
            <div className={`absolute m-5 z-10 ${isInvisible ? 'hidden' : ''}`}>
                <p className="text-black bg-[#ffb900] rounded-[5px] px-3 py-1 font-bold">{newBox}</p>
            </div>
            <div className="flex flex-1 bg-[#fff] overflow-hidden"><img src={imgSrc} className="card-image w-full h-[200px]" /></div>
            <div className="flex flex-[1.5] flex-col">
                <div className="flex flex-1 flex-col gap-5 m-5">
                    <div className=""><h1 className="text-black text-[25px] font-medium">{title}</h1></div>
                    <div className=""><p className="text-black font-light">{description}</p></div>
                </div>
                <div className="flex flex-1 m-5 items-end">
                    <button type="button" className="h-[50px] text-white bg-[#005ca5] px-5 rounded-[8px]">{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;