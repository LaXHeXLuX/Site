import { makeGrid, makeP } from '../../commonTools.js'

async function fetchJSONData(path) {
    const response = await fetch(path);
    return response.json();
}

const jsonVariable = await fetchJSONData('./games/games.json');
console.log(jsonVariable); // Now you have the JSON object as a variable

function makeGridElement(id, jsonObject) {
    const element = document.createElement('a');
    element.href = './games/' + id + '/' + id + '.html';
    element.className = 'game';
    element.id = id;
    element.style.backgroundColor = jsonObject['color'];

    const p = document.createElement('p');
    p.innerHTML = jsonObject['name'];
    p.style.color = jsonObject['secondary-color'];
    element.appendChild(p);
    return element;
}

function addGames(gamesJSON) {
    document.body.appendChild(makeGrid(gamesJSON, makeGridElement));
}

addGames(jsonVariable);