// alert('hello world')

const form = document.querySelector('form');//anytime document is mentioned thats client side js
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = new FormData(form)
    const name = formData.get('name');
    const content = formData.get('content');
    // console.log('form submitted'); 

    const mew = {
        name,
        content
    };
    console.log(mew,name)
})