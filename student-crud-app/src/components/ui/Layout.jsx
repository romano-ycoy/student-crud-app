import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="flex w-screen h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Component */}
            <div className="px-5 flex flex-col flex-1 bg-gray-50">
                <Navbar />
                <main className="bg-gray-50 overflow-hidden">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;