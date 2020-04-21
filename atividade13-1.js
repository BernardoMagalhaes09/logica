const axios = require('axios')

function TalkBB(){
    axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(response => (this.info = response))
        console.log('response: ', response);

    } 