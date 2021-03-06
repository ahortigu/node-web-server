const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


//console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
const app = express()
const port = process.env.PORT || 3000

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
        title:'Weather',
        name:'Ana Garcia',
        start:'Back to main page'
    })
}) 
 
app.get('/about',(req,res) => {
    res.render('about',{
        title:'About',
        name:'Ana Garcia',
        start:'Back to main page'
    })
}) 

app.get('/help',(req,res) => {
    res.render('help',{
        title:'help',
        name:'Ana Garcia',
        start:'Back to main page',
        helpText:'In this website you can find any help you may need'
    })
}) 

app.get('/weather', (req, res) =>{
    if(!req.query.address){
        return res.send({
            error:'Please provide a location'
        })
    }else{
    geocode(req.query.address, (error, {latitude, longitude, location}=0) => {
            if(error){
                return res.send( {error: 'Unable to find location. Try another search.'})
            }
            forecast(latitude,longitude, (error, forecastData) => {
                if(error){
                    return res.send({error})
                }
                res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address
                })
            })
        })
    }
})
    

app.get('/products', (req, res) => {
    if(!req.query.search){
        res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query)
    res.send({
        products:[]
    })

})


// It has to come last

// help webpage with something else *

app.get('/help/*', (req, res) =>{
    res.render('404', {
        title: '404',
        name:'Ana Garcia',
        errorMessage:'Help article not found.'
    })
})

// Any other request from the client
app.get('*', (req, res) =>{
    res.render('404', {
        title: '404',
        name:'Ana Garcia',
        errorMessage:'Page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

