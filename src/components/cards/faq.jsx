import arrow from '../../assets/images/arrow_icon.png';

const FAQs = ({question, answer, handClick, index, answer_style, arrow_style}) => {
    return (
        <div className="bg-customPrimary/30 text-start border-[1.5px] border-customPrimary rounded-xl lg:w-[80%] md:w-5/6 w-[90%]  py-3 px-4 flex flex-col items-start gap-3 cursor-pointer" onClick={() => handClick(index)}>
            <div className='flex justify-between w-full items-center'>
                <h3 className="font-[550] md:text-lg sm:text-base text-sm">{question}</h3>
                <img src={arrow} alt="" className={`md:h-[10px] h-[8px] ${arrow_style}`} />
            </div>
            <p className={`font-light md:text-sm text-xs text-customPrimary pl-3 ${answer_style}`}>{answer}</p>
        </div>
    );
}
 
export default FAQs;