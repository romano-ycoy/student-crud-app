import { Link } from "react-router-dom"
import { LayoutDashboard, UserPlus, Moon } from "lucide-react";

const Sidebar = () => {
    return (
        <aside className="flex flex-col gap-10 w-60 h-screen bg-gray-900 text-white p-4">
            <h2 className="text-lg font-bold mb-6">Student CRUD</h2>
            <nav className="flex flex-col gap-3 flex-1">

                <Link
                    to="/dashboard"
                    className="flex items-center gap-2 px-2 py-3 rounded-xl font-light text-gray-400 hover:bg-gray-700 hover:text-white hover:font-normal active:opacity-50"
                >
                    <LayoutDashboard />
                    Dashboard
                </Link>

                <Link
                    to="/registration"
                    className="flex items-center gap-2 px-2 py-3 rounded-xl font-light text-gray-400 hover:bg-gray-700 hover:text-white hover:font-normal active:opacity-50"
                >
                    <UserPlus />
                    Registration
                </Link>

                <div className="flex items-center gap-2 px-2 py-3 rounded-xl font-light text-gray-400 hover:bg-gray-700 hover:text-white hover:font-normal active:opacity-50 mt-auto cursor-pointer">
                    <Moon /> Dark Mode
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;