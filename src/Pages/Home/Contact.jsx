import React from "react";
import { BiMailSend } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { GrSend } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router";

const Contact = () => {
    return (
        <div className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-10 lg:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="layout-content-container flex flex-col max-w-6xl flex-1">
                        <div className="w-full mx-auto overflow-hidden rounded-xl shadow-lg lg:grid lg:grid-cols-12">

                            {/* LEFT SIDE */}
                            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 col-span-12 lg:col-span-5 bg-white">
                                <div className="flex flex-col gap-6">
                                    <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900">
                                        Let’s  Bring  Your <span className="text-primary">Ideas</span> to  Life
                                    </p>

                                    <p className="text-base font-normal leading-normal text-gray-600">
                                        Have a project in mind, a question, or just want to connect?
                                        Drop me a message below or reach out via my socials.
                                    </p>
                                </div>

                                <div className="mt-12 space-y-6">

                                    {/* Email */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                                            <span className="material-symbols-outlined text-primary text-2xl"><MdOutlineAlternateEmail /></span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <a href="mailto:muhammad.almaruf@gmail.com" className="text-base font-medium text-gray-900 hover:text-primary">
                                                muhammad.almaruf@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Mobile */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                                            <span className="material-symbols-outlined text-primary text-2xl rotate-90"><FaPhone /></span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Mobile</p>
                                            <a href="tel:+8801813912607" className="text-base font-medium text-gray-900 hover:text-primary">
                                                +880 1813-912607
                                            </a>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                                            <span className="material-symbols-outlined text-primary text-2xl"><FaLocationDot /></span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Location</p>
                                            <p className="text-base font-medium text-gray-900">Narayanganj, Dhaka, Bangladesh</p>
                                        </div>
                                    </div>

                                </div>

                                {/* Social Icons */}
                                <div className="mt-12 flex gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-primary transition">
                                        <Link to={""} className="text-primary hover:text-white"><FaFacebook className="text-[40px]" /></Link>
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gray-200 hover:bg-primary transition">
                                        <Link to={""} className="text-primary hover:text-white"><FaLinkedin className="text-[40px]" /></Link>
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-primary transition">
                                        <Link to={""} className="text-primary hover:text-white"><FaGithub className="text-[40px]" /></Link>
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gray-200 hover:bg-primary transition">
                                        <Link to={""} className="text-primary hover:text-white"><FaSquareXTwitter className="text-[40px]" /></Link>
                                    </div>

                                </div>
                            </div>

                            {/* RIGHT SIDE FORM */}
                            <div className="col-span-12 lg:col-span-7 bg-background-light dark:bg-zinc-800 p-8 sm:p-12 lg:p-16">
                                <form className="space-y-6" method="POST">

                                    <h2 className="text-[25px] font-bold">Send Me a Message</h2>
                                    {/* Name + Email */}
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                                        <label className="flex flex-col flex-1">
                                            <p className="text-base font-medium pb-2 text-gray-900">Name</p>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="form-input w-full rounded-lg border border-gray-300 h-14 p-[15px]" />
                                        </label>

                                        <label className="flex flex-col flex-1">
                                            <p className="text-base font-medium pb-2 text-gray-900">Email</p>
                                            <input
                                                type="email"
                                                placeholder="Enter your email address"
                                                className="form-input w-full rounded-lg border border-gray-300 h-14 p-[15px]" />
                                        </label>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label className="flex flex-col">
                                            <p className="text-base font-medium pb-2 text-gray-900">Subject</p>
                                            <input
                                                type="text"
                                                placeholder="What is this about?"
                                                className="form-input w-full rounded-lg border border-gray-300 h-14 p-[15px]" />
                                        </label>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="flex flex-col">
                                            <p className="text-base font-medium pb-2 text-gray-900">Message</p>
                                            <textarea
                                                placeholder="Write your message here..."
                                                className="form-input w-full rounded-lg border border-gray-300 min-h-36 p-[15px]">
                                            </textarea>
                                        </label>
                                    </div>

                                    {/* Button */}
                                    <div>
                                        <button className="flex items-center w-full justify-center rounded-lg h-12 px-8 bg-primary text-white font-bold hover:bg-primary/90">
                                            Send Message <span className="pl-3"><FiSend /></span>
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
