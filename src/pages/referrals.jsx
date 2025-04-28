const Referrals = () => {

    const referralList = [
        'promise',
        'pascal',
        'prosper',
        'prosper',
        'prosper',
        'prosper',
        'prosper',
        'prosper',
        'prosper',
        'prosper',
        'prosper',
        'prosper',
        'prosper',
        'prosper',
        'prosper',
    ]

    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-between">
                <h2 className="text-4xl font-semibold bg-custom-gradient bg-clip-text text-transparent">
                {"\u20A6"}{(10000).toLocaleString()}
                </h2>
                <button className="md:px-4 md:py-2 sm:px-9 sm:py-2 px-20 py-3 bg-custom-gradient text-white rounded-md text-sm">Withdrawal</button>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center px-5 py-8 rounded-tl-lg rounded-tr-lg bg-custompurple3 text-white">
                    <div className="flex flex-col">
                        <p>Invite your friends</p>
                        <p className="text-sm">Your friends too can enjoy the benefits for Stream Bargain</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-xl">DSU1J34FM</p>
                        <p>copy</p>
                        <p>share</p>
                    </div>
                </div>
                <div className="flex justify-between bg-custompurple3 px-4 py-3 text-white">
                    <p>Referrals</p>
                    <p>7</p>
                </div>
                <div className="flex flex-col gap-2">
                    {referralList.map(referral => (
                        <div className="flex flex-col gap-2">
                            <p>{referral}</p>
                            <div className="w-full h-[1px] bg-custompurple3"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Referrals;