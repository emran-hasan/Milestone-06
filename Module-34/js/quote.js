const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(Response => Response.json())
    .then(data => displayQuotes(data))
}

const displayQuotes = (quotes) =>{
    const quoteContainer = document.getElementById('quote-container')
    quoteContainer.innerText = quotes.quote;
    quoteContainer.appendChild(divQuote);
    
}


loadQuotes()