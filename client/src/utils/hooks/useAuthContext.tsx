import { useContext } from "react";

import { AuthContext } from "../context/Auth";

export const useAuthContext = () => useContext(AuthContext);