import logo from "@public/microsoft.png"
import user from "@public/user.svg"

export default function Navbar() {

    return (
        <div className="top-0 navbar fixed p-10 w-vw-full h-[80px] bg-[#f2f2f2] flex justify-around items-center shadow-lg">
            <div className="flex flex-1">
                <img src={logo.src} className="h-[30px]" draggable="false" />
            </div>
            <div className="flex flex-2 gap-10">
                <a href="#" className='text-black'>Work / Projects</a>
                <a href="#" className='text-black'>About</a>
                <a href="#" className='text-black'>Contact / Socials</a>
            </div>
            <div className="flex flex-1 justify-end gap-5">
                <button type="button" className="bg-[#005ca5] w-[200px] py-3 px-5 rounded-[8px] text-white text-center">Login</button>
                {/* <img src={user.src} className="h-[50px]" /> */}
            </div>
        </div>
    );
}