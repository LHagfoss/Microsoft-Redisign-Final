import React from 'react';

interface CardProps {

    h1: string;

    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;

}

const Card: React.FC<CardProps> = ({ h1, p1, p2, p3, p4, p5, p6, p7, p8 }) => {

    const paragraphs = [p1, p2, p3, p4, p5, p6, p7, p8];


    return (
        <div className="flex flex-col gap-3">

            <h1 className="text-gray-600 font-medium">{h1}</h1>
            {paragraphs.map((p, index) => (

                <a href='#' key={index} className='box text-gray-600 text-[13px] cursor-pointer' style={{ display: p.includes("invis") ? "none" : "block" }}>{p}</a>

            ))}
        </div>

    );

};

export default Card;