import { Outlet } from "react-router-dom";
import SideBar from "./components/sidebar";
import Navbar from "./components/navbar";
import { useState } from "react";

const DashbordLayout = () => {

    //state used to capture an active page, so as to diplay the active page and also give the link and active background
    //it is passed as props in the sidebar component to manage the state according to the action
    const [activePage, setActivePage] = useState('Dashboard')

    return (
        <div className="flex min-h-screen box-border">
            <div className="w-[20%] bg-purple-400 h-screen sticky top-0">
                <SideBar activePage={activePage} setActivePage={setActivePage} />
            </div>
            <div className="w-[80%] relative flex justify-center box-border">
                <div className="absolute w-[90%] z-10 top-8">
                    <Navbar detail = {activePage}/>
                </div>
                <div className="absolute top-32 w-[90%]">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
 
export default DashbordLayout;