import React from 'react';
import bundle from "@public/surface.avif";
import xbox from "@public/ai.avif";
import surface from "@public/cope.avif";
import controllers from "@public/vsc.webp";
import Card from '../components/BusinessCard';

export default function BusinessCards() {
    return (
        <div className="w-vw-full h-[50vh] flex justify-center">
            <div className="w-[90%] h-full flex justify-between items-center flex-row">
                <Card
                    newBox='New'
                    title="Surface Laptop 6"
                    description="Get exceptional power, better performance and AI-powered tools all in a 13.5-inch or 15-inch design."
                    buttonText="Shop Now"
                    imgSrc={bundle.src}
                />
                <Card
                    newBox='New'
                    title="Copilot for Microsoft 365"
                    description="Save time and focus on the things that matter most with AI in Microsoft 365 for business."
                    buttonText="Learn More"
                    imgSrc={surface.src}
                />
                <Card
                    newBox='invis'
                    title="Join the Era of AI"
                    description="Create, communicate, and code with the latest Microsoft AI solutions."
                    buttonText="Explore AI Solutions"
                    imgSrc={xbox.src}
                />
                <Card
                    newBox='invis'
                    title="Visual Studio Code 2022"
                    description="Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games."
                    buttonText="Download VSC 2022"
                    imgSrc={controllers.src}
                />
            </div>
        </div>
    );
}