import React, { Ref, useEffect} from "react";

export const useClickOutside = (ref: Ref<any>, callback: () => void = () => {}): void => {
    useEffect((): any => {
        const _clickOutside = (evt: Event) => {
            /** @ts-ignore */
            if (!ref?.current || ref?.current.contains(evt.target)) return;
            callback();
        }

        document.addEventListener("mousedown", _clickOutside);
        return (): any => document.removeEventListener("mousedown", _clickOutside);
    }, [ref, callback]);
};