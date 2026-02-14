"use client";

import React from "react";
import { motion } from "framer-motion";

const navItems = [
    "About Us",
    "Directory",
    "RTI Info",
    "Employee Zone",
    "General Info",
    "More",
];

export default function Navbar() {
    return (
        <nav className="fixed top-8 left-0 w-full px-10 z-50 flex justify-between items-center text-white">
            <div className="flex gap-8 items-center">
                {navItems.map((item, index) => (
                    <NavItem key={index} text={item} />
                ))}
            </div>

            <div className="flex gap-6 font-medium text-sm tracking-wide">
                <span>info@ksrtc.in</span>
                <span>+91 999 999 9999</span>
            </div>
        </nav>
    );
}

const NavItem = ({ text }: { text: string }) => {
    return (
        <motion.div
            className="relative cursor-pointer overflow-hidden font-medium text-sm tracking-wide"
            initial="initial"
            whileHover="hovered"
        >
            <div className="flex">
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            initial: { y: 0 },
                            hovered: {
                                y: [0, -3, 0],
                                transition: {
                                    duration: 0.3,
                                    ease: "easeInOut",
                                    delay: i * 0.03, // Stagger effect
                                },
                            },
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};
