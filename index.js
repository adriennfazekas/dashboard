
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=universe")
    .then(res => res.json())
    .then(data => {  
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").innerText = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1603811594813-63f576d92fd0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM5MDQ3Mzd8&ixlib=rb-4.0.3&q=85})`
        }
    )

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if(!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        document.getElementById("crypto").innerHTML += `
            <div class="crypto-top" id="crypto-top">
                <img class="crypto-img" src="${data.image.small}" >
                <span class="crypto-name">${data.name}</span>
            </div>
            <div class="crypto-body" id="crypto-body">
                <p>🎯: ${data.market_data.current_price.huf} Ft</p>
                <p>👆: ${data.market_data.high_24h.huf} Ft</p>
                <p>👇: ${data.market_data.low_24h.huf} Ft</p>
            </div>
        `
    })
    .catch(err => {console.error(err)})

