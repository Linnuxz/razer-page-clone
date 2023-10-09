import React from "react";
import { footerLinks, socialMedia, copyrightLinks } from "../constants";

const Footer = () => {
    return (
        // md:w-full 2xl:w-[1725px]
        <div className="text-white flex justify-center bg-[#111111] pb-11 pt-[20px]">
            <div>
                <div className="flex gap-[100px]">
                    <div className="flex gap-[60px]">
                        {footerLinks.map((footerLink) => (
                            <div className="flex flex-col gap-3">
                                <h4 className="text-[10px] cursor-default">
                                    {footerLink.title}
                                </h4>
                                <ul className="flex flex-col gap-3">
                                    {footerLink.links.map((link) => (
                                        <li>
                                            <a
                                                href={link.link}
                                                className="hover:underline"
                                            >
                                                <p className="text-[#999999] text-[10px] hover:text-white">
                                                    {link.name}
                                                </p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div>
                        {socialMedia.map((media) => (
                            <div className="flex flex-col gap-1">
                                <h4 className="text-[11px]">{media.title}</h4>
                                {media.links.map((link) => (
                                    <a target="#" href={link.link}>
                                        <img
                                            className="w-[1.5rem] h-[1.5rem] ml-[-1px]"
                                            src={link.icon}
                                            alt={link.id}
                                        />
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="pl-[80px]">
                        <h2 className="text-[#44d62c] text-[12px]">
                            FOR GAMERS. BY GAMERS.&#8482;
                        </h2>
                    </div>
                </div>
                <div className="flex justify-between gap-10 border-t-[1px] pt-3 mt-[40px] border-[#555555] text-[11px] text-[rgb(153,153,153)]">
                    <div className="flex gap-6">
                        <div>
                            <p>
                                Copyright © 2023 Razer Inc. All rights reserved.
                            </p>
                        </div>
                        <div className="flex gap-1">
                            {copyrightLinks.map((link, index) => (
                                <a key={link.id} href={link.link}>
                                    <p>
                                        <span className="hover:underline hover:text-white">
                                            {link.title}
                                        </span>
                                        <span
                                            className={`mx-2 ${
                                                index ===
                                                copyrightLinks.length - 1
                                                    ? "hidden"
                                                    : ""
                                            }`}
                                        >
                                            |
                                        </span>
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p>
                            <span className="text-white">United States | </span>
                            <span className="hover:text-white hover:underline">
                                {" "}
                                <a href="https://www.razer.com/choose-location">
                                    Change Location &gt;
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
