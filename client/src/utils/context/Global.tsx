import React, { createContext, useState } from "react"

import { IGlobalContextProps } from "../../assets/types/utils/context/Global";

export const initGlobalContext = {
    sliderLeft: false,
    sliderRight: false,
    toggleSliderLeft: () => null,
    toggleSliderRight: () => null,
    item: String()
};

export const GlobalContext = createContext<IGlobalContextProps>(initGlobalContext);

export const GlobalProvider = ({ children }: any): JSX.Element => {
    /** @todo Reducer in context for all the states */
    const [ sliderLeft, _toggleSliderLeft ] = useState<boolean>(initGlobalContext.sliderLeft);
    const [ sliderRight, _toggleSliderRight ] = useState<boolean>(initGlobalContext.sliderRight);
    const [ selectedItem, _setSelectedItem ] = useState<string>(initGlobalContext.item);

    /** @desc Show/Hide slider left */
    const toggleSliderLeft = (show?: boolean): void => _toggleSliderLeft(show !== undefined ? show : !sliderLeft);

    /** @desc Show/Hide slider left */
    const toggleSliderRight = (show?: boolean): void => _toggleSliderRight(show !== undefined ? show : !sliderRight);

    /** @desc Set selected sidebar item */
    const setSelectedItem = (key: string): void => _setSelectedItem(key);

    return (
        <GlobalContext.Provider value={{
            sliderLeft, toggleSliderLeft,
            sliderRight, toggleSliderRight,
            selectedItem, setSelectedItem
        }}>{children}</GlobalContext.Provider>
    )
};