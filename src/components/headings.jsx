const Headings = ({title1, title2, text}) => {
    return (
        <div className="flex flex-col gap-7">
            <h2 className="text-3xl">{title1} <span className="font-light">{title2}</span></h2>
            <p className="font-[350]">{text}</p>
        </div>
    );
}
 
export default Headings;