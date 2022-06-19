export function createMessage(messageTarget, messageType, messageText) {
    messageTarget.innerHTML = `<div class="message ${messageType}">${messageText}</div>`;
}

export function createGenericErrorMessage(messageTarget, lang) {
    createMessage(messageTarget, "error-message", languages[lang].genericError);
}