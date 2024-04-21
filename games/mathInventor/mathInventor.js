import {} from '../../commonTools.js';

function makeLevel1() {
    const div = document.createElement('div');
    div.className = 'level';
    div.id = 'level1';
    div.innerHTML = `<p>The beginning of the world of <span class="numbers">numbers</span>, 
    they say, is and always has been <span class="zero">0</span>, so this is the number you'll start with. <br>
    You'll see your current number at the bottom of the screen at all times</p>
<p>The first gadget they have introduced to us is an 
    <span class="incrementor">incrementor</span> (<span class="incrementor"> ' </span>). <br>
    It takes in an integer, and returns the next integer after it.  <br>
    You'll find it (and all other gadgets from now on) at the bottom of the screen, under your number</p> <br>
    <p class="task">Your first task is to increment your number to <span style="font-weight: bold">10</span></p>`;
    return div;
}

function makeFooter() {
    const footer = document.createElement('footer');

    const number = document.createElement('p');
    number.id = 'number';
    number.innerHTML = 0;
    footer.appendChild(number);
    return footer;
}

function makeFirstGadget() {
    const gadgets = document.createElement('div');
    gadgets.id = 'gadgets';

    const increment = document.createElement('div');
    increment.className = 'gadget';
    increment.id = 'increment';

    const p = document.createElement('p');
    p.innerHTML = '&nbsp\'&nbsp';
    p.className = 'incrementor';

    increment.appendChild(p);
    increment.addEventListener('click', () => {
        const number = document.getElementById('number');
        number.innerHTML = parseInt(number.innerHTML) + 1;
    });

    gadgets.appendChild(increment);
    return gadgets;
}

const letsGetStarted = document.getElementById('letsGetStarted');
letsGetStarted.addEventListener('click', () => {
    document.body.appendChild(makeLevel1());
    document.body.appendChild(makeFooter());
    document.getElementsByTagName('footer')[0].appendChild(makeFirstGadget());

    letsGetStarted.remove();
});