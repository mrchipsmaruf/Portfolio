import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const root = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap.from("[data-wrap]", {
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            });

            gsap.from("[data-left]", {
                opacity: 0,
                x: -80,
                duration: 1.2,
                delay: 0.1,
                ease: "power4.out",
            });

            gsap.from("[data-right]", {
                opacity: 0,
                x: 80,
                duration: 1.2,
                delay: 0.2,
                ease: "power4.out",
            });

            gsap.from("[data-social]", {
                opacity: 0,
                y: 25,
                duration: 1,
                delay: 0.4,
                stagger: 0.12,
                ease: "power3.out",
            });

        }, root);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        await fetch("https://formspree.io/f/meoyznzq", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        setSuccess(true);
        form.reset();
        setTimeout(() => setSuccess(false), 5000);
    };

    return (
        <div ref={root} data-wrap className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-10 lg:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="layout-content-container flex flex-col max-w-6xl flex-1">
                        <div className="w-full mx-auto overflow-hidden rounded-xl shadow-lg lg:grid lg:grid-cols-12">

                            {/* LEFT SIDE */}
                            <div
                                className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 col-span-12 lg:col-span-5 bg-white"
                                data-left>
                                <div className="flex flex-col gap-6">
                                    <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900">
                                        Let’s Bring Your <span className="text-primary">Ideas</span> to Life
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
                                            <MdOutlineAlternateEmail className="text-primary text-2xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <a href="mailto:muhammad.almaruf001@gmail.com" className="text-[15px] font-medium text-gray-900 hover:text-primary">
                                                muhammad.almaruf001@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Mobile */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                                            <FaPhone className="text-primary text-2xl rotate-90" />
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
                                            <FaLocationDot className="text-primary text-2xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Location</p>
                                            <p className="text-base font-medium text-gray-900">Narayanganj, Dhaka, Bangladesh</p>
                                        </div>
                                    </div>

                                </div>

                                {/* Social Icons */}
                                <div className="mt-12 flex gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-primary transition" data-social>
                                        <Link to={"https://www.facebook.com/share/16tDHZTSXZ/"} className="text-primary hover:text-white">
                                            <FaFacebook className="text-[40px]" />
                                        </Link>
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gray-200 hover:bg-primary transition" data-social>
                                        <Link to={"https://www.linkedin.com/in/mrchipsmaruf/"} className="text-primary hover:text-white">
                                            <FaLinkedin className="text-[40px]" />
                                        </Link>
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-primary transition" data-social>
                                        <Link to={"https://github.com/mrchipsmaruf"} className="text-primary hover:text-white">
                                            <FaGithub className="text-[40px]" />
                                        </Link>
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gray-200 hover:bg-primary transition" data-social>
                                        <Link to={"https://x.com/mrchips_maruf"} className="text-primary hover:text-white">
                                            <FaSquareXTwitter className="text-[40px]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT SIDE FORM */}
                            <div
                                className="col-span-12 lg:col-span-7 bg-background-light dark:bg-zinc-800 p-8 sm:p-12 lg:p-16"
                                data-right
                            >
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <h2 className="text-[25px] font-bold">Send Me a Message</h2>

                                    {/* Name + Email */}
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                                        <label className="flex flex-col flex-1">
                                            <p className="text-base font-medium pb-2 text-gray-900">Name</p>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                className="form-input w-full rounded-lg border border-gray-300 h-14 p-[15px]"
                                            />
                                        </label>

                                        <label className="flex flex-col flex-1">
                                            <p className="text-base font-medium pb-2 text-gray-900">Email</p>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email address"
                                                className="form-input w-full rounded-lg border border-gray-300 h-14 p-[15px]"
                                            />
                                        </label>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label className="flex flex-col">
                                            <p className="text-base font-medium pb-2 text-gray-900">Subject</p>
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="What is this about?"
                                                className="form-input w-full rounded-lg border border-gray-300 h-14 p-[15px]"
                                            />
                                        </label>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="flex flex-col">
                                            <p className="text-base font-medium pb-2 text-gray-900">Message</p>
                                            <textarea
                                                name="message"
                                                placeholder="Write your message here..."
                                                className="form-input w-full rounded-lg border border-gray-300 min-h-36 p-[15px]"
                                            ></textarea>
                                        </label>
                                    </div>

                                    {/* SUCCESS MESSAGE */}
                                    {success && (
                                        <p className="text-green-600 font-semibold">
                                            Your message sent successfully!
                                        </p>
                                    )}

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
