const express = require('express')
const app = express()


//  '' is the partial url 
// the callback function will describe what we are sending back to the request
// fitst argument (request)
//second argument 9(reposnse)

app.get('', (req,res) => {
  // res.send is sending back a response 
    res.send ('<h1>Weather<h1>')
})

app.get('/help', (req, res) =>{
    res.send([{
        name: 'Ana',
        age: 28
    },{
        name: 'Manu',
        age:40
    }
])
})

app.get('/about', (req, res) =>{
    res.send('<h1 This wedsite it is about weather<h1>')
})

app.get('/weather', (req, res) =>{
    res.send({
        forecast: '23 degrees',
        location: 'Cartagena'
    })
})

app.listen(3000, () =>{
    console.log('Server is up on port 3000')

})
