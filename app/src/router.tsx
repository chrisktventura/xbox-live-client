import Home from "pages/Home";
import Login from "pages/Login";
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.LOGIN} element={<Login />} />
            {/* <Route path={RoutePath.HOMEPAGE} element={<Homepage />} /> */}
            <Route path={RoutePath.REGISTER} />
        </Routes>
    );
}

export default Router