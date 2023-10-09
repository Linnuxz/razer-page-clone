import React from "react";
import { threeDivs, smallDivs } from "../constants";

const Hero = () => {
    return (
        <div className="mt-[55px]">
            <div className="bg-[#555] text-white flex justify-center items-center text-[12px] h-[43px]">
                <h2 className="text-center mx-7">
                    Join RazerStore Rewards to unlock bonus Razer Silver,
                    reduced minimum spend for free shipping, exclusive perks and
                    more. <span>Join Now &gt;</span>
                </h2>
            </div>
            {/* bg-[rgba(34,34,34,255)] */}
            <div className="w-full flex justify-center items-center flex-col bg-black font-['storia-medium']">
                {threeDivs.map((div) => (
                    <div
                        key={div.id}
                        className="w-[1725px] h-[700px] pt-[60px] text-white bg-cover bg-center flex flex-col items-center border-b-[9px] border-[rgba(34,34,34,255)]"
                        style={{
                            backgroundImage: `url(${div.backgroundUrl})`,
                        }}
                    >
                        <div
                            className={`bg-[rgba(255,156,6,255)] px-3 py-[1px] pt-[4px] text-black flex flex-col font-['storia-bold'] ${
                                div.id === 2 ? "block mt-[-40px]" : "hidden"
                            }`}
                        >
                            <p className="text-[10px]">RAZER.COM</p>
                            <p className="mt-[-7px] text-[13px]">EXCLUSIVE</p>
                        </div>
                        <h2 className="text-[50px] font-['storia-bold']">
                            {div.h2}
                        </h2>
                        <p className="text-[25px] font-['storiar']">{div.p}</p>
                        <div className="font-['razer-light'] text-[19px] mt-[-2px]">
                            <div
                                className={`flex gap-7 ${
                                    div.id === 1 ? "hidden" : ""
                                }`}
                            >
                                <div>
                                    <a href="#" className="hover:underline">
                                        Learn More
                                    </a>
                                    <span className="text-[rgb(68,214,44)]">
                                        {" "}
                                        &gt;
                                    </span>
                                </div>
                                <div>
                                    <a href="#" className="hover:underline">
                                        Buy
                                    </a>
                                    <span className="text-[rgb(68,214,44)]">
                                        {" "}
                                        &gt;
                                    </span>
                                </div>
                            </div>
                            <div className={`${div.id === 1 ? "" : "hidden"}`}>
                                <div>
                                    <a href="#" className="hover:underline">
                                        Shop Now
                                    </a>
                                    <span className="text-[rgb(68,214,44)]">
                                        {" "}
                                        &gt;
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-black">
                <div className="md:w-full 2xl:w-[1725px] bg-black mx-auto">
                    <div className="grid grid-cols-2 mx-auto">
                        {smallDivs.map((div, index) => (
                            <div
                                key={div.id}
                                className={`h-[500px] pt-[60px] text-white bg-cover bg-center flex flex-col items-center border-b-[9px] border-[rgba(34,34,34,255)] ${
                                    div.id % 2 === 0 ? "border-l-[9px]" : ""
                                } bg-center bg-no-repeat`}
                                style={{
                                    backgroundImage: `url(${div.backgroundUrl})`,
                                }}
                            >
                                <div
                                    className={`bg-[rgba(255,156,6,255)] px-3 py-[1px] pt-[4px] text-black flex flex-col font-['storia-bold'] ${
                                        div.id === 2
                                            ? "block mt-[-40px]"
                                            : "hidden"
                                    }`}
                                >
                                    <p className="text-[10px]">RAZER.COM</p>
                                    <p className="mt-[-7px] text-[13px]">
                                        EXCLUSIVE
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-[35px] font-['storia-bold']">
                                        {div.h2}
                                    </h2>
                                    <p className="text-[18px] font-['storiar']">
                                        {div.p}
                                    </p>
                                </div>
                                <div className="flex gap-7 text-[16px] font-['razer-light']">
                                    <div>
                                        <a href="#" className="hover:underline">
                                            Learn More
                                        </a>
                                        <span className="text-[rgb(68,214,44)]">
                                            {" "}
                                            &gt;
                                        </span>
                                    </div>
                                    <div>
                                        <a href="#" className="hover:underline">
                                            Buy
                                        </a>
                                        <span className="text-[rgb(68,214,44)]">
                                            {" "}
                                            &gt;
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
