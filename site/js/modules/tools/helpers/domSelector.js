export function $(selector, scope=document) {
    return scope.querySelector(selector);
}

export function $all(selector, scope=document) {
    return scope.querySelectorAll(selector);
}

