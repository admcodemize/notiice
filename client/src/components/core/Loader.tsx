import React from "react";

import { StyledLoader } from "../../assets/styles/components/core/Loader.styles";

import { useLoader } from "../../utils/hooks/useLoader";

export const Loader = (): JSX.Element => {
    /** @desc Destructuring gloabl loader which handles suspense -> ../context/Loader.tsx */
    const { loader } = useLoader();

    return loader ? (
        <StyledLoader>
            <span className="loader" />
        </StyledLoader>
    ) : ( <></> )
}