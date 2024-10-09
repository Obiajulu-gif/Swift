"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "A marketplace tailored for developers, discover the best tools, pay seamlessly, and get back to building faster.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(interval); // Stop the interval once the text is fully typed
            }
        }, 50); // Adjust typing speed by changing the interval (ms)
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <>
            {/* Hero Section with Gradient */}
            <section className="relative flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-b from-black via-[#6B250E] via-[#FF5722] to-[#FFB299] bg-bottom bg-ellipse">
                {/* Hero Content */}
                <div className="flex flex-col items-center text-center z-10 mt-4">
                    <h1 className="text-5xl font-extrabold leading-tight mb-4">
                        Build Faster with <br /> Sui Blockchain Tools.
                    </h1>
                    <p className="text-xl mb-8">{text}</p> {/* Typewriter effect applied here */}
                    <Link href="/development">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg">
                            Explore Swift Dev Tools
                        </button>
                    </Link>
                </div>
                {/* Left Icon */}
                <div className="hidden md:block absolute left-40 top-1/2 animate-bounce transform -translate-y-1/2 z-10">
                    <Image
                        src="/images/GITHUB.png" // Update with the actual image path
                        alt="Left Icon"
                        width={200}
                        height={200}
                    />
                </div>
                {/* Right Icon */}
                <div className="hidden md:block absolute right-40 top-1/2 animate-bounce transform -translate-y-1/2 z-10">
                    <Image
                        src="/images/JAVASCRIPT.png" // Update with the actual image path
                        alt="Right Icon"
                        width={200}
                        height={200}
                    />
                </div>
            </section>

            {/* Dashboard Section */}
            <section className="relative -mt-40 z-20">
                <div className="max-w-screen-lg w-full mx-auto">
                    <Image
                        src="/images/Dashboard.png"
                        alt="Dashboard"
                        layout="responsive"
                        width={1200}
                        height={740}
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;
