import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} />
        </Routes>
    );
}

export default Router