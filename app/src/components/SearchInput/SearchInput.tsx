import {useToolTip} from "../../hooks/useToolTip.tsx";
import React, {useState} from "react";
import {ToolTip} from "../ToolTip.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


export default function SearchInput() {

    const { showTooltip, tooltipPosition, toolTipText } = useToolTip();
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
        <div className=" h-full w-[70%] rounded-full  border ">
            <div className=" h-full  w-[3.5rem]  flex justify-center items-center rounded-l-full border-r ">
                <FontAwesomeIcon icon={faSearch} size="lg" />
            </div>
            <ToolTip
                visible={showTooltip}
                text={toolTipText}
                position={tooltipPosition}
            />
        </div>
    )

}
