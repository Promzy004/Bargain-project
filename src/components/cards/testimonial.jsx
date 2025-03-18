import img from "../../assets/images/client1.png"

const TestimonialCard = ({comment, region, name}) => {
    return (
        <div className="w-full md:h-44 h-40 bg-blue-300 grid grid-cols-[2fr_4fr] rounded-lg text-start">
            <div className={`bg-[url(../../assets/images/client2.png)] rounded-s-lg`}></div>
            <div className="p-5 flex flex-col gap-4">
                <p className="md:text-sm text-xs">{comment}</p>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold md:text-sm text-xs">{name}</h3>
                    <p className="text-[10px]">
                        <img src="" alt="" />
                        {region}
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default TestimonialCard;