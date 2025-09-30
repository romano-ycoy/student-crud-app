import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Button from "./Button";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-500 flex justify-center items-center z-50 border-8 border-sky-600">
            {/*Modal Box */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 relative">
                {/*Close Button */}
                <Button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <X />
                </Button>

                {/*Modal Content */}
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;