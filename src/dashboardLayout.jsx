import { Outlet } from "react-router-dom";
import SideBar from "./components/sidebar";
import Navbar from "./components/navbar";
import { useState } from "react";

const DashbordLayout = () => {

    //state used to capture an active page, so as to diplay the active page and also give the link and active background
    //it is passed as props in the sidebar component to manage the state according to the action
    const [activePage, setActivePage] = useState('Dashboard')

    let hello = sessionStorage.setItem('state', activePage);
    console.log(hello)

    return (
        <div className="flex w-full box-border relative">
            <SideBar activePage={activePage} setActivePage={setActivePage} />
            <div className="w-[80%] min-h-screen flex-1 ml-[20%]">
                <Navbar detail = {activePage}/>
                <div className="relative mx-auto left-0 top-32 w-[90%] box-border">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
 
export default DashbordLayout;