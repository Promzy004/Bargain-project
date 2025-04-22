const Newsletter = () => {
    return (
        <>
            <div className="flex md:flex-row flex-col md:justify-between gap-5 items-center">
                <div className="w-full flex flex-col gap-1">
                    <h3 className="md:text-2xl text-xl">Join our newsletter</h3>
                    <p className="text-sm text-custompurple1/50">We'll send you anice letter once per week. No spam</p>
                </div>
                <form action="" method="post" className="w-full flex gap-2">
                    <input type="email" placeholder="Enter your email" className="w-[75%] focus:outline-none duration-300 shadow-neutral-400 shadow-sm rounded-lg px-3 py-2 bg-custompurple3/5"/>
                    <input type="submit" value='Subscribe' name="subscribe" className="md:w-[30%] w-[35%] py-1 bg-customPrimary hover:bg-customPrimary/80 duration-500 sm:text-base text-sm cursor-pointer text-white rounded-lg" />
                </form>
            </div>
        </>
    );
}
 
export default Newsletter;