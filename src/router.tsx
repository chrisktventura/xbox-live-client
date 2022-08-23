import Home from "pages/Home";
import Login from "pages/Login";
import Profiles from "pages/Profiles";
import Register from "pages/Register";
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<Login />} />
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.REGISTER} element={<Register />} />
            <Route path={RoutePath.PROFILE} element={<Profiles />} />
        </Routes>
    );
}

export default Router