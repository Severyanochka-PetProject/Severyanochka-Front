let timer: NodeJS.Timer;

export function debounceHelper(callback: Function, timeout = 300){
    return (...args: any) => {
        clearTimeout(timer);

        timer = setTimeout(() => callback(), timeout);
    };
}
