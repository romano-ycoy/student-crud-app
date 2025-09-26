import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({
    id,
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    Icon = null,
    required = true,
    className = "",
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
        <div className="flex flex-col relative">
            {label && (
                <label htmlFor={id} className="mb-1 font-poppins">{label}</label>
            )}

            {/*(optional, not for password field)*/}
            {Icon && type !== "password" && (<Icon className="absolute right-3 top-10 text-gray-300 w-5 h-5" />)}

            {/*Password toggle button*/}
            {type === "password" && (
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-10 text-gray-300 hover:text-gray-500 cursor-pointer"
                >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            )}

            <input
                id={id}
                className={`border border-gray-300 rounded-sm focus:ring-2 focus:ring focus:ring-red-500 focus:outline-none h-10 px-3 mb-4 placeholder-gray-400 placeholder:font-poppins${className}`}
                type={inputType}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required} />
        </div>
    );
};

export default InputField;