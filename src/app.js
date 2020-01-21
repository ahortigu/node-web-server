const path = require('path')
const express = require('express')
const hbs = require('hbs')
//console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
const app = express()


//  '' is the partial url 
// the callback function will describe what we are sending back to the request
// fitst argument (request)
//second argument 9(reposnse)


// Define paths for Express confi
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlers engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to server
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index',{
        title:'Weather App',
        name:'Ana Garcia'
    })
}) 
 
app.get('/about',(req,res) => {
    res.render('about',{
        title:'About',
        name:'Ana Garcia'
    })
}) 

app.get('/help',(req,res) => {
    res.render('help',{
        title:'help',
        name:'Ana Garcia',
        helpText:'In this website you can find any help you may need'
    })
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

