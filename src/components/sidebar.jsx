const SideBar = () => {

    const contents = [
        {
            title : 'Dashboard',
            image: 'random'
        },
        {
            title : 'Tips',
            image: 'random'
        },
        {
            title : 'Profile',
            image: 'random'
        },
        {
            title : 'Referrals',
            image: 'random'
        },
        {
            title : 'Customer Service',
            image: 'random'
        }
    ]

    return (
        <div className="bg-red-300 h-full flex flex-col gap-10 py-16 pl-10">
            <h2>Stream Bargain</h2>
            <div className="flex flex-col items-center gap-4 pl-12">
                {contents.map((content, index) => (
                    <div key={index} className="bg-white w-full px-6 py-2 rounded-tl-md rounded-bl-md">
                        <img src="" alt="" />
                        <p> {content.title} </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default SideBar;