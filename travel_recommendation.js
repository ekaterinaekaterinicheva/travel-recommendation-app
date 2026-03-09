// The Search Button
document.getElementById("btnSearch").addEventListener("click", searchPlaces);

  function searchPlaces() {
  
    const keyword = document.getElementById("keywordInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
  
    resultsDiv.innerHTML = "";
  
    fetch("travel_recommendation_api.json")
      .then(response => response.json())
      .then(data => {
  
        if (keyword === "beach" || keyword === "beaches") {
  
          data.beaches.slice(0,2).forEach(place => displayCard(place));
  
        } 
        else if (keyword === "temple" || keyword === "temples") {
  
          data.temples.slice(0,2).forEach(place => displayCard(place));
  
        } 
        else if (keyword === "country" || keyword === "countries") {

          data.countries.slice(0,2).forEach(country => {
          
            country.cities.slice(0,2).forEach(city => displayCard(city));
          
            });
        }
  
        else {
  
          resultsDiv.innerHTML = "<p>No recommendations found.</p>";
  
        }
  
      })
      .catch(error => console.log(error));
  }
  
  function displayCard(place) {
  
    const resultsDiv = document.getElementById("results");
  
    const card = document.createElement("div");
  
    card.classList.add("card");
  
    card.innerHTML = `
      <h3>${place.name}</h3>
      <img src="${place.imageUrl}" width="300">
      <p>${place.description}</p>
    `;
  
    resultsDiv.appendChild(card);
  }

// The Reset Button
const resetBtn = document.getElementById("btnReset");

resetBtn.addEventListener("click", clearResults);

// Function to clear results
function clearResults() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Remove all content
  document.getElementById("keywordInput").value = ""; // Optional: also clear the search field

}
