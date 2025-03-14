const Headings = ({title1, title2, text}) => {
    return (
        <div className="flex flex-col gap-7">
            <h2 className="text-3xl">{title1} <span className="font-light">{title2}</span></h2>
            <p className="font-[350]">{text}</p>
        </div>
    );
}
 
export default Headings;


export function Heading2({color = 'text-white', style, desc, title}) {

    return(
        <div className={`flex flex-col gap-4 ${color}`}>
            <h3 className="text-3xl">{title}</h3>
            <p className={`font-[350] ${style}`}>{desc}</p>
        </div>
    )
}