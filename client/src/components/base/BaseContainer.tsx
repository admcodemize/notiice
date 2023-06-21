import { StyledBaseContainer } from "../../assets/styles/components/base/BaseContainer.styles";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { SliderLeft } from "./SliderLeft";
import { Content } from "./Content";

import { BaseProvider } from "../../utils/context/Base";

export const BaseContainer = (): JSX.Element => {
    return (
        <StyledBaseContainer>
            <BaseProvider>
                <Header />
                <Sidebar />
                <SliderLeft />
                <Content />
            </BaseProvider>
        </StyledBaseContainer>
    )
}