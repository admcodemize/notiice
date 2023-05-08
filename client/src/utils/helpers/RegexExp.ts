export const coreRegexExp = (name: string): any => ({
    "mail": "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$",
    "password": "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#?()/$%^&*])[a-zA-Z0-9!@#?()/$%^&*]{6,20}$",
})[name]