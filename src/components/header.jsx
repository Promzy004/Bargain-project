import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [border, setborder] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY > 50) {
                setborder(true);
            } else {
                setborder(false);
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },)

    return (
        <header className={border ? 'header shadow-md z-50': 'header'}>
            <Link to=''>Stream Bargain</Link>
            <nav className="md:flex lg:gap-5 gap-2 items-center text-sm hidden">
                <Link to='#scroll' className="link">How to get started</Link>
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