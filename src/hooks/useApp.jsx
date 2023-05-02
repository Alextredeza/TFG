import { useContext } from "react";
import { AppContext } from "../context/App";

export const useApp = () => {
    const context = useContext(AppContext);
    return context;
};