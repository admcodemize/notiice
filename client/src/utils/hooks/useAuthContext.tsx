import { useContext } from "react";

import { AuthContext } from "../../utils/context/Auth";

export const useAuthContext = () => useContext(AuthContext);