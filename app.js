const whereAmI = (lat, lng) =>{
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
        if(!response.ok){
            throw new Error(`Error Found ${response.status}`)
        }
        return response.json()
    })
    .then(result => uiCreation(result))
    .catch((error) =>{
        console.log(`Error`)
    })
}

const whichCountryAmI = (country) =>{

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
        if(!response.ok){
            throw new Error(`Error Found ${response.status}`)
        }
        return response.json()
    })
    .then(result => uiCreationCountry(result[0]))
    .catch((error) =>{
        console.log(`Error`)
    })
}

const uiCreation = (data) =>{
    const country = document.getElementById('contry-name')
    const city = document.getElementById('city-name')
    const state = document.getElementById('state-name')
    const street = document.getElementById('street-address')
    const timezone = document.getElementById('timezone')
    const postal = document.getElementById('postal')
    country.innerHTML = `Country Name: ${data.country}`
    city.innerHTML = `City Name: ${data.city}`
    state.innerHTML = `State Name: ${data.state}`
    street.innerHTML = `Street: ${data.staddress}`
    timezone.innerHTML = `Timezone: ${data.timezone}`
    postal.innerHTML = `Postal: ${data.postal}`
    
    whichCountryAmI(data.country)

}

const uiCreationCountry = (data) =>{
    let curreny = Object.values(data.currencies)


    let countryName = Object.values(data.name)
    let [singleName, fullName, ...others] = countryName;

    const flagImage = document.getElementById('flag')
    flagImage.src = `${data.flags.png}`
    const Country = document.getElementById('country-name')
    const full = document.getElementById('fullName')
    const capital = document.getElementById('capital')
    const region = document.getElementById('region')

    const currencies = document.getElementById('currencies')
    
    const languages = document.getElementById('languages')
    let lang = Object.values(data.languages)
    const status = document.getElementById('status')

    Country.innerHTML = `Country Name: ${singleName}`
    full.innerHTML = `${fullName}`
    capital.innerHTML = `Capital: ${data.capital}`
    region.innerHTML = `Region: ${data.region}`
    currencies.innerHTML = `Curreny: ${curreny[0].name}`
    languages.innerHTML = `Languages: ${lang[0]}`
    status.innerHTML = `Status: ${data.status}`


}
const submit = document.querySelector('.submit')
const latitude = document.getElementById('lat')
const longitude = document.getElementById('lng')


function runFetch(){
    whereAmI(latitude.value, longitude.value);
}