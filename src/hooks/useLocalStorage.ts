import { useState } from "react";

export function useLocalStorage<T>(name: string, initialValue: T) {

    const [dataLocalStorage, setDataLocalStorage] = useState<T>(() => {
        const item = localStorage.getItem(name);
        if (item) return JSON.parse(item);
        return initialValue;
    })

    function saveStorage(data: T) {
        localStorage.setItem(name, JSON.stringify(data));
        setDataLocalStorage(data);
    }

    return [dataLocalStorage, saveStorage] as const;
}