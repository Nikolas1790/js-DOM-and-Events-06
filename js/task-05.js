const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}
//  console.dir(refs.output)
  
function onImputChange(event) {
    // console.dir(event.data)
    // console.dir(event.currentTarget.value)
    console.dir(refs.output.textContent = event.currentTarget.value.trim());
};

  refs.input.addEventListener('input', onImputChange);