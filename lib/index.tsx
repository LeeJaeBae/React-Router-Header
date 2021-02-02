import Routes from "./Routes";
import {createContext, useContext} from "react";

const RouteContext = createContext(Routes);

export const useRouter = () => {
    return useContext(RouteContext);
}

export default Routes;