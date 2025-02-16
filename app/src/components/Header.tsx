import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput/SearchInput.tsx";
import { Button } from "./Button.tsx";

interface HeaderProps {
    children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <div className="h-full flex flex-col justify-center items-center bg-[#b30638] text-white">
            <div className="flex flex-row justify-between items-center w-full p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/">Bucky's Campus Closet</Link>
                </div>

                {/* Navigation Menu */}
                <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/about" className="hover:text-gray-400">About Us</Link>
                    <Link to="/services" className="hover:text-gray-400">Services</Link>
                    <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                </nav>

                {/* Search Input */}
                <div className="hidden md:flex">
                    <SearchInput />
                </div>

                {/* User Account Links */}
                <div className="flex space-x-4">
                    <Button title="Login" to="/login" />
                    <Button title="Sign Up" to="/signup.html" />
                </div>
            </div>
        </div>
    );
};
