import { useState } from "react";
import avatar from "../assets/images/avatar.jpeg";

const UsersProfile = () => {


    const [editProfile, setEditProfile] = useState(false)
    const [changePass, setChangePass] = useState(false)
    return (
        <div className="flex flex-col gap-10 relative">
            <div className="flex items-center gap-6">
                <img src={avatar} alt="" width={150} />
                <div>
                    <h2 className="text-xl font-semibold">Promise Dozeman Black</h2>
                    <p className="text-sm font-normal">promiseedwin242@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                    <button className={`bg-custompurple3/40 text-start px-5 py-2 rounded-sm ${changePass ? 'text-black/15' : ''}`}>Edit Profile</button>
                    <button className={`bg-custompurple3/40 text-start px-5 py-2 rounded-sm ${changePass ? 'text-black/15 cursor-not-allowed' : ''}`} onClick={() => setChangePass(true)}>Change Service Password</button>
                </div>
                {changePass && 
                    <form action="" method="post" className="absolute w-[50%] flex flex-col right-[20%] top-[60%] gap-6 px-10 py-5 bg-white rounded-md drop-shadow-md">
                        <button onClick={() => setChangePass(false)} className="flex self-end">cancel</button>
                        <div className="flex flex-col gap-5">
                            <input type="text" name="oldPassword" placeholder="Old Password" className="bg-neutral-200 focus:outline-none px-2 p-2 rounded-md" />
                            <input type="text" name="newPassword" placeholder="New Password" className="bg-neutral-200 focus:outline-none px-2 p-2 rounded-md"/>
                            <input type="text" name="cNewPassword" placeholder="Confirm New Password" className="bg-neutral-200 focus:outline-none px-2 p-2 rounded-md" />
                            <input type="submit" value='CONFIRM' className="md:px-10 w-[40%] md:py-2 sm:px-9 sm:py-2 px-20 py-3 mx-auto bg-custom-gradient text-white rounded-xl text-sm" />
                        </div>
                    </form>
                    
                }
            </div>
        </div>
    );
}
 
export default UsersProfile;