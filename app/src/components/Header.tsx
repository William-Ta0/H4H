import  React from "react";
import SearchBar from './searchBar'
import Menu  from './menuButton';

interface HeaderProps {
    children?: React.ReactNode
}


export const Header: React.FC<HeaderProps> = ({children}) => {

    return (
        <div>skeleton Header

        {/*<SearchBar/>
        <Menu/> */}

        </div>
    )
}
