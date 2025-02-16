
import {Outlet} from 'react-router-dom'
import {Header} from "../Header.tsx";
import {Footer} from "../Footer.tsx";
import "../../App.css"
export default function  MainLayout (){

    return(
        <>
        {/* Main Layout */}
        <div className="h-screen flex flex-col p-4 overflow-hidden">
            {/* Header */}
            <div className="h-28 flex-none ">
                <Header/>
            </div>
            <div className="flex-grow">
                {/* show only if user is authenticated*/}
               <Outlet/>
            </div>
            <div className=" h-10">
                {/*Footer*/}
                <Footer/>
            </div>
        </div>
        </>
    )
}
