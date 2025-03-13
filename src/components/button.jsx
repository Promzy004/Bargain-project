import { Link } from "react-router-dom";

const Button = ({href,text}) => {
    return (
        <Link to={href}>
            <button className="px-14 py-2 bg-custom-gradient text-white rounded-xl text-sm">{text}</button>
        </Link>
    );
}
 
export default Button;