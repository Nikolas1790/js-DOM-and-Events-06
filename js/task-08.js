
const form = document.querySelector('.login-form');

form.addEventListener('submit',onSubmit);

function onSubmit(event) {
    event.preventDefault();     
    const formData = new FormData(event.currentTarget);

// console.dir(FormData)
    formData.forEach((name, value) => {
// console.dir(value)

        if (name === '') {
            alert("✍️Пожалуйста заполните все поля.");
        }
        const data = {
            value: name,
        }
        console.log(data);
        form.reset();

    })
}