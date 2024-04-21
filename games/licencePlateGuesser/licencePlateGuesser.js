import { regexes, country } from './plateRegexes.js';
import { makeGrid, makeP, makeImg } from '../../commonTools.js'

function clearPreviousResult() {
    const oldResult = document.getElementById('result');
    if (oldResult !== null) oldResult.remove();
}

function noMatches(plate) {
    const p = document.createElement('p');
    p.id = 'noMatches';
    p.appendChild(document.createTextNode('Sorry, there are no matches for \'' + plate + '\''));
    return p;
}

function makeGridElement(_i, countryCode) {
    const div = document.createElement('div');
    div.id = countryCode;

    div.appendChild(makeP(country[countryCode]));
    div.appendChild(makeImg('./plateImages/' + countryCode + '.png'));

    return div;
}

function search(key, el) {
    if (key !== 'Enter') {
        return;
    }

    clearPreviousResult();
    
    let matches = [];
    for (const key in regexes) {
        if (el.value.match('^(' + regexes[key] + ')$') != null) {
            matches.push(key);
        };
    };

    const result = document.createElement('div');
    result.id = 'result';
    document.body.appendChild(result);

    if (matches.length == 0) {
        result.appendChild(noMatches(el.value));
        el.value = '';     
        return;
    }

    const p = document.createElement('p');
    p.id = 'matches';
    p.appendChild(document.createTextNode('Matches for ' + el.value + ':'));
    result.appendChild(p);

    result.appendChild(makeGrid(matches, makeGridElement));
    el.value = '';     
}

const plateField = document.getElementById('plate');
plateField.addEventListener('keyup', ({key}) => search(key, plateField));