let idButton = document.getElementById('button')
idButton.addEventListener('click', () => {
    buscaAPI()
})


async function buscaAPI() {
    let data = document.getElementById('data').value
    let api = "4mdUKst9NAClgYW9zcaJGlNxRigP14Cdch3n9nvz"
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api}&date=${data}`)
    console.log(response)
    const date = await response.json()
    console.log(date)
    usaApiDate(date)
    document.getElementById("escondido").classList.remove("invisivel");
}

function usaApiDate(date) {
    document.querySelector('#title').innerHTML = date.explanation
    document.querySelector('#imagem').innerHTML = `<img src="${date.url}" class="img-fluid rounded-start" id="img">`
}
