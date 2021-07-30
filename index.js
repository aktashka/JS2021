const axios  = require("axios")

// async function log(text) {
//     for (let i = 0; i < 6000; i+=0.1) {
//         if (i > 5999) {
//             return console.log(text)
//         }
//     }
// }

// function logNums () {
//     log(0)
//     console.log(1)
//     console.log(2)
//     log(3)
//     console.log(4)
// }

// logNums()



// async/await
// const test = async ( )=>console.log('adwadaw')
// async function getData() {
    //     const data = await axios.get(
        //         'https://jsonplaceholder.typicode.com/posts/1'
        //         ).then(res => res.data)
        //     console.log(data) 
        // }
        
        // getData()




const data = axios.get('https://jsonplaceholder.typicode.com/posts/1') 
    .then(res =>(res.data))
    .then(data => data.title)
    .then(title => console.log(title))
    .finally(() => console.log('hello'))
    .catch(err => console.log(err.message))