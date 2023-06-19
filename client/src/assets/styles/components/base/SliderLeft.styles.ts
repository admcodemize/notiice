import styled, { css } from "styled-components";
import { IStyledSliderLeftProps } from "../../../types/components/base/SliderLeft";

import { SidebarProps } from "../../../constants/Global";

export const StyledSliderLeft = styled("aside")<IStyledSliderLeftProps>`
  position: fixed;
  top: ${SidebarProps().HEADER}px;
  left: ${SidebarProps().SIDE}px;
  height: calc(100% - ${SidebarProps().HEADER}px);
  width: ${SidebarProps().LEFT}px;
  border-right: 1px solid ${({ theme }) => theme.primaryBorderColor};
  background-color: ${({ theme }) => theme.primaryBgColor};
  padding: 12px 24px;
  transform: translate3d(-${SidebarProps().LEFT}px, 0, 0);
  transition: all 0.2s ease .1s;

  ${props => props.sliderLeft && css`
    transform: translate3d(0, 0, 0);

    @media (max-width: 425px) {
      transform: translate3d(125px, 0, 0);
    }
  `}
`;