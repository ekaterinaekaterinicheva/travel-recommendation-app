fetch("travel_recommendation_api.json")
  .then(response => response.json())
  .then(data => {
    console.log(data); // check if data loads correctly
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
