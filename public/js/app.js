console.log('Client side javascript file is loaded!')


 const weatherForm = document.querySelector('form')
 const search = document.querySelector('input')
 const messageOne= document.querySelector('#message-1')
 const messageTwo= document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e) =>{
     //Preventing to refresh by default
     e.preventDefault()

     const location = search.value

     messageOne.textContent = 'Loading...' 
     messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                console.log(messageOne.textContent = data.error)
            }else{
            console.log(messageOne.textContent = data.location)
            console.log(messageTwo.textContent = data.forecast)
            }

        })
    })

})