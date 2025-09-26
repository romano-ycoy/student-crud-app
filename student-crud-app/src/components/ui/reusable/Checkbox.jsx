const Checkbox = ({ id, checked, onChange, label, className = ""}) => {
    return (
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 border-gray-300 accent-red-500  cursor-pointer"
            />
            {label && (
                <label
                htmlFor={id}
                className="cursor-pointer ml-2 text-sm font-poppins">
                {label}
            </label>
            )}
        </div>
    );
};

export default Checkbox;