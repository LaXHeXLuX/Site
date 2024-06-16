import { makeGrid, makeP } from './commonTools.js'

async function fetchJSONData(path) {
    const response = await fetch(path);
    return response.json();
}

const games = await fetchJSONData('./games/games.json');

function makeGridElement(id, jsonObject) {
    const element = document.createElement('a');
    element.href = './games/' + id + '/' + id + '.html';
    element.className = 'game';
    element.id = id;
    element.style.backgroundColor = jsonObject['color'];
    element.style.borderColor = jsonObject['secondary-color'];

    const p = document.createElement('p');
    p.innerText = jsonObject['name'];
    p.style.color = jsonObject['secondary-color'];
    element.appendChild(p);
    return element;
}

function addGames(gamesJSON) {
    document.body.appendChild(makeGrid(gamesJSON, makeGridElement));
}

addGames(games);