import { Menu, UserCircle } from "lucide-react";
import Button from "./reusable/Button";

const Navbar = () => {
    return (
        <header className="my-5 flex justify-between items-center py-5 px-6 bg-gray-900 shadow-lg rounded-lg">
           <Button className="cursor-pointer">
            <Menu className="h-6 w-6 text-white"/>
           </Button>

           <Button className="cursor-pointer">
            <UserCircle className="h-6 w-6 text-white"/>
           </Button>
        </header>
    );
};

export default Navbar;