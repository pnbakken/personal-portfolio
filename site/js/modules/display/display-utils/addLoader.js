export default function addLoader(target) {
    target.innerHTML = `<div class="loader">
                            <div class="spinner"></div>
                            <p>Please wait</p>
                        </div>`;
}