const fs = require("fs");
const { addMovie } = require("./utils/index.js")

const app = () => {
    let movieArray;
    try {
    movieArray = JSON.parse(fs.readFileSync('./storage.json'))
    }
    catch(error){
    movieArray = [];
    }
    console.log("hellooo", movieArray)


    if (process.argv[2] === 'title' && process.argv[4] === 'actor') {
        let input = {title: process.argv[3], actor: process.argv[5]};
        addMovie(movieArray, input);
        // movieArray.push(input)

    
        // fs.writeFileSync('storage.txt', `title: ${process.argv[3]}, actor: ${process.argv[5]}`);
    }
    else {
        console.log("I don't understand!!!")
    }


}

app()

// try {
//     movieArray =  JSON.parse(fs.readFileSync("./storage.json", ))
//     console.log(movieArray)

// }
// catch (error){
//     movieArray = []
// }


// addMovie(movieArray, {title: process.argv[3], actor: process.argv[5]});