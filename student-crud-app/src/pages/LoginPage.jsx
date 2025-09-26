import LoginForm from "../components/ui/LogInForm";
import loginImg from "../assets/images/student-at-library.jpg"

const LoginPage = () => {

    return (
        <div className="h-screen flex flex-col md:flex-row w-screen">
            {/*Left Side - Image */}
            <div className="w-screen h-screen">
                <img
                    src={loginImg}
                    alt="student at the library"
                    className="w-screen h-full object-cover"
                />
            </div>

            {/*Right Side - Form */}
            <LoginForm />
        </div>
    );
};

export default LoginPage;
