import sale from "@public/sell.svg"
import surface from "@public/surface.svg"
import pc from "@public/pc.svg"
import windows from "@public/windows.svg"
import xbox from "@public/xbox.svg"
import shop from "@public/shop.svg"

export default function Filter() {
    return (
        <div className="w-vw-full h-[30vh] flex justify-center items-center">
            <div className="w-[80%] h-full flex justify-between items-center">
                <div className="h-[200px] flex flex-col justify-center items-center gap-3 cursor-pointer box">
                    <img src={sale.src} className="w-[80px] bg-[#f2f2f2] p-4 rounded-[8px]" />
                    <a className="text-black text-center">Sale</a>
                </div>
                <div className="h-[200px] flex flex-col justify-center items-center gap-3 cursor-pointer box">
                    <img src={surface.src} className="w-[80px] bg-[#f2f2f2] p-4 rounded-[8px]" />
                    <a className="text-black text-center">Surface Devices</a>
                </div>
                <div className="h-[200px] flex flex-col justify-center items-center gap-3 cursor-pointer box">
                    <img src={pc.src} className="w-[80px] bg-[#f2f2f2] p-4 rounded-[8px]" />
                    <a className="text-black text-center">Find your next PC</a>
                </div>
                <div className="h-[200px] flex flex-col justify-center items-center gap-3 cursor-pointer box">
                    <img src={windows.src} className="w-[80px] bg-[#f2f2f2] p-4 rounded-[8px]" />
                    <a className="text-black text-center">Choose your Microsoft 365</a>
                </div>
                <div className="h-[200px] flex flex-col justify-center items-center gap-3 cursor-pointer box">
                    <img src={xbox.src} className="w-[80px] bg-[#f2f2f2] p-4 rounded-[8px]" />
                    <a className="text-black text-center">Xbox and Consoles</a>
                </div>
                <div className="h-[200px] flex flex-col justify-center items-center gap-3 cursor-pointer box">
                    <img src={shop.src} className="w-[80px] bg-[#f2f2f2] p-4 rounded-[8px]" />
                    <a className="text-black text-center">Shop Business</a>
                </div>
            </div>
        </div>
    )
}