import axios from 'axios'

const myButton = document.querySelector('#get-random-fossil')
myButton.addEventListener('click', () => {
    console.log('clicked')
    axios.get('/random-fossil.json')
        .then((response) => {
            console.log(response)
            document.querySelector('#random-fossil-image').setAttribute('src', response.data.img)
            document.querySelector('#random-fossil-name').innerText = response.data.name 
        })

})
