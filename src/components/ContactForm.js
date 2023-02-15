import "../components/ContactFormStyle.css";
import Image from "next/image";
import ContactUSImage from "../components/assests/ContactUsImage.png";
const ContactForm = () => {
    return (
        <>
            <div className="section">
                <div className="left-column">
                    <Image className="contact-image" src={ContactUSImage} alt='ContactUS' />
                </div>
                <div className="right-column">
                    <h3>Get In <span>Touch</span></h3>
                    <p className="">We are here for you , we are your extended team member. </p>
                    <form className=" mx-auto flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="hidden">
                                Full Name
                            </label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="email" className="hidden">
                                company
                            </label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Enter your company name"
                                className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="hidden">
                                tel
                            </label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="Enter your phone number"
                                className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="hidden">
                                Number
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email address"
                                className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="hidden">
                                messege
                            </label>
                            <textarea
                                type="text"
                                name="text"
                                id="text"
                                placeholder="Enter your messege"
                                className="w-full h-32 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="md:w-full bg-gray-800 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                        >
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </>
    );
};

export default ContactForm;
