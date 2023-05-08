import { Routes, Route } from "react-router-dom";

import { StyledContent } from "../../assets/styles/components/base/Content.styles";

import { RoleBasedRoute } from "../routes/RoleBasedRoute";

import { Landing } from "./Landing";

import { Dashboard } from "../content/Dashboard";
import { Workflow } from "../content/Workflow";
import { WorkSchedule } from "../content/WorkSchedule";
import { SchedulePages } from "../content/SchedulePages";
import { Integrations } from "../content/Integrations";

import { RoleProps, RouteProps } from "../../assets/constants/Properties";

import { CalendarProvider } from "../../utils/context/Calendar";

export const Content = (): JSX.Element => {
    return (
        <StyledContent>
            <CalendarProvider>
                <Routes>
                    <Route path="/" element={<Landing />}>
                        {/*<Route element={<RoleBasedRoute allowedRoles={RoleProps().FREE} />} >*/}
                            <Route path={`${RouteProps().DASHBOARD}`} element={<Dashboard />} />
                            <Route path={`${RouteProps().WORKFLOW}`} element={<Workflow />} />
                            <Route path={`${RouteProps().WORKSCHEDULE}`} element={<WorkSchedule />} />
                            <Route path={`${RouteProps().SCHEDULEPAGES}/*`} element={<SchedulePages/>} />
                            <Route path={`${RouteProps().INTEGRATIONS}`} element={<Integrations />} />
                        {/*</Route>*/}
                    </Route>
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </CalendarProvider>
        </StyledContent>
    )
}