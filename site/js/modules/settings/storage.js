const storage = window.localStorage;

export function saveToStorage(key, value) {
    storage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
    return JSON.parse(storage.getItem(key));
}

export function hasItemInStorage(key) {
    return (storage.getItem(key));
}

export function removeFromStorage(key) {
    storage.removeItem(key);
}