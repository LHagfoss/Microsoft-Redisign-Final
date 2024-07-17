import copilot from "@public/copilot.avif"

export default function Copilot() {
    return (
        <div className="w-vw-full h-[55vh] my-[80px] flex justify-center items-center">
            <div className="w-[90%] h-[100%] flex">
                <div className="absolute w-[25vw] h-[55vh] ml-32 flex justify-center items-center">
                        <div className="flex flex-col justify-center items-start gap-3">
                            <h1 className="text-black font-medium text-[35px]">Unlock your <br />potential with <br /> Microsoft Copilot</h1>
                            <p className="text-black">Get things done faster and unleash your creativity with the power of AI anywhere you go.</p>
                            <button type="button" className="text-white bg-[#005ca5] rounded-[8px] px-5 py-3">Download The Copilot App</button>
                        </div>
                    </div>
                <img src={copilot.src} alt="" className="w-full h-full object-cover rounded-[15px]" />
            </div>
        </div>
    )
}