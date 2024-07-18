"use client"
import arrowUp from "@public/arrowUp.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareXTwitter, faLinkedin, faSquareYoutube, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Socials() {

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="w-vw-full h-[50px] my-[80px] flex justify-center items-center">
            <div className="w-[90%] flex gap-5 items-center justify-between">
                <div className="flex gap-5 items-center">
                    <p className="text-black">Follow Microsoft</p>
                    <FontAwesomeIcon icon={faSquareFacebook} className='text-black h-[50px] roundned-[8px] cursor-pointer' />
                    <FontAwesomeIcon icon={faSquareXTwitter} className='text-black h-[50px] roundned-[8px] cursor-pointer' />
                    <FontAwesomeIcon icon={faLinkedin} className='text-black h-[50px] roundned-[8px] cursor-pointer' />
                    <FontAwesomeIcon icon={faSquareYoutube} className='text-black h-[50px] roundned-[8px] cursor-pointer' />
                    <FontAwesomeIcon icon={faSquareInstagram} className='text-black h-[50px] roundned-[8px] cursor-pointer' />
                </div>
                <div className="">
                    <button onClick={scrollToTop} type="button" className="text-white bg-[#005ca5] rounded-[8px] px-5 py-3 flex gap-2 backToTop">Back to Top <img src={arrowUp.src} className="arrowUp relative" /></button>
                </div>
            </div>
        </div>
    )
}