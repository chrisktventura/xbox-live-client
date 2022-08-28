import Home from "pages/Home";
import Login from "pages/Login";
import Profiles from "pages/Profiles";
import Register from "pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import { useAuth } from "context/auth";

const Router = () => {
    const { logged } = useAuth();
    return (
        <Routes>
            {logged ? (
                <>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.REGISTER} element={<Register />} />
            <Route path={RoutePath.PROFILE} element={<Profiles />} />
            {/* <Route path={RoutePath.SETTINGSGAMES} element={<SettingsGames />} />
            <Route path={RoutePath.SETTINGSPROFILE} element={<SettingsProfile />} />
            <Route path={RoutePath.SETTINGSUSER} element={<SettingsUser />} /> */}
            </>
            ) : ( 
            <Route path={RoutePath.LOGIN} element={<Login />} />
            )}
            <Route
        path="*"
        element={<Navigate to={logged ? "/homepage" : "/"} replace />}
      />
        </Routes>
    );
}

export default Router