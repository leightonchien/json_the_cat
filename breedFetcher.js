// Task: Use request to fetch info from API endpoint and print out short description of breed (Siberian)
// API Endpoint https://api.thecatapi.com/v1/breeds/search


// Require Request Module: to make the http request.
const request = require("request");

// Set url for dynamic breed search
// const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


// Use the callback based approach we've been learning so far
const fetchBreedDescription = (breedName, callback) => {

  // Set url for dynamic breed search
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // console.log(body);
    // console.log(typeof body);
    if (error) {
      callback("error: ", error);  // Print the error if one occurred
    }  else if (body) {
        
      // Deserialization: convert the JSON string into an actual object
      const data = JSON.parse(body);
      const breed = data[0];
      // console.log(data);
      
      if (data.length === 0) {
        callback(null, breed.description);

      // Edge case: Breed not found
      } else {
        callback(`Breed ${breedName} not found`, null);
      }
    }

  });
};

module.exports = { fetchBreedDescription };