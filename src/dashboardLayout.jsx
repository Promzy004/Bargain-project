import { Outlet } from "react-router-dom";
import SideBar from "./components/sidebar";
import Navbar from "./components/navbar";

const DashbordLayout = () => {
    return (
        <div className="flex min-h-screen bg-neutral-800">
            <div className="w-[25%] bg-purple-400 h-screen sticky top-0">
                <SideBar />
            </div>
            <div className="w-[75%] relative flex justify-center box-border bg-orange-300">
                <div className="absolute w-[80%] z-10 top-8">
                    <Navbar />
                </div>
                <div className="w-full absolute top-28">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
 
export default DashbordLayout;