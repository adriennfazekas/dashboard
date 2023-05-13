
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=green")
    .then(res => res.json())
    .then(data => {  
        document.body.style.backgroundImage = `url(background.jpg)`
        document.getElementById("author").innerText = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1603811594813-63f576d92fd0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM5MDQ3Mzd8&ixlib=rb-4.0.3&q=85})`
        }
    )

fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(res => {
        if(!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto").innerHTML += `
            <div class="crypto-top" id="crypto-top">
                <img class="crypto-img" src="${data.image.small}" >
                <span class="crypto-name">${data.name}</span>
            </div>
            <div class="crypto-body" id="crypto-body">
                <p>🎯: ${(data.market_data.current_price.huf).toLocaleString('hu-HU')} Ft</p>
                <p>👆: ${(data.market_data.high_24h.huf).toLocaleString('hu-HU')} Ft</p>
                <p>👇: ${(data.market_data.low_24h.huf).toLocaleString('hu-HU')} Ft</p>
            </div>
        `
    })
    .catch(err => {console.error(err)})

/*fetch("https://v6.exchangerate-api.com/v6/52410926119eedef48530705/latest/EUR")
    .then(res => res.json())
    .then(data => {
        document.getElementById("euro-huf").innerHTML += `
            <div class="euro">
                <img class="euro-img" src="euro.jpg" >
                <span>1 ${data.base_code}</span>
            </div>
            <div class="euro-body"><p>${data.conversion_rates.HUF} Ft</p></div>
        `
    })*/

function renderTime() {
    const currentTime = new Date()
    let currentHour = currentTime.getHours()
    const currentMinute = currentTime.getMinutes()
    const timeEl = document.getElementById("time")
    
    if(currentHour < 12) {
        return timeEl.innerHTML  = `
        ${currentHour} : ${currentMinute} AM`
    } else {
        currentHour = currentHour % 12
        return timeEl.innerHTML = `
        ${currentHour} : ${currentMinute} PM`
    }
}
setInterval(renderTime, 1000)

navigator.geolocation.getCurrentPosition( position => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`)
        .then(res => {
            if(!res.ok) {
                throw Error("Something went wrong")
            } else {return res.json()}
        })
        .then(data => {
            document.getElementById("weather").innerHTML = `
                <div class="weather-flex">
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
                    <span>${Math.round(data.main.temp)} C°</span>
                </div>
                <p>${data.name}</p>`
        })
        .catch(err => console.error(err))
})