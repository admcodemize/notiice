import styled, { css } from "styled-components";
import { IStyledContentProps } from "../../../types/components/base/Content";

import { SidebarProps } from "../../../constants/Global";

export const StyledContent = styled("div")<IStyledContentProps>`
  position: fixed;
  top: ${SidebarProps().HEADER}px;
  left: calc(${SidebarProps().SIDE}px + ${SidebarProps().LEFT}px);
  width: calc(100% - calc(${SidebarProps().SIDE}px + ${SidebarProps().LEFT}px));
  height: calc(100% - ${SidebarProps().HEADER}px);
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease .1s;

  ${props => !props.sliderLeft && !props.sliderRight && css`
    width: calc(100% - (${SidebarProps().SIDE}px));
    left: ${SidebarProps().SIDE}px;
  `}

  ${props => !props.sliderLeft && props.sliderRight && css`
    width: calc(100% - calc(${SidebarProps().SIDE}px + ${SidebarProps().RIGHT}px));
    left: ${SidebarProps().SIDE}px;
    right: ${SidebarProps().RIGHT}px;
  `}

  ${props => props.sliderLeft && !props.sliderRight && css`
    width: calc(100% - calc(${SidebarProps().SIDE}px + ${SidebarProps().LEFT}px));
    left: calc(${SidebarProps().SIDE}px + ${SidebarProps().LEFT}px);
    right: 0;
  `}

  ${props => props.sliderLeft && props.sliderRight && css`
    width: calc(100% - calc(${SidebarProps().SIDE}px + ${SidebarProps().LEFT}px + ${SidebarProps().RIGHT}px));
    left: calc(${SidebarProps().SIDE}px + ${SidebarProps().LEFT}px);
    right: ${SidebarProps().RIGHT}px;
  `}
`;