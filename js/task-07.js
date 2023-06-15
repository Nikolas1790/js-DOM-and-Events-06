const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};
console.dir(refs.input);

refs.input.addEventListener('input', onImputSize);

function onImputSize(event) {
    // console.dir(event.currentTarget.value + 'px');
    // console.dir(event.currentTarget.value);
   refs.text.style.fontSize = event.currentTarget.value + 'px';
};