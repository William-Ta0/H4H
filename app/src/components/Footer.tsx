import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#b30638] text-white py-4 min-h-[100px] w-full">
            <div className="px-6">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-2 md:mb-0">
                        <h2 className="text-xl font-bold">About Us</h2>
                        <p className="text-sm">
                        We are dedicated to maintaining sustainability within our campus and environment! For more information, please contact us via email or phone
                        </p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <h2 className="text-xl font-bold">Contact Us</h2>
                        <p className="text-sm">Email: bucky@scu.edu</p>
                        <p className="text-sm">Phone: (123) 456-7890</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-gray-200" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-gray-200" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-gray-200" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-gray-200" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} H4H Bucky. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
