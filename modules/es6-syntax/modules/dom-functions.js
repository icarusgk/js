// Syntax
// export { resourceToExportA, resourceToExportB, ...}
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
        domElement.style.display = 'block';
    } else {
        domElement.style.display = 'none';
    }
}

// Changes the background color of a domElement
const changeToFunkyColor = (domElement) => {
    const r = Math.random * 255;
    const g = Math.random * 255;
    const b = Math.random * 255;

    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

export { toggleHiddenElement, changeToFunkyColor };