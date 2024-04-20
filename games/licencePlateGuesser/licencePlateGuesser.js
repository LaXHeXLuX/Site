import { regexes, country } from "./plateRegexes.js";

console.log('ola amigos');

function clearPreviousElements() {
    const previousGrid = document.getElementById('grid');
    if (previousGrid != null) previousGrid.remove();
    let previousP = document.getElementById('matches');
    if (previousP != null) previousP.remove();
    previousP = document.getElementById('noMatches');
    if (previousP != null) previousP.remove();
}

function noMatches(plate) {
    const p = document.createElement('p');
    p.id = 'noMatches';
    p.appendChild(document.createTextNode('Sorry, there are no matches for \'' + plate + '\''));
    return p;
}

function makeGridElement(countryCode) {
    const div = document.createElement('div');
    div.id = countryCode;
    const p = document.createElement('p');
    //p.tagName = 'countryName';
    p.appendChild(document.createTextNode(country[countryCode]));
    div.appendChild(p);
    return div;
}

function search(key, el) {
    if (key !== 'Enter') {
        return;
    }

    clearPreviousElements();
    console.log(el.value);
    let matches = [];
    for (const key in regexes) {
        if (el.value.match('^' + regexes[key] + '$') != null) {
            matches.push(key);
        };
    };
    console.log(matches);

    if (matches.length == 0) {
        document.body.appendChild(noMatches(el.value));
        el.value = '';     
        return;
    }

    const p = document.createElement('p');
    p.id = 'matches';
    p.appendChild(document.createTextNode('Matches for ' + el.value + ':'));
    document.body.appendChild(p);

    const newGrid = document.createElement('div');
    newGrid.id = 'grid';

    for (const i in matches) {
        newGrid.appendChild(makeGridElement(matches[i]));
    }

    document.body.appendChild(newGrid);
    el.value = '';     
}

const plateField = document.getElementById('plate');
plateField.addEventListener('keyup', ({key}) => search(key, plateField));