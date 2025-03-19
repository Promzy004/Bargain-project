import client1 from "../../assets/images/client1.png"

const TestimonialCard = ({comment, region, name, backgroundImage = client1}) => {
    return (
        <div className="w-full md:h-44 h-40 bg-blue-300 grid grid-cols-[2fr_6fr] rounded-lg text-start">
            <div className={`rounded-s-lg`} style={{background: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'left'}}></div>
            <div className="p-5 flex flex-col gap-4">
                <p className="md:text-sm text-xs">{comment}</p>
                <div className="flex flex-col md:gap-1 gap-[2px]">
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