import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ham_menu from '../assets/images/ham-menu.png'
import ham_cacel from "../assets/images/close-ham-menu.png"
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {

    const [border, setborder] = useState(false);
    const [nav, setNav] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY > 50) {
                setborder(true);
            } else {
                setborder(false);
            }
        }
        window.addEventListener('scroll', handleScroll)


        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },)

    return (
        <header className={border ? 'header shadow-md z-50': 'header'}>
            <Link to=''>Stream Bargain</Link>
                <nav className='nav-desktop'>
                    <button className="md:hidden w-full py-5 border-b-[1px] border-neutral-300/50">
                        <img src={ham_cacel} alt="" className="active:bg-purple-300" onClick={() => setNav(!nav)} />
                    </button>
                    <Link to='#scroll' className="link">How to get started</Link>
                    <Link to='' className="link">FAQs</Link>
                    <Link to='' className="link">Contact Us</Link>
                    <Link to='' className="link">Referrals</Link>
                    <Link to='' className="link md:w-auto w-full">
                        <button className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-500 text-white duration-500 w-full">Get Started</button>
                    </Link>
                </nav>
                <AnimatePresence>
                    {nav && (
                            <motion.nav 
                                    initial={{ x: "100vw", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: "100vw", opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                className={`nav-mobile`}>
                                <button className="md:hidden w-full py-5 border-b-[1px] border-neutral-300/50">
                                    <img src={ham_cacel} alt="" className="active:bg-purple-300" onClick={() => setNav(false)} />
                                </button>
                                <Link to='#scroll' className="link">How to get started</Link>
                                <Link to='' className="link">FAQs</Link>
                                <Link to='' className="link">Contact Us</Link>
                                <Link to='' className="link">Referrals</Link>
                                <Link to='' className="link md:w-auto w-full">
                                    <button className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-500 text-white duration-500 w-full">Get Started</button>
                                </Link>
                            </motion.nav>
                    )}
                </AnimatePresence>
            <button className="md:hidden active:bg-neutral-200" onClick={() => setNav(true)}>
                <img src={ham_menu} alt=""/>
            </button>
        </header>
    );
}
 
export default Header;