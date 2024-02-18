const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}
  
function onImputChange(event) {
    refs.output.textContent = event.currentTarget.value.trim();
    if (!event.currentTarget.value) {
        refs.output.textContent = 'Anonymous';
    }    
    console.dir(event.currentTarget.value)
    
};

  refs.input.addEventListener('input', onImputChange);