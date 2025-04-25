import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SideBar = ({activePage, setActivePage}) => {


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


    //funtion used to handle the state in the dashboardlayout component
    //help update the state according to the action performed
    const handleClick = (page) => {
        setActivePage(page)
    }


    return (
        <div className="bg-custompurple3 h-full flex flex-col gap-10 py-16 pl-10">
            <h2>Stream Bargain</h2>
            <div className="flex flex-col items-center gap-4">
                {contents.map((content, index) => (
                    <Link 
                        to={content.title == 'Customer Service' ? '/support' : `/${content.title.toLowerCase()}`}
                        onClick={() => handleClick(content.title)} key={index} 
                        className={activePage === content.title ? "bg-white before:content-[''] before:h-full before:absolute relative before:w-2 before:left-0 before:top-0 before:bg-custom-gradient before:rounded-tl-md before:rounded-bl-md text-black w-full px-6 py-2 rounded-tl-md rounded-bl-md" : 'w-full px-6 py-2 text-white rounded-tl-md rounded-bl-md'}
                    >
                        <img src="" alt="" />
                        <p> {content.title} </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
 
export default SideBar;