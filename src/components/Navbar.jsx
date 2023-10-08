import React from "react";
import Logo from "../assets/razer-logo.svg";
import { navLinks } from "../constants";
import SearchIcon from "../assets/search-icon.svg";
import ShoppingCart from "../assets/shopping-cart.svg";

const Navbar = () => {
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
                                        : "mr-[70px]"
                                }`}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-[45px]">
                    <img
                        src={SearchIcon}
                        alt="search-icon"
                        className="w-[32px] mt-[-2px] text-[rgb(136,136,136)] cursor-pointer hover:"
                    />
                    <img
                        src={ShoppingCart}
                        alt="cart"
                        width={20}
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
