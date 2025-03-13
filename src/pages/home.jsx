import Button from "../components/button";
import Header from "../components/header";
import social from "../assets/images/social-medias.png"
import { FirstCard } from "../components/cards/paycards";

const Home = () => {
    return (
        <div>
            <Header />
            <section className="w-full flex flex-col gap-14 h-screen my-10">
                <div className="flex flex-col gap-11 w-2/4 items-center mx-auto text-center">
                    <p className="mb-4 text-lg">Give up having multiple subscriptions.</p>
                    <h3 className="text-4xl font-medium">All streaming services are available for <span className="text-purple-600">Single price!</span></h3>
                    <p className="mb-4 text-xl">As little as <span className="font-semibold">{"\u20A6"}3,500 per month</span>, receive an All-Access Pass to all your favorite streaming apllications.</p>
                    <Button text='Gain Access Now' href='facebook.com'/>
                </div>
                <div className="w-full px-28">
                    <img src={social} alt="streaming platform icons" className="w-full" />
                </div>
            </section>

            <section className="w-full bg-custom-gradient flex flex-col gap-14 items-center justify-center px-20 py-14 text-center">
                <div className="w-2/4 text-white flex flex-col gap-7">
                    <h3 className="text-4xl">Give up paying for each streaming app separately</h3>
                    <p className="text-sm">Use Stream Bargain to save over {"\u20A6"}4400 on monthly entertainment subscriptions</p>
                </div>
                <div>
                    <FirstCard />
                </div>
            </section>
        </div>
    );
}
 
export default Home;