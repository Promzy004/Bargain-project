import { Link } from "react-router-dom";

const Button = ({href,text}) => {
    return (
        <Link to={href}>
            <button className="md:px-14 md:py-3 sm:px-9 sm:py-2 px-20 py-3 bg-custom-gradient text-white rounded-xl text-sm">{text}</button>
        </Link>
    );
}
 
export default Button;