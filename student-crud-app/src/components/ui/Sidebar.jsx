import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <aside className="w-60 bg-gray-800 text-white p-4">
            <h2 className="text-lg font-bold mb-6">Student CRUD</h2>
            <nav className="flex flex-col gap-3">
                <Link to="/dashboard" className="hover:bg-gray-700 px-2 py-1 rounded">Dashboard</Link>
                <Link to="/registration" className="hover:bg-gray-700 px-2 py-1 rounded">Registration</Link>
            </nav>
        </aside>
    );
};

export default Sidebar;