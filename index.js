var fs = require("fs");
var markDown = require("./utils/generateMarkdown.js")
const { parse } = require("path");

fs.appendFile("readMe.md", "utf-8", readme, err => {
    if (err) throw err;
  });


// array of questions for user
const questions = ["What is the title of your project?", "How would you describe your project", "What technologies were used to make this project", "How is this intended to be used?", "Who contributed to this project?", "How was this product tested?",  "What license would you like to use?" ];

// function to write README file
function writeToFile(fileName, data) {
    for(var i = 0; i <questions.length; i++){
        console.log(questions[i]);
        // var userInput = parse.process.argv[2]
    }
}

// function to initialize program
function init() {
   console.log("Fill in corresponding information in quotation  marks with commas in seperating to build readMe:");
   writeToFile();
}

// function call to initialize program
init();

var readme = []; 
