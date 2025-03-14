import { Link } from "react-router-dom";

const Button = ({href,text}) => {
    return (
        <Link to={href}>
            <button className="md:px-14 px-9 md:py-3 py-2 bg-custom-gradient text-white rounded-xl text-sm">{text}</button>
        </Link>
    );
}
 
export default Button;