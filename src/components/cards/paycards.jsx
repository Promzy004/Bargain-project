import { Link } from "react-router-dom"
import social_icons from "../../assets/images/social-icons.png"

export function FirstCard() {

    const datas = [
        {
            platform: 'Netflix',
            price: 7000,
            id: 1
        },
        {
            platform: 'Prime Video',
            price: 2300,
            id: 2
        },
        {
            platform: 'Crunchyroll',
            price: 3500,
            id: 3
        },
        {
            platform: 'Apple Music',
            price: 1200,
            id: 4
        },
        {
            platform: 'Spotify',
            price: 1200,
            id: 5
        },
        {
            platform: 'Youtube Premium',
            price: 1200,
            id: 6
        },
    ]

    return(
        <div className="bg-white h-[417px] shadow-md rounded-2xl p-7 w-80 flex flex-col gap-4">
            <div className="w-full flex flex-col justify-center text-center gap-3 px-6">
                <div>
                    <p className="font-medium">without Stream Bargain</p>
                    <p className="font-medium">Access all for</p>
                </div>
                <del className="text-purple-600 text-xl">{"\u20A6"}{(15200).toLocaleString()}/month</del>
            </div>
            <hr className="" />
            <ul className="flex flex-col items-start mt-5 gap-5 text-sm">
               {datas.map((data, index) => (
                <li key={index}>{data.platform} - <span className="text-neutral-500 text-xs opacity-65">{"\u20A6"}{(data.price).toLocaleString()}/month</span></li>
               ))} 
            </ul>
        </div>
    )
}





export function SecondCard() {

    return(
        <div className="bg-purple-600 h-[417px] shadow-md rounded-2xl p-7 w-80 flex flex-col gap-4">
            <div className="w-full flex flex-col justify-center text-center gap-3 px-6 text-white">
                <div className="flex flex-col gap-3 items-center justify-center">
                    <p className="font-medium bg-white text-purple-600 rounded-md px-3">with Stream Bargain</p>
                    <p className="font-medium">Unlock all for only</p>
                </div>
                <h3 className="text-3xl font-medium">{"\u20A6"}{(7000).toLocaleString()}/month</h3>
            </div>
            <hr className="" />

            <div className="flex bg-red-500 w-full flex-col gap-7 pt-5">
                <div>
                    <img src={social_icons} alt="" className="w-4/5" />
                </div>
                <Link to=''>
                    <button className="rounded-md bg-white px-16 py-2 text-sm text-purple-600">Get Now</button>
                </Link>
            </div>
        </div>
    )
}
 