import {useToolTip} from "../../hooks/useToolTip.ts";
import React, {useState} from "react";
import {ToolTip} from "../ToolTip.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";


export default function SearchInput() {

    const { showTooltip, tooltipPosition, toolTipText, mouseEnter,mouseLeave } = useToolTip();
    const [userInput, setUserInput] = useState<string|null>(null);

    const handleUserInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = event.currentTarget.value;
        setUserInput(value);
    };

    const clearUserInput = () => {
        setUserInput('');
    };


    return (
        <div className=" h-12 min-w-[12rem] w-[70%] flex flex-row rounded-full  border "
             onMouseEnter={(e)=> mouseEnter(e,"Search what we are looking for?")}
             onMouseLeave={mouseLeave}
        >
            <div className=" min-w-[3.5rem]  flex justify-center items-center rounded-l-full border-r ">
                <FontAwesomeIcon icon={faSearch} size="lg" />
            </div>

            {/* Input Field */}
            <input
                type="text"
                value={userInput || ""}
                onChange={handleUserInputChange}
                placeholder="Search..."
                className=" w-full flex justify-start items-center px-3 py-2 focus:outline-none bg-transparent"
            />

            {/* Clear Icon (conditionally render) */}
            {userInput && userInput.length > 0 && (
                <div
                    className="p-2 flex justify-center items-center cursor-pointer rounded-r-full"
                    onClick={clearUserInput}
                >
                    <FontAwesomeIcon icon={faTimes} size="lg" className="text-gray-500" />
                </div>
            )}


            <ToolTip
                visible={showTooltip}
                text={toolTipText}
                position={tooltipPosition}
            />
        </div>
    )

}
