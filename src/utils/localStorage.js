const setValueInLocalStorage = (key, value) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, value);
    }
};

const getValueFromLocalStorage = (key) => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(key);
    }
};

export { setValueInLocalStorage, getValueFromLocalStorage };
