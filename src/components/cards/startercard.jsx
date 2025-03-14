import iphone_img from "../../assets/images/iPhone 15 Pro.png"

const StarterCard = () => {
    return (
        <div className="h-80 w-64 border-purple-600 border-[1px] rounded-3xl p-8">
            <div className="h-3/5 rounded-t-xl bg-purple-300 flex items-end justify-center">
                <img src={iphone_img} alt="" className="w-3/5" />
            </div>
            <div className="px-3 flex flex-col gap-4 mt-4">
                <h3 className="text-purple-600 font-medium text-sm">Start your membership</h3>
                <p className="text-xs">Kick off your membership for unlimited streaming bliss</p>
            </div>
        </div>
    );
}
 
export default StarterCard;