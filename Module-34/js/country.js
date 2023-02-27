const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(Response => Response.json())
    .then(data => displayCountry(data))

}

const displayCountry = (countries) =>{
    const countriesContainer = document.getElementById('all-country')

    countries.forEach(country => {
        // console.log(country.name.common);
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h3>country:${country.name.common }</h3>
            <h4>Capital:${country.capital ? country.capital[0] : 'No Capital'}</h4>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv)
        
    });
}

const loadCountryDetails = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
    fetch(url)
    .then(Response => Response.json())
    .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = country =>{
    const countryDetails = document.getElementById('country-details')
    countryDetails.innerHTML =`
        <h2>Country Name: ${country.name.common} </h2>
        <img src= '${country.flags.png}'> 
    `
    
}

loadCountry()