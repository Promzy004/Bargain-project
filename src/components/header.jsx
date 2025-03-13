import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [border, setborder] = useState(false);

    return (
        <header className="w-full h-16 flex justify-between items-center py-5 px-28">
            <Link to=''>Stream Bargain</Link>
            <nav className="flex gap-5 items-center text-sm">
                <Link to='' className="link">How to get started</Link>
                <Link to='' className="link">FAQs</Link>
                <Link to='' className="link">Contact Us</Link>
                <Link to='' className="link">Referrals</Link>
                <Link to='' className="link">
                    <button className="px-4 py-2 rounded-lg bg-purple-900 hover:bg-purple-600 text-white duration-500">Get Started</button>
                </Link>
            </nav>
        </header>
    );
}
 
export default Header;