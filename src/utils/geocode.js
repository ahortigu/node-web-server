const request = require('request')



// request({url: geocodingURL, json:true}, (error, response) =>{ 
//     if(error){
//         console.log('Unable to connet to map server')
//     } else if (response.body.features.length === 0 ){
//         console.log('Unable to find location to find the coordinates.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longetude = response.body.features[0].center[1]
//         console.log('This is the latitude and longetude of Los Angeles: ' + latitude, longetude)
//     }
// })



const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWhvcnRpZ3UiLCJhIjoiY2s1Z3N5a21jMGFjbTNsbWl6cWRpanN5eCJ9.ZuekBdhBfmVBibcEER5FmQ&limit=1'

    request({url, json:true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to  location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search ', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude:body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
