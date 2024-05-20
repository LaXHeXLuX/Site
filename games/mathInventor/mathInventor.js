import {} from '../../commonTools.js';

const levelElements = {
    '1': `<p>The beginning of the world of <span class="numbers">numbers</span>, 
    they say, is and always has been <span class="zero">0</span>, so this is the number you'll start with. <br>
    You'll see your current number at the bottom of the screen at all times.</p>
    <p>The first gadget they have introduced to us is an 
    <span class="incrementor">incrementor</span> (<span class="incrementor"> ' </span>). <br>
    It takes in an integer, and returns the next integer after it.  <br>
    You'll find it (and all other gadgets from now on) at the bottom of the screen, under your number.</p> <br>
    <p class="task">Your first task is to increment your number to <span style="font-weight: bold">10</span></p>`,
    '2': `<p>Good job! You may notice that by starting with a number <span style="font-weight: bold;">a</span> and using the 
    <span class="incrementor">incrementor</span> <span style="font-weight: bold;">b</span> 
    times, you get a number that can be expressed as <span style="font-weight: bold;">a</span> 
    <span class="plus">+</span> <span style="font-weight: bold;">b</span>.</p> <br>
    <p><span class="plus">+</span> (called <span style="color: darkorange;">plus</span>) is your second gadget.</p>
    <p>You can think of it as a functional symbol that takes in two numbers, 
    <span style="font-weight: bold;">a</span> and <span style="font-weight: bold;">b</span>, and returns a value that is 
    bigger than <span style="font-weight: bold;">a</span> by the amount of <span style="font-weight: bold;">b</span></p> <br>
    <p class="task">Your second task is to add with numbers you have already unlocked, growing your number to at least <span style="font-weight: bold">100</span></p>`,
    '3': ''
};

function makeLevel(number) {
    const div = document.createElement('div');
    div.className = 'level';
    div.id = 'level' + number;
    div.innerHTML = levelElements[number];
    return div;
}

function makeFooter() {
    const footer = document.createElement('footer');
    footer.id = 'footer';

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
    
    const number = document.getElementById('number');
    increment.appendChild(p);
    increment.addEventListener('click', () => {
        number.innerHTML = parseInt(number.innerHTML) + 1;
        checkContent(number);
    });

    gadgets.appendChild(increment);
    return gadgets;
}

function checkContent(element) {
    let value = parseInt(element.innerHTML);
    if (value === 10 && currentLevel === 1) {
        appendLevel();
    };
    
}

function appendLevel() {
    currentLevel = currentLevel + 1;
    const number = currentLevel.toString();
    document.getElementById('levels').appendChild(makeLevel(number));
}

let currentLevel = 0;

const letsGetStarted = document.getElementById('letsGetStarted');
letsGetStarted.addEventListener('click', () => {
    const div = document.createElement('div');
    div.id = 'levels';
    document.body.appendChild(div);
    appendLevel();

    const footer = makeFooter();
    document.body.appendChild(footer);
    footer.appendChild(makeFirstGadget());

    letsGetStarted.remove();
});