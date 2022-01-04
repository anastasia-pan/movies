const fs = require("fs")

const addMovie = (movieArray, movieObject) => {
    console.log(movieObject)
    try{
        const stringyObj = JSON.stringify(movieArray);
        console.log("movieObject: ", stringyObj)
       
        
        fs.writeFileSync('./storage.json', stringyObj)
        console.log("hi2")
    }
    catch(error) {

    }
}

module.exports = {
    addMovie
};