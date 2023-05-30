import { useContext } from "react";
import { LoaderContext } from "../context/Loader";

export const useLoader = () => useContext(LoaderContext);