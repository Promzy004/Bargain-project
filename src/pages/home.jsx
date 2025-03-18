import Button from "../components/button";
import Header from "../components/header";
import { FirstCard, SecondCard } from "../components/cards/paycards";
import { AnimatePresence, motion } from "framer-motion";
import Headings, { Heading2 } from "../components/headings";
import StarterCard from "../components/cards/startercard";
import TestimonialCard from "../components/cards/testimonial";
import { useEffect, useState } from "react";
import apple_icon from '../assets/images/social-icons/apple-logo.png'
import spotify_icon from '../assets/images/social-icons/spotify-logo.png'
import prime_icon from '../assets/images/social-icons/prime-logo.png'
import youtube_icon from '../assets/images/social-icons/youtube-logo.png'
import cruchyroll_icon from '../assets/images/social-icons/cruchyroll-logo.png'
import netflix_icon from '../assets/images/social-icons/netflix-logo.png'

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

    const heading2 = [
        {
            title: 'What our clients say',
            desc: 'We take pride in the relationships we build with our clients, and their feedback fuels our passion to deliver the best farm-to-table experience.'
        },
        {
            title: 'Frequently Asked',
            desc: 'Questions'
        },
        {
            title: `Refer and earn ${"\u20A6"}150`,
            desc: 'We pay 150 naira every time anyone subscribes using your referral link'
        },
        {
            title: 'Contact us',
            desc: 'Our friendly team would love to hear from you'
        },
    ]


    const testimonial_data = [
        {
            id: 1,
            name: 'John carter',
            region: 'South Africa',
            comment: '"The taste is unbelievable! I thought farm-fresh meant good, but this is on another level. The tomatoes are he sweetest i\'ve ever had"'
        },
        {
            id: 2,
            name: 'Edwin Promise',
            region: 'Nigeria',
            comment: '"The taste is unbelievable! I thought farm-fresh meant good, but this is on another level. The tomatoes are he sweetest i\'ve ever had"'
        },
        {
            id: 3,
            name: 'John Doe',
            region: 'United State',
            comment: '"The taste is unbelievable! I thought farm-fresh meant good, but this is on another level. The tomatoes are he sweetest i\'ve ever had"'
        },
        {
            id: 4,
            name: 'Mary Goblin',
            region: 'United Kingdom',
            comment: '"The taste is unbelievable! I thought farm-fresh meant good, but this is on another level. The tomatoes are he sweetest i\'ve ever had"'
        },
    ]

    const [index, setIndex] = useState(0);
    

    useEffect(() => {
        const interval = setTimeout(() => {
            setIndex(prev => (prev < testimonial_data.length - 2 ? prev + 2 : 0))
            console.log(index)
        }, 6000)

        return () => clearTimeout(interval);
    })



    return (
        <div>
            <Header />
            <section className="w-full flex flex-col justify-center md:py-16 sm:py-8 mt-10  md:gap-14 gap-8 h-screen">
                <div className="flex flex-col gap-11 lg:w-2/4 md:w-3/5 sm:w-[75%] w-[85%] md:mb-0 mb-6 items-center mx-auto text-center">
                    <p className="md:mb-4 mb-1 sm:text-lg text-sm">Give up having multiple subscriptions.</p>
                    <h3 className="sm:text-4xl text-3xl font-[450]">All streaming services are available for <span className="text-purple-500">Single price!</span></h3>
                    <p className="md:mb-4 mb-1 sm:text-xl text-lg">As little as <span className="font-semibold">{"\u20A6"}3,500 per month</span>, receive an All-Access Pass to all your favorite streaming apllications.</p>
                    <Button text='Gain Access Now' href='facebook.com'/>
                </div>
                <div className="container">
                    <img src={apple_icon} alt="streaming platform icons" className="w-full imgs img1" />
                    <img src={spotify_icon} alt="streaming platform icons" className="w-full imgs img2" />
                    <img src={prime_icon} alt="streaming platform icons" className="w-full imgs img3" />
                    <img src={youtube_icon} alt="streaming platform icons" className="w-full imgs img4" />
                    <img src={cruchyroll_icon} alt="streaming platform icons" className="w-full imgs img5" />
                    <img src={netflix_icon} alt="streaming platform icons" className="w-full imgs img6" />

                    {/* duplicate for a loop */}
                    {/* <img src={apple_icon} alt="streaming platform icons" className="w-full img1" />
                    <img src={spotify_icon} alt="streaming platform icons" className="w-full img2" />
                    <img src={prime_icon} alt="streaming platform icons" className="w-full img3" />
                    <img src={youtube_icon} alt="streaming platform icons" className="w-full img4" />
                    <img src={cruchyroll_icon} alt="streaming platform icons" className="w-full img5" />
                    <img src={netflix_icon} alt="streaming platform icons" className="w-full img6" /> */}
                </div>
            </section>

            <section id="scroll" className="w-full bg-custom-gradient flex flex-col gap-20 items-center justify-center md:px-20 md:py-20 py-14 text-center">
                <div className="lg:w-2/4 sm:w-3/4 px-5 text-white flex flex-col gap-7">
                    <h3 className="md:text-4xl text-3xl">Give up paying for each streaming app separately</h3>
                    <p className="text-sm">Use Stream Bargain to save over {"\u20A6"}4400 on monthly entertainment subscriptions</p>
                </div>
                <div className="overflow-auto sm:overflow-hidden w-full ">
                        <div className="sm:px-0 gap-6 lg:gap-10 sm:w-full w-64 mx-auto flex sm:flex-wrap sm:justify-center">
                        <FirstCard />
                        <SecondCard />
                        </div>
                </div>
            </section>

            <section id="scroll" className="w-full flex flex-col gap-20 items-center justify-center md:px-20 md:py-20 py-14 text-center">
                <div className="px-5">
                    <Headings title1={headings[0]['title1']} title2={headings[0]['title2']} text={headings[0]['text']} />
                </div>
                <div className="flex w-full flex-col gap-11">
                    <div className="px-5">
                        <Headings title1={headings[1]['title1']} title2={headings[1]['title2']} text={headings[1]['text']} />
                    </div>
                    {/* <div className="md:w-auto bg-red-300 lg:w-5/6 w-[70%] mx-auto px-14 grid md:grid-cols-[1fr_1fr] md:grid-rows-2 grid-cols-[1fr_1fr_1fr] gap-6">
                        <StarterCard />
                        <StarterCard />
                        <StarterCard />
                    </div> */}
                    {/* <div className="md:w-auto bg-red-300 overflow-auto w-full lg:w-5/6 mx-auto md:px-12 px-[25vw] grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-[1fr_1fr] md:grid-rows-2 grid-cols-[1fr_1fr_1fr] gap-6">
                        <StarterCard />
                        <StarterCard />
                        <StarterCard />
                    </div> */}

                    <div className="overflow-auto w-full">
                        <div className="sm:px-0 gap-6 sm:w-full w-64 mx-auto flex sm:flex-wrap sm:justify-center">
                            <StarterCard />
                            <StarterCard />
                            <StarterCard />
                        </div>
                    </div>

                    {/* <div className="flex bg-red-400 sm:flex-wrap sm:justify-center overflow-hidden gap-6 w- mx-auto px-[25vw]">
                        <StarterCard />
                        <StarterCard />
                        <StarterCard />
                    </div> */}
                    <Button href='' text='Get Started Now'/>
                </div>  
            </section>

            <section id="scroll" className="w-full bg-custom-gradient flex flex-col gap-20 items-center justify-center py-20 text-center">
                <div className="w-full lg:px-56 px-5">
                    <Heading2 title={heading2[0]['title']} desc={heading2[0]['desc']} />
                </div>
                <div className="md:w-4/5 w-[90%] flex lg:flex-row flex-col gap-5 overflow-hidden">
                    {testimonial_data.slice(index, index + 2).map((card) => (
                        <AnimatePresence key={card.id}  mode="wait">
                            <motion.div
                                key={card.id}
                                initial={{x: '100vw', opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{ type: 'tween', ease: 'easeInOut'}}
                                exit={{x: '-100vw', opacity: 0}}
                            >
                                <TestimonialCard name={card.name} region={card.region} comment={card.comment} />
                            </motion.div>
                        </AnimatePresence>
                    ))}
                </div>
            </section>

            <section id="scroll" className="w-full px-56 flex flex-col gap-20 items-center justify-center py-20 text-center">
                <Heading2 color="text-black" title={heading2[1]['title']} desc={heading2[1]['desc']} style='text-2xl font-light'/>
            </section>

            <section id="scroll" className="w-full bg-custom-gradient px-56 flex flex-col gap-20 items-center justify-center py-20 text-center">
                <Heading2 color="text-white" title={heading2[2]['title']} desc={heading2[2]['desc']} />
            </section>

            <section id="scroll" className="w-full px-56 flex flex-col gap-20 items-center justify-center py-20 text-center">
                <Heading2 color="text-black" title={heading2[3]['title']} desc={heading2[3]['desc']} style='text-purple-200 text-bold' />
            </section>

        </div>
    );
}
 
export default Home;