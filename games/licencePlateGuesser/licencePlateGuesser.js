console.log('ola amigos');

function search(el) {
    if(event.key === 'Enter') {
        console.log(el.value);
        if (el.value === 'A') {
            const grid = document.createElement('grid');
            document.getElementById('body').appendChild(grid);
        }
        el.value = '';       
    }
}

