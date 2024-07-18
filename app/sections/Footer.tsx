import FooterCol from "@components/FooterCol"

export default function Footer() {
    return (
        <div className="w-vw-full h-[40vh] bg-[#f2f2f2] flex justify-center">
            <div className="w-[90%] h-full flex flex-col">
                <div className="flex flex-[3] justify-between my-5">
                    <FooterCol h1="What's New" p1="Surface Pro" p2="Surface Laptop" p3="Surface Laptop Studio 2" p4="Surface Laptop Go 3" p5="Microsoft Copilot" p6="AI in Windows" p7="Microsoft 365" p8="Windows 11 apps" />
                    <FooterCol h1="Microsoft Store" p1="Account profile" p2="Download Center" p3="Microsoft Store Support" p4="Returns" p5="Order tracking" p6="Microsoft Store Promise" p7="Microsoft Personal Shopping" p8="Flexible Payments" />
                    <FooterCol h1="Education" p1="Microsoft in education" p2="Devices for education" p3="Microsoft Teams for Education" p4="Microsoft 365 Education" p5="Office Education" p6="Educator training and development" p7="Deals for students and parents" p8="Azure for students" />
                    <FooterCol h1="Business" p1="Microsoft Cloud" p2="Microsoft Security" p3="Azure" p4="Dynamics 365" p5="Microsoft 365" p6="Copilot for Microsoft 365" p7="Microsoft Teams" p8="Small Business" />
                    <FooterCol h1="Developer & IT" p1="Developer Center" p2="Documentation" p3="Microsoft Learn" p4="Microsoft Tech Community" p5="Azure Marketplace" p6="AppSource" p7="Microsoft Power Platform" p8="Visual Studio" />
                    <FooterCol h1="Company" p1="Careers" p2="Company news" p3="Privacy at Microsoft" p4="Investors" p5="Sustainability" p6="" p7="" p8="" />
                </div>
                <div className="flex flex-1 my-5">
                    <div className="flex flex-1 gap-5 items-center">
                        <a href="#" className="box text-gray-600 text-[13px] cursor-pointer">English ( Australia )</a>
                        <a href="#" className="box text-gray-600 text-[13px] cursor-pointer">Your Privacy Choises</a>
                        <a href="#" className="box text-gray-600 text-[13px] cursor-pointer">Consumer Health Privacy</a>
                    </div>
                    <div className="flex flex-[1.5] justify-end gap-3 items-center">
                        <a href="#" className="box text-gray-600 text-[13px] cursor-pointer">Contact Microsoft</a>
                        <a href="#" className="box text-gray-600 text-[13px] cursor-pointer">Privacy</a>
                        <a href="#" className="box text-gray-600 text-[13px] cursor-pointer">Terms of Use</a>
                        <a href="#" className="box text-gray-600 text-[13px] cursor-pointer">Trademarks</a>
                        <a href="#" className="box text-gray-600 text-[13px] cursor-pointer">Safety & Eco</a>
                        <a href="#" className="box text-gray-600 text-[13px] cursor-pointer">About our Ads</a>
                        <a href="#" className="box text-gray-600 text-[13px] cursor-pointer">Australian Consumer Use</a>
                        <a href="#" className="box text-gray-600 text-[13px] cursor-pointer">Made with 🤍 by <span className="ml-2 underline">LHagfoss</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}