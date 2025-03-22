const Form = () => {

    return (
        <div className="md:w-4/6 w-[95%]">
            <form action="" method="POST" className="w-full flex flex-col gap-3 items-center">
                <div className="flex flex-col gap-8 w-full">
                    <input type="text" name="fullname" placeholder="Full Name" className="contact-input" />
                    <input type="email" name="email" placeholder="Email" className="contact-input" />
                    <input type="tel" name="phone" placeholder="Phone Number" className="contact-input" />
                    <textarea name="message" cols="" rows="" placeholder="Message" className="contact-input bg-custompurple3/5 px-2 py-" ></textarea>
                </div>
                <div className="flex gap-2 w-full" >
                    <input type="checkbox" name="check" className="" id='agree' />
                    <label htmlFor="agree" className="text-customgray3 text-sm"> You agree to our friendly privacy policy </label>
                </div>
                <input type="submit" value='Send Message' name="submit" className="w-2/4 py-2 bg-customPrimary hover:bg-customPrimary/80 duration-500 text-lg text-white rounded-lg mt-7"/>
            </form>
        </div>
    );
}
 
export default Form;