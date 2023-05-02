import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            const getData = localStorage.getItem(key);
            let dataLocal;
            if (getData) {
                dataLocal = JSON.parse(getData);
            } else {
                dataLocal = initialValue;
            }

            setData(dataLocal);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, []);


    const saveData = (newData) => {
        try {
            const stringData = JSON.stringify(newData);
            localStorage.setItem(key, stringData);
            setData(newData);
        } catch (error) {
            setError(error);
        }
    };

    return {
        data,
        loading,
        error,
        saveData
    }
};