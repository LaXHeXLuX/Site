export function makeGrid(array, makeGridElement) {
    const newGrid = document.createElement('div');
    newGrid.id = 'grid';

    for (const i in array) {
        newGrid.appendChild(makeGridElement(i, array[i]));
    }

    return newGrid;
}

export function makeP(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    return p;
}

export function makeImg(src) {
    const img = document.createElement('img');
    img.src = src;
    return img;
}