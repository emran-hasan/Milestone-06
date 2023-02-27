const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(Response => Response.json())
    .then(data => displayCountry(data))

}

const displayCountry = (countries) =>{
    const countriesContainer = document.getElementById('all-country')

    countries.forEach(country => {
        console.log(country.capital[0]);

        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h3>country:${country.name.common }</h3>
            <h4>Capital:${country.capital ? country.capital[0] : 'No Capital'}</h4>
        `
        countriesContainer.appendChild(countryDiv)
        
    });
}
loadCountry()