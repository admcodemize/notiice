import { Outlet } from "react-router-dom";

import { StyledLanding } from "../../assets/styles/components/base/Landing.styles";

export const Landing = (): JSX.Element => {
    return (
        <StyledLanding>
            <Outlet />
        </StyledLanding>
    )
}