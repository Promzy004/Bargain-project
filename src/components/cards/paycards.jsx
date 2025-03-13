export function FirstCard() {

    const datas = [
        {
            platform: 'Netflix',
            price: '7000',
            id: 1
        },
        {
            platform: 'Prime Video',
            price: '2300',
            id: 2
        },
        {
            platform: 'Crunchyroll',
            price: '3500',
            id: 3
        },
        {
            platform: 'Apple Music',
            price: '1200',
            id: 4
        },
        {
            platform: 'Spotify',
            price: '1200',
            id: 5
        },
        {
            platform: 'Youtube Premium',
            price: '1200',
            id: 6
        },
    ]

    return(
        <div className="bg-white rounded-2xl p-7 w-80 flex flex-col gap-4">
            <div className="w-full flex flex-col justify-center text-center gap-3 px-6">
                <p className="font-medium">without Stream Bargain Access all for</p>
                <del className="text-purple-600 text-xl">{"\u20A6"}{(15200).toLocaleString()}/month</del>
            </div>
            <hr className="" />
            <ul className="flex flex-col items-start mt-5 gap-5 text-sm">
               {datas.map((data, index) => (
                <li key={index}>{data.platform} - <span className="text-neutral-500">{"\u20A6"}{(data.price).toLocaleString()}/month</span></li>
               ))} 
            </ul>
        </div>
    )
}
 