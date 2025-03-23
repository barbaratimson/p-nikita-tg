import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {User} from "./pages/User/User";
import {Invite} from "./pages/Invite/Invite";
import {Register} from "./pages/Register/Register";
import {Login} from "./pages/Login/Login";
import {ResetPass} from "./pages/ResetPass/ResetPass";
import {Stats} from "./pages/Stats/Stats";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/stats" element={<Stats/>}></Route>
            <Route path="/auth/login" element={<Login/>}></Route>
            <Route path="/auth/register" element={<Register/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/user/invite" element={<Invite/>}></Route>
            <Route path="/user/resetPassword" element={<ResetPass/>}></Route>
        </Routes>
    );
};