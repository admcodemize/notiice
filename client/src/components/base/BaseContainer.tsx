import { StyledBaseContainer } from "../../assets/styles/components/base/BaseContainer.styles";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { SliderLeft } from "./SliderLeft";
import { Content } from "./Content";

export const BaseContainer = (): JSX.Element => {
    return (
        <StyledBaseContainer>
            <Header />
            <Sidebar />
            <SliderLeft />
            <Content />
        </StyledBaseContainer>
    )
}