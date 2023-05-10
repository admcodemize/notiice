import { TConstRoleProps, TConstRouteProps, TConstSignUpProps } from "../types/Properties";

export const RoleProps = (): TConstRoleProps => ({
    FREE: [1000]
});

export const RouteProps = (): TConstRouteProps => ({
    DASHBOARD: "dashboard",
    WORKFLOW: "workflow",
    WORKSCHEDULE: "workschedule",
    SCHEDULEPAGES: "pages",
    INTEGRATIONS: "integrations"
});

export const SignUpProps = (): TConstSignUpProps => ({
    EMAIL: "email"
});