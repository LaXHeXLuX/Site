function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getValues() {
    const values = document.getElementById('values');
    let value = values.value;
    values.value = '';
    if (value == '') {
        value = values.placeholder;
    }
    return value;
}

function getArray() {
    const value = getValues();
    if (value.match('^[0-9]+(,[0-9]+)*$') == null) {
        alert('Input must be integers separated by commas!');
        return null;
    }
    return value.split(',');
}

document.getElementById('sort').addEventListener('click', () => {
    const array = getArray();
    console.log(array);
    sort(array);
})

async function sort(array) {
    console.log('sorting: ' + array);
    await addSorter(array);
    bubbleSort(array);
}

async function bubbleSort(array) {
    for (let end = array.length - 1; end >= 0; end--) {
        for (let i = 0; i < end; i++) {
            if (parseInt(array[i]) > parseInt(array[i+1])) {
                const temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
            await addSorter(array, end+1);
        }
        await addSorter(array, end);
    }
}

async function addSorter(array, end = -1) {
    await sleep(500);
    const previousSorter = document.getElementById('sorter');
    if (previousSorter != null) {
        previousSorter.remove();
    }

    console.log('addSorter: ' + array + ' - ' + end);
    
    const sorter = document.createElement('div');
    sorter.id = 'sorter';
    fillSorter(sorter, array, end);
    document.body.appendChild(sorter);
}

function fillSorter(sorter, array, end) {    
    for (const el in array) {
        const element = document.createElement('div');
        element.className = 'element';
        element.id = el;
        if (end >= 0 && el >= end) {
            element.style.backgroundColor = 'Gray';
        }
        const p = document.createElement('p');
        p.innerText = array[el];
        element.appendChild(p);
        sorter.appendChild(element);
    }
}