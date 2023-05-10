
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=mountain")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").innerText = `By: ${data.user.name}`
    })