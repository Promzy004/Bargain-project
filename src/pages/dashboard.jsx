const Dashboard = () => {
    return (
        <div className="h-full flex flex-col gap-5">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl">ACTIVE SERVICES</h2>
                    <button className="md:px-4 md:py-2 sm:px-9 sm:py-2 px-20 py-3 bg-custom-gradient text-white rounded-md text-sm">Cancel Subscription</button>
                </div>
                <div>
                    <li>apple Music</li>
                    <li>youtube</li>
                </div>
            </div>
            <div className="hr h-[1px] bg-customPrimary"></div>
            <div className="flex flex-col gap-5">
                <h2 className="font-semibold text-xl">SUBSCRIPTION PLAN</h2>
                <div className="flex justify-between items-center">
                    <div>
                        <h4>VIDEO SERVICES</h4>
                        <div>
                            <li>netflix</li>
                            <li>youtube</li>
                            <li>prime video</li>
                        </div>
                    </div>
                    <div>
                        <h4>MUSIC SERVICES</h4>
                        <div>
                            <li>Spotify</li>
                            <li>Apple Music</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;