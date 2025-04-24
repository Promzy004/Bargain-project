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
import client1 from "../assets/images/client1.png"
import client2 from "../assets/images/client2.png"
import FAQs from "../components/cards/faq";
import refer_img from "../assets/images/refer_img.png"
import ReferAlert from "../components/refer";
import Form from "../components/form";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

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
            comment: '"The taste is unbelievable! I thought farm-fresh meant good, but this is on another level. The tomatoes are he sweetest i\'ve ever had"',
            image: client1,
        },
        {
            id: 2,
            name: 'Edwin Promise',
            region: 'Nigeria',
            comment: '"The taste is unbelievable! I thought farm-fresh meant good, but this is on another level. The tomatoes are he sweetest i\'ve ever had"',
            image: client2
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

    const faqs_data = [
        {
            question: 'How is this service possible?',
            answer: 'How we make his work is we link five people to one Premium/Family account, giving everyone their own profile and unlimited access to all the content. No setup from you required - we take care of all the details. Simply login and enjoy!',
            id: 1
        },
        {
            question: 'Is the payment option safe?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam consequuntur vitae earum et expedita tempore! Tenetur iste porro quisquam',
            id: 2
        },
        {
            question: 'Can i cancel my subscription?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam consequuntur vitae earum et expedita tempore! Tenetur iste porro quisquam',
            id: 3
        },
        {
            question: 'Do i have privacy on the content i consume?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam consequuntur vitae earum et expedita tempore! Tenetur iste porro quisquam',
            id: 4
        },
        {
            question: 'Can i have multiple subscription on the sae service?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam consequuntur vitae earum et expedita tempore! Tenetur iste porro quisquam',
            id: 5
        },
        {
            question: 'Is this service legal?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam consequuntur vitae earum et expedita tempore! Tenetur iste porro quisquam',
            id: 6
        },
    ]


    //state for managing the tesimonial slider
    const [index, setIndex] = useState(0);
    
    //useEffect that triggers when a change of state occur
    useEffect(() => {

        //setTimeout used to set a timer when the next slider should display
        const interval = setTimeout(() => {
            setIndex(prev => (prev < testimonial_data.length - 2 ? prev + 2 : 0))
        }, 6000)

        //setTimeout cleanup, this cleans up the timeout when it is unmount
        return () => clearTimeout(interval);
    })

    const [faqIndex, setFaqIndex] = useState(null)

    const handleFaqClick = (index) => {
        setFaqIndex(prev => prev == index ? null : index)
    }

    const navigate = useNavigate();




    return (
        <div>
            <Header />
            <section className="w-full flex flex-col justify-center lg:py-7 md:py-36 sm:py-8 mt-10 md:gap-14 gap-8 lg:h-screen py-20 box-content">
                <div className="flex flex-col gap-11 lg:w-2/4 md:w-3/5 sm:w-[75%] w-[85%] md:mb-0 mb-6 items-center mx-auto text-center">
                    <p className="md:mb-4 mb-1 sm:text-lg text-sm">Give up having multiple subscriptions.</p>
                    <h3 className="sm:text-4xl text-[7vw] font-[450]">All streaming services are available for <span className="text-purple-500">Single price!</span></h3>
                    <p className="md:mb-4 mb-1 sm:text-xl text-[4.5vw]">As little as <span className="font-semibold">{"\u20A6"}3,500 per month</span>, receive an All-Access Pass to all your favorite streaming apllications.</p>
                    <Button text='Gain Access Now' href='facebook.com'/>
                </div>
                <div className="container">
                    <img src={apple_icon} alt="streaming platform icons" className="w-full imgs img1" />
                    <img src={spotify_icon} alt="streaming platform icons" className="w-full imgs img2" />
                    <img src={prime_icon} alt="streaming platform icons" className="w-full imgs img3" />
                    <img src={youtube_icon} alt="streaming platform icons" className="w-full imgs img4" />
                    <img src={cruchyroll_icon} alt="streaming platform icons" className="w-full imgs img5" />
                    <img src={netflix_icon} alt="streaming platform icons" className="w-full imgs img6" />
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
                    <div className="overflow-auto w-full">
                        <div className="sm:px-0 gap-6 sm:w-full w-64 mx-auto flex sm:flex-wrap sm:justify-center">
                            <StarterCard />
                            <StarterCard />
                            <StarterCard />
                        </div>
                    </div>
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
                                <TestimonialCard name={card.name} backgroundImage={card.image} region={card.region} comment={card.comment} />
                            </motion.div>
                        </AnimatePresence>
                    ))}
                </div>
            </section>

            <section id="scroll" className="w-full flex flex-col gap-20 items-center justify-center py-20 text-center">
                <Heading2 color="text-black" title={heading2[1]['title']} desc={heading2[1]['desc']} style='text-2xl font-light'/>
                <div className="w-full flex flex-col items-center gap-3">
                    {faqs_data.map((faq, index) => (
                        <FAQs key={index} question={faq.question} answer={faq.answer} index={index} handClick={handleFaqClick} answer_style={faqIndex == index ? 'flex' : 'hidden'} arrow_style={faqIndex == index ? 'transform rotate-y-180 duration-500' : ''} />
                    ))}
                </div>
            </section>

            <section id="scroll" className="w-full bg-custom-gradient lg:px-56 px-5 flex flex-col gap-20 items-center justify-center py-20 text-center">
                <Heading2 color="text-white" title={heading2[2]['title']} desc={heading2[2]['desc']} />
                <div className="w-full flex flex-col items-center gap-10">
                    <ReferAlert />
                    <Button href='' text='Get Started' />
                    <img src={refer_img} alt="" />
                </div>
            </section>

            <section id="scroll" className="w-full flex flex-col lg:px-56 px-5 gap-14 items-center justify-center py-20 text-center">
                <Heading2 color="text-black" title={heading2[3]['title']} desc={heading2[3]['desc']} style='text-customgray3 text-bold' />
                <Form />
            </section>

            <section className="w-[80%] md:mt-32 md:mb-6 my-6 mx-auto flex flex-col gap-8">
                <Newsletter />
                <div className="w-full h-[1px] bg-neutral-400"></div>
                <div className="flex md:flex-row flex-col justify-between gap-5 md:items-center md:my-10 sm:my-5 my-2">
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="md:text-2xl text-xl">Start your incredible experience with Stream Bargain</h3>
                        <p className="text-sm text-custompurple1/50">Join over 4,000+ people to enjoy streaming payment made easy.</p>
                    </div>
                    <div action="" method="post" className="md:w-[50%] w-full flex gap-2">
                        <button onClick={() => navigate('/login')} className="w-[50%] border border-neutral-400 shadow-sm rounded-lg text-base px-3 py-2 bg-custompurple3/5 hover:bg-customPrimary hover:text-white duration-500 cursor-pointer">Login</button>
                        <button onClick={() => navigate('/register')} className="w-[50%] py-1 bg-customPrimary hover:bg-customPrimary/80 duration-500 text-base text-white rounded-lg">Sign Up</button>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-neutral-400"></div>
                <Footer />
            </section>

        </div>
    );
}
 
export default Home;