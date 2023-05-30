export const base64Converter = (file: Blob): Promise<string|ArrayBuffer|null> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
    });
};

export const sizeConverter = (bytes: number, decimals: number = 2): string => {
    if (!+bytes) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
};

export const convertBase64ToFile = (base64: string, filename: string): void => {
    // const arr = base64.split(',')
    // const mime = arr[0].match(/:(.*?);/)[1]
    // const bstr = atob(arr[1])
    // let n = bstr.length
    // const u8arr = new Uint8Array(n)
    // while (n) {
    //     u8arr[n - 1] = bstr.charCodeAt(n - 1)
    //     n -= 1 // to make eslint happy
    // }
    // return new File([u8arr], filename, { type: mime })
};

export const checkFileSizeMb = (bytes: number, maxMbSize: number = 5): boolean => (bytes / (1024*1024)) <= maxMbSize;