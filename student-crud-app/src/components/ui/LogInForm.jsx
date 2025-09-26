import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./reusable/Button";
import CheckBox from "./reusable/Checkbox";
import { Mail } from "lucide-react";
import InputField from "./reusable/InputField";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() && password.trim()) {
            navigate("/dashboard");
        } else {
            alert("Please fill in both email and password.");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-1 h-screen w-full bg-white p-[5%]"
        >

            <h1 className="text-3xl font-bold text-black font-poppins mb-7">Welcome back!</h1>

            {/* Email */}
            <InputField
                id="email"
                label="Email"
                type="email"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                Icon={Mail}
            />

            {/* Password */}
            <InputField
                id="password"
                label="Password"
                type="password"
                placeholder="•••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <CheckBox
                id="rememberMe"
                label="Remember Me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
            />


            <Button
                type="submit"
                className="text-white bg-red-500 px-5 py-2 w-full rounded-sm font-bold font-poppins tracking-normal cursor-pointer my-4"
            >
                Log In
            </Button>
        </form>
    );
};

export default LoginForm;