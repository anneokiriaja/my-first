const bar = document.getElementById('bar');

const close = document.getElementById('close');

const nav = document.getElementById('navbar');



//if anyone click on the bar it means they are activating bar variable-an event is happening
if (bar) {
bar.addEventListener('click', () => {
    nav.classList.add('active');
})
}

//if anyone click on the close it means they are activating close variable-an event is happening
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}