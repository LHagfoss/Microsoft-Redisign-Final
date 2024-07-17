import React from 'react';
import bundle from "@public/bundle.avif";
import xbox from "@public/xbox.webp";
import surface from "@public/surface.jpg";
import controllers from "@public/controllers.avif";
import Card from '../components/Card';

export default function Cards() {
    return (
        <div className="w-vw-full h-[50vh] flex justify-center">
            <div className="w-[90%] h-full flex justify-between items-center flex-row">
                <Card
                    title="Bundle & Save"
                    description="Save on Microsoft 365, plus get 20% off select accessories when you bundle with the new Surface Laptop, Copilot+ PC."
                    buttonText="Shop Now"
                    more=''
                    span=''
                    imgSrc={bundle.src}
                />
                <Card
                    title="Save 10% on Surf Go 3"
                    description="Save on Microsoft 365, plus get 20% off select accessories when you bundle with the new Surface Laptop, Copilot+ PC."
                    buttonText="Shop Surface Laptop Go 3"
                    more=''
                    span=''
                    imgSrc={surface.src}
                />
                <Card
                    title="Xbox Series X"
                    description="The fastest, most powerful Xbox ever."
                    buttonText="Shop Xbox Series X"
                    more="Click here for More Consoles"
                    span='>'
                    imgSrc={xbox.src}
                />
                <Card
                    title="Xbox Controllers"
                    description="Elite, wireless, adaptive – find the controller that fits your style of play."
                    buttonText="Shop Now"
                    more=''
                    span=''
                    imgSrc={controllers.src}
                />
            </div>
        </div>
    );
}