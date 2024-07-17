import background from "@public/Highlight-Surface-Pro-11Ed-Essentials-Bundle-3tiles_VP5-1920x600.png"

export default function Hero() {
    return (
        <div className="w-vw-full h-[50vh] mt-[80px] bg-[#f2f2f2] flex justify-center items-center">
            <div className="w-[100%] h-[100%] flex">
                <div className="absolute w-[30vw] h-[50vh] ml-32 flex justify-center items-center">
                        <div className="flex flex-col justify-center items-start gap-3">
                            <div className=" text-black bg-[#ffb900] rounded-[5px] px-3 py-1 font-bold">New</div>
                            <h1 className="text-black font-medium text-[35px]">Bundle & Save</h1>
                            <p className="text-black">Save on Microsoft 365, plus get 20% off select accessories when you bundle with the new Surface Pro, Copilot+ PC.</p>
                            <button type="button" className="text-white bg-[#005ca5] rounded-[8px] px-5 py-3">Shop now</button>
                        </div>
                    </div>
                <img src={background.src} alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}