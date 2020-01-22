const request = require('request')


// request({url:url, json:true}, (error, response) => {
//     if(error){
//          console.log('Unable to connect to weather server')
//     } else if (response.body.error){
//       console.log('Unable to find location to check the weather.')
//      } else {
//          console.log ('It is currently ' + response.body.daily.data[0].summary +' degrees out. There is' + response.body.currently.precipProbability + ' % chance of rain.')
//      }
// })


const forecast = (latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/ce6678b032480b1a6eebc71de3e5e0cd/' + latitude + ',' + longitude

    request({url, json:true}, (error, {body}) =>{ 
        if(error){
            callback('Unable to connect to weather server', undefined)
        } else if (body.error){
            callback('Unable to find location to check the weather.', undefined)
        } else {
           callback (undefined, body.daily.data[0].summary +'It is currently ' + body.currently.temperature +  ' degrees out. There is ' + body.currently.precipProbability + ' % chance of rain.')
        }
})
}

module.exports = forecast