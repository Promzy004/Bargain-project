import { useEffect, useState } from "react";

const Navbar = ({detail}) => {
    
    const [blurNav, setBlurNav] = useState(false);

    useEffect(() => {

        const handleScroll = (e) => {
            if(window.scrollY > 10) {
                setBlurNav(true);
                console.log(window.scrollY)
            } else {
                setBlurNav(false);
            }
        }
        window.addEventListener('scroll', handleScroll)


        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },)

    return (
        <div className={`duration-500 left-[24%] px-5 py-3 w-[72%] fixed top-8 rounded-md text-white z-30 ${blurNav ? 'backdrop-blur-sm text-black bg-custompurple3/60 font-bold' : 'bg-custompurple3'}`}>
            {detail}
        </div>
    );
}
 
export default Navbar;