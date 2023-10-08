import React, { useState } from "react";
import Logo from "../assets/razer-logo.svg";
import { navLinks } from "../constants";
import SearchIcon from "../assets/search-icon.svg";
import ShoppingCart from "../assets/shopping-cart.svg";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const searchIconStyle = {
        width: "32px",
        marginTop: "-3px",
        cursor: "pointer",
        filter: isHovered ? "brightness(0) invert(1)" : "none",
    };
    const shoppingCartStyle = {
        cursor: "pointer",
        filter: isHovered2 ? "brightness(0) invert(1)" : "none",
    };

    return (
        <nav>
            <div className="bg-black h-[60px] flex items-center justify-center">
                <a href="#home">
                    <img src={Logo} alt="razer-logo" width={35} height={35} />
                </a>
                <div className="mr-[50px]">
                    <ul className="flex pl-[90px]">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`text-[rgb(136,136,136)] text-[15px] font-['razer-light'] hover:text-white ${
                                    index === navLinks.length - 1
                                        ? "mr-0"
                                        : "mr-[50px]"
                                }`}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-[45px]">
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img
                            src={SearchIcon}
                            alt="search-icon"
                            width={32}
                            style={searchIconStyle}
                        />
                    </div>
                    <div
                        className="flex"
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    >
                        <img
                            src={ShoppingCart}
                            alt="cart"
                            width={24}
                            className="cursor-pointer"
                            style={shoppingCartStyle}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
