import  React from "react";
import {Button} from "./Button.tsx";
import SearchInput from "./SearchInput/SearchInput.tsx";

interface HeaderProps {
    children?: React.ReactNode
}


export const Header: React.FC<HeaderProps> = ({children}) => {

    return (
        <div className="h-full flex flex-col justify-center iterms-center  ">
            <div className = "flex flex-row justify-between items-center ">
                <div className="h-full flex flex-row justify-around items-center space-x-8  mx-4 " >
                    <div>Placeholder </div>
                    <div>Placeholder</div>
                </div>

                    <div className=" h-full  flex flex-grow justify-center items-center hidden md:flex">
                        <SearchInput/>
                    </div>
                <div className="h-full hidden sm:flex flex-row justify-between items-center  space-x-8 mx-4" >
                        <div> place holder</div>
                        <div> place holder</div>
                </div>
                <div className='h-full flex flex-row justify-center items-center space-x-8 mx-4'>
                    <Button title={"login"} to={""}/>
                </div>

            </div>

        </div>
    )
}
