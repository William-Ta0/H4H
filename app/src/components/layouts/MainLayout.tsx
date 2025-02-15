
import {Outlet} from 'react-router-dom'
import {Header} from "../Header.tsx";
import {Footer} from "../Footer.tsx";
export default function  MainLayout (){

    return(
        <div>
            {/* Header */}
            <Header/>
            <div>
                {/* show only if user is authenticated*/}
                <Outlet/>
            </div>
            {/*Footer*/}
            <Footer/>
        </div>
    )
}
