const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};
console.dir(refs.input);

refs.input.addEventListener('input', onImputSize);

refs.text.style.fontSize = `${refs.input.value}px`;
console.dir(`${refs.input.value}px`)
function onImputSize(event) {
    
   refs.text.style.fontSize = event.currentTarget.value + 'px';
};