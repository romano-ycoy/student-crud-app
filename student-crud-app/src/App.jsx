import { Routes, Route } from "react-router-dom";
import Layout from "./components/ui/Layout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/Registration";


const App = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<LoginPage />} />

      {/*Protected routes (with Layout) */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    </Routes>
  );
};

export default App;

<<<<<<< HEAD
// Trying git!
// It's fun!!
=======
// Trying git!
>>>>>>> 73c116cb46e8d948b1ed89d0850adf12f4f086ab
