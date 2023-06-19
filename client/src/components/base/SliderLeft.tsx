import { Route, Routes } from "react-router-dom";

import { StyledSliderLeft } from "../../assets/styles/components/base/SliderLeft.styles";

import { RoleBasedRoute } from "../routes/RoleBasedRoute";

import { Landing } from "./Landing";

import { Dashboard } from "../sliderLeft/Dashboard";
import { Workflow } from "../sliderLeft/Workflow";
import { WorkSchedule } from "../sliderLeft/WorkSchedule";
import { SchedulePages } from "../sliderLeft/SchedulePages";
import { Integrations } from "../sliderLeft/Integrations";

import { RoleProps, RouteProps } from "../../assets/constants/Properties";

import { useGlobalContext } from "../../utils/hooks/useContext";

export const SliderLeft = (): JSX.Element => {
    /** @desc Destructuring global context which handles show/hide of slider left -> ../context/Global.tsx **/
    const { sliderLeft, toggleSliderLeft } = useGlobalContext();

    return (
        <StyledSliderLeft sliderLeft={sliderLeft}>
            <Routes>
                <Route path="/" element={<Landing />}>
                    <Route element={<RoleBasedRoute allowedRoles={RoleProps().FREE} />} >
                        <Route path={`${RouteProps().DASHBOARD}`} element={<Dashboard />} />
                        <Route path={`${RouteProps().WORKFLOW}`} element={<Workflow />} />
                        <Route path={`${RouteProps().VARIABLE}`} element={<WorkSchedule />} />
                        <Route path={`${RouteProps().SCHEDULEPAGES}/*`} element={<SchedulePages/>} />
                        <Route path={`${RouteProps().INTEGRATIONS}`} element={<Integrations />} />
                    </Route>
                </Route>
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </StyledSliderLeft>
    )
}