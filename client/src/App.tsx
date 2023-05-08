import { Routes, Route } from "react-router-dom";

import { BaseContainer } from "./components/base/BaseContainer";
import { SignUp } from "./components/base/SignUp";
import { SignIn } from "./components/base/SignIn";

import { PersistRoute } from "./components/routes/PersistRoute";
import { PrivateRoute } from "./components/routes/PrivateRoute";

export const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/page/*" element={<div>schedule page</div>} />

            {/** @desc Private routes */}
            {/*<Route element={<PersistRoute />}>*/}
            {/*    <Route element={<PrivateRoute />}>*/}
                    <Route path="/*" element={<BaseContainer />}/>
            {/*    </Route>*/}
            {/*</Route>*/}
        </Routes>
    )
}