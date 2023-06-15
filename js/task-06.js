const input = document.querySelector('#validation-input');

function onImputChange(event) {
   
   event.currentTarget.value.trim().length === Number(input.getAttribute('data-length')) ?
       input.classList.add('valid') :
       input.classList.add('invalid');  
}

input.addEventListener('blur', onImputChange);


// event.currentTarget.value.length === Number(input.attributes[2].value) ?
//         input.classList.add('valid') : input.classList.add('invalid');