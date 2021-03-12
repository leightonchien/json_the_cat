// Task: Use request to fetch info from API endpoint and print out short description of breed (Siberian)
// API Endpoint https://api.thecatapi.com/v1/breeds/search


// Require Request Module: to make the http request.
const request = require("request");

// Set url for Siberian
const url = "https://api.thecatapi.com/v1/breeds/search?q=sib";

// Create variable to pass the given URL
const breed = process.argv[2];

// Use the callback based approach we've been learning so far
request(url, (error, response, body) => {
    // console.log(body);
    // console.log(typeof body);
  if (error) {
    console.log("error:", error);  // Print the error if one occurred
  }

// Deserialization: convert the JSON string into an actual object  
  const data = JSON.parse(body);
    // console.log(data);

    
});