import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="flex w-screen h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Component */}
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="p-4 bg-gray-50 flex-1 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;