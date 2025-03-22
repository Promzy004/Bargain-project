import alert from "../assets/images/fluent_alert.png";

const ReferAlert = () => {
    return (
        <div className="xl:w-72 xl:h-28 lg:w-80 lg:h-32 md:w-72 md:h-28 sm:w-72 sm:h-28 w-72 h-28 relative flex justify-center">
            <div className="bg-customgray2/40 w-[80%] h-[100%] rounded-2xl absolute"></div>
            <div className="bg-customgray1/90 w-[90%] h-[90%] rounded-2xl absolute"></div>
            <div className="bg-customwhite w-full h-[80%] rounded-2xl flex justify-center gap-3 items-center absolute">
                <img src={alert} alt="" className="w-6" />
                <div className="flex flex-col gap-2">
                    <h4 className="lg:text-lg text-base">You jus got paid <b>{"\u20A6"}150</b></h4>
                    <p className="lgtext-sm text-xs bg-custompurple3/50 px-[4px] py-[2px]">for referring:Barryj@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
 
export default ReferAlert
;