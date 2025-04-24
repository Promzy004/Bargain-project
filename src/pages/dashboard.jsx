const Dashboard = () => {
    return (
        <div className="bg-purple-400 h-full flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <h2>ACTIVE SERVICES</h2>
                    <button>Cancel Subscription</button>
                </div>
                <div>
                    <li>apple Music</li>
                    <li>youtube</li>
                </div>
            </div>
            <div className="hr h-[1px] bg-customPrimary"></div>
            <div className="flex flex-col gap-5">
                <h2>SUBSCRIPTION PLAN</h2>
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