import { Routes, Route } from "react-router-dom";

import { BaseContainer } from "./components/base/BaseContainer";

export const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/*" element={<BaseContainer />}/>
        </Routes>
    )
}