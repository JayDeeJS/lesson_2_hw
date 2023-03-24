import { Route, Routes } from "react-router-dom";
import LayoutNavBar from "../components/hoc/LayoutNavBar";
import LayoutButton from "../components/hoc/LayoutButton";
import { routesLayout, routesDefault } from "./RouteConfig";

const AppRouter = () => {
    return (
        <Routes>

            <Route path="/" element={<LayoutNavBar/>}>
                {routesLayout.map(( {id, path, element} ) =>
                    <Route key={id} path={path} element={element}/>
                )}
            </Route>

            <Route path="/" element={<LayoutButton/>}>
                {routesDefault.map(( {id, path, element} ) =>
                    <Route key={id} path={path} element={element}/>
                )}
            </Route>

        </Routes>
    )
};

export default AppRouter;