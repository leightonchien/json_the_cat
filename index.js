const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

//Below demonstrates how the call back will handle the error and description
if (error) console.log('Error fetch details:', error);
else console.log(desc[0].descrption);


fetchBreedDescription(breedName, (error, desc) => {

    //here the callback is anonymous
    if (error) {
        console.log('Error fetch details:', error);
    } else {
        console.log(desc);
    }
}); 