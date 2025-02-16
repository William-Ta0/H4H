import { Outlet } from 'react-router-dom';
import { Header } from "../Header.tsx";
import { Footer } from "../Footer.tsx";
import "../../App.css";

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
