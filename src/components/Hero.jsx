import React from "react";
import { threeDivs } from "../constants";

const Hero = () => {
    return (
        <div className="border-t-[2px] border-green-500 ">
            <div className="bg-[#555] text-white flex justify-center items-center text-[12px] h-[43px]">
                <h2 className="text-center mx-7">
                    Join RazerStore Rewards to unlock bonus Razer Silver,
                    reduced minimum spend for free shipping, exclusive perks and
                    more. <span>Join Now &gt;</span>
                </h2>
            </div>
            {/* bg-[rgba(34,34,34,255)] */}
            <div className="w-full flex justify-center items-center flex-col bg-black font-['storia-medium']">
                {threeDivs.map((div, index) => (
                    <div
                        key={div.id}
                        className="w-[1725px] h-[700px] pt-[60px] text-white bg-cover bg-center flex flex-col items-center border-b-[9px] border-[rgba(34,34,34,255)]"
                        style={{
                            backgroundImage: `url(${div.backgroundUrl})`,
                        }}
                    >
                        <div className={`bg-[rgba(255,156,6,255)] text-black flex flex-col font-['storia-bold'] ${div.id === 1 ? 'block' : 'hidden'}`}>
                            <p className="text-[10px]">RAZER.COM</p>
                            <p>EXCLUSIVE</p>
                        </div>
                        <h2 className="text-[50px] font-['storia-bold']">
                            {div.h2}
                        </h2>
                        <p className="text-[25px] font-['storiar']">{div.p}</p>
                        <div className="flex gap-7 text-[19px] font-['razer-light']">
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
    );
};

export default Hero;
