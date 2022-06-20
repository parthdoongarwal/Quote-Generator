const quote = document.getElementById("quote")
const body = document.getElementById("body")
const author = document.getElementById("author")

const header = {
    "referrerPolicy": "strict-origin-when-cross-origin",
    // headers: {
    //   'Content-Type': 'application/json'
    // },
}

async function getQuote() {
    response = await fetch("https://api.quotable.io/random")
    data = await response.json();    
    console.table(data);

    quote.textContent = `"${data.content}"`
    author.textContent = `-${data.author}`

    body.style.background = `rgba(${r()},${r()},${r()},${r()})`
}

function r(){
    return Math.floor(Math.random() * 256)
}

getQuote();
