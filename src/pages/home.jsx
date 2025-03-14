import Button from "../components/button";
import Header from "../components/header";
import social from "../assets/images/social-medias.png"
import { FirstCard, SecondCard } from "../components/cards/paycards";
import { motion } from "framer-motion";
import Headings from "../components/headings";
import StarterCard from "../components/cards/startercard";

const Home = () => {

    const headings = [
        {
            title1: 'Is this even',
            title2: 'possible?',
            text: 'Yes it is! How we make this work is we link five people to one Premium/Family account, giving everyone their own profile and unlimited access to all the content. No setup from you required - we take care of all the details. Simply login and enjoy.'
        },
        {
            title1: 'How to',
            title2: 'Get Started',
            text: 'Within moments, receive your login details, and you\'re all set to dive into a world of unlimited entertainment hassle-free.'
        }
    ]

    console.log(headings[0]['title'])

    return (
        <div>
            <Header />
            <section className="w-full flex flex-col justify-center pt-16 gap-14 h-screen">
                <div className="flex flex-col gap-11 w-2/4 items-center mx-auto text-center">
                    <p className="mb-4 text-lg">Give up having multiple subscriptions.</p>
                    <h3 className="text-4xl font-[450]">All streaming services are available for <span className="text-purple-500">Single price!</span></h3>
                    <p className="mb-4 text-xl">As little as <span className="font-semibold">{"\u20A6"}3,500 per month</span>, receive an All-Access Pass to all your favorite streaming apllications.</p>
                    <Button text='Gain Access Now' href='facebook.com'/>
                </div>
                <motion.div 
                    className="w-4/5 px-20 mx-auto relative flex gap-5">
                    <img src={social} alt="streaming platform icons" className="w-full " />
                </motion.div>
            </section>

            <section id="scroll" className="w-full bg-custom-gradient flex flex-col gap-20 items-center justify-center px-20 py-20 text-center">
                <div className="w-2/4 text-white flex flex-col gap-7">
                    <h3 className="text-4xl">Give up paying for each streaming app separately</h3>
                    <p className="text-sm">Use Stream Bargain to save over {"\u20A6"}4400 on monthly entertainment subscriptions</p>
                </div>
                <div className="flex gap-12">
                    <FirstCard />
                    <SecondCard />
                </div>
            </section>

            <section id="scroll" className="w-full flex flex-col gap-20 items-center justify-center px-56 py-20 text-center">
                <Headings title1={headings[0]['title1']} title2={headings[0]['title2']} text={headings[0]['text']} />
                <div className="flex flex-col gap-11">
                    <Headings title1={headings[1]['title1']} title2={headings[1]['title2']} text={headings[1]['text']} />
                    <div className="w-full justify-center flex gap-12 mb-6">
                        <StarterCard />
                        <StarterCard />
                        <StarterCard />
                    </div>
                    <Button href='' text='Get Started Now'/>
                </div>
                
            </section>
        </div>
    );
}
 
export default Home;