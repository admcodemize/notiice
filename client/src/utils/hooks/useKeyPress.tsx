import { useEffect } from "react";

export const useKeyPress = (callback: () => void, keyCodes: string[]): void => {
    const keyPress = ({ code }: KeyboardEvent) => {
        if (keyCodes.includes(code)) {
            callback();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", keyPress);
        return () => {
            window.removeEventListener("keydown", keyPress);
        };
    }, []);
}