function searchCountries() {
    const currencyInput = document
      .getElementById("currencyInput")
      .value.trim();
    if (!currencyInput) {
      alert("Please enter a currency code or name.");
      return;
    }
  
    fetch(`https://restcountries.com/v3.1/currency/${currencyInput}`)
      .then((response) => response.json())
      .then((data) => {
        displayCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert(
          "An error occurred while fetching data. Please try again later."
        );
      });
  }
  
  function displayCountries(countries) {
    const countryList = document.getElementById("countryList");
    countryList.innerHTML = "";
  
    if (countries.length === 0) {
      countryList.innerHTML =
        '<p class="col">No countries found for the provided currency.</p>';
      return;
    }
  
    countries.forEach((country) => {
      const countryCard = `
        <div class="col-md-4">
          <div class="card">
            <img src="https://flagsapi.com/${country.cca2}/shiny/64.png" class="card-img-top" alt="${country.name.common} flag">
            <div class="card-body">
              <h5 class="card-title"><i class="fa fa-flag" aria-hidden="true"></i> ${country.name.common}</h5>
              <p class="card-text"><i class="fa fa-circle" aria-hidden="true"></i> Capital: ${country.capital || "N/A"}</p>
              <p class="card-text"><i class="fa fa-users" aria-hidden="true"></i> Population: ${country.population || "N/A"}</p>
            </div>
          </div>
        </div>
      `;
      countryList.innerHTML += countryCard;
    });
  }
  