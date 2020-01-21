const path = require('path')
const express = require('express')
//console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
const app = express()


//  '' is the partial url 
// the callback function will describe what we are sending back to the request
// fitst argument (request)
//second argument 9(reposnse)


const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))


app.get('', (req,res) => {
  // res.send is sending back a response 
    res.send ('<h1>Weather<h1>')
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
