var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var value = document.querySelector('.temperature .value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeatherUI(capitalSearch){
    let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=2755a4c4d7934cc296f841dec3b18ef4`
    let data = await fetch(apiURL).then(res => res.json())
    if (data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        time.innerText = new Date().toLocaleString()
        shortDesc = data.weather[0].main
        visibility.innerText = data.visibility +'(m)'
        wind.innerText = data.wind.speed + 'm/s' 
        sun.innerText = data.main.humidity + '%'
        console.log(Math.round(data.main.temp - 273.15))
        var temp = Math.round(data.main.temp - 273.15)
        value.innerText = temp
        body.setAttribute('class','hot')
        if (temp <= 25)
            body.setAttribute('class','cool')
        if (temp <= 22)
            body.setAttribute('class','warm')
        if (temp <= 19)
            body.setAttribute('class','cold')
        
    }else{
        content.classList.add('hide')
    }
}

search.addEventListener('keypress',function(e){
    if (e.code == 'Enter'){
        let  capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
    }
})
changeWeatherUI('Hue')