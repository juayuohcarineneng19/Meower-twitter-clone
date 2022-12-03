// alert('hello world')

const form = document.querySelector('form');// anytime document is mentioned thats client side js

const loadingElement = document.querySelector('.loading');
const API_URL = "http://localhost:8000/mews";


loadingElement.style.display = 'none'; 

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
     
    form.style.display = 'none';
    loadingElement.style.display = ''

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(mew),
        headers: {
            'content-type': 'application/json'
        }
        

    });
});