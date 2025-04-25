import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    return (
        <div className="flex bg-custom-gradient min-h-screen">
            <div className="lg:w-2/4 w-full bg-white flex flex-col items-center py-10 justify-center gap-12">
                <h1>Bargain</h1>
                <div className="flex flex-col gap-8 items-center lg:w-[80%] md:w-[70%] sm:w-[60%] w-[90%]">
                    <div className="text-center flex flex-col gap-1">
                        <h2 className="text-3xl font-bold">Create An Account</h2>
                        <p>Sign Up to enjoy your streaming services</p>
                    </div>
                    <form action="" method="post" onSubmit={e => handleSubmit(e)} className="flex flex-col gap-3 w-full">
                        <div className="flex gap-4 w-full">
                            <fieldset className="fieldset w-full">
                                <legend className="legend">First Name</legend>
                                <input type="text" placeholder="Enter First Name" className="input" />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <legend className="legend">Last Name</legend>
                                <input type="text" placeholder="Enter Last Name" className="input"/>
                            </fieldset>
                        </div>
                        <fieldset className="fieldset">
                            <legend className="legend">Username</legend>
                            <input type="text" placeholder="Enter Username" className="input"/>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="legend">Email</legend>
                            <input type="enail" placeholder="Enter Email" className="input"/>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="legend">Create Password</legend>
                            <input type="password" placeholder="Enter Password" className="input"/>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="legend">Confirm Password</legend>
                            <input type="password" placeholder="Enter Password" className="input" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="legend">Referral Code</legend>
                            <input type="number" placeholder="Enter Referral Code" className="input" />
                        </fieldset>
                        <div className="flex justify-between">
                            <label className="flex justify-center items-center gap-2 sm:text-sm text-xs">
                                <input type="checkbox" name="remember" />
                                Remember me
                            </label>
                            <Link className="sm:text-sm text-xs">Forgotten password?</Link>
                        </div>
                        <input type="submit" value='Sign Up' className=" mt-7 md:px-14 md:py-3 sm:px-9 sm:py-2 px-20 py-3 bg-custom-gradient text-white rounded-xl text-sm cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;