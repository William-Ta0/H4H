import React from "react";
import {Link} from "react-router-dom";

interface ButtonProps {
    title: string;
    to: string
}


export const Button: React.FC<ButtonProps> = ({ title="default", to}) => {

    return(
        <Link to ={to} className=" h-8 w-24 rounded-full flex justify-center items-center  bg-red-400">
            <h1 className="text-white text-md font-bold capitalize">{title}</h1>
        </Link>
    )

}

