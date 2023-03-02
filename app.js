let countries = document.querySelector("#countries");
let search = document.querySelector("#search")
fetch("https://restcountries.com/v3.1/all")
.then (function(response){
    return response.json();
})
.then(function(result){

    let data = '';
    

    function showCountries(){
        result.map(function(value){
            console.log(value)
            data += `<div id="country-box">
                            
            <img src=${value.flags.png} alt="">
            <div class="country-info">
            <h3>${value.name.common}</h3>
            <p>Population: ${value.population}</p>
            <p>Region: ${value.region}</p>
            <p>Capital: ${value.capital}</p>
            </div>
        </div>`
        })
        countries.innerHTML = data;
        
    }

//search for Countries//

function filterInput(e){
    let data= " ";
    let searchText = e.target.value;

    let filteredCountry = result.filter(function(country){
        return country.name.common.toLowerCase().includes(searchText)
    })
    filteredCountry.map(function(value){
        data += `<div id="country-box">
                            
            <img src=${value.flags.png} alt="">
            <div class="country-info">
            <h3>${value.name.common}</h3>
            <p>Population: ${value.population}</p>
            <p>Region: ${value.region}</p>
            <p>Capital: ${value.capital}</p>
            </div>
        </div>`
    })
    countries.innerHTML = data;
}



    
    showCountries();
    search.addEventListener("keyup",filterInput);
})
