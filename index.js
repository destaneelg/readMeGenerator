var fs = require("fs");
var inquirer = require('inquirer');
var markDown = require("./utils/generateMarkdown.js")
const path = require("path");

// fs.appendFile("./sample/readMe.md", "utf-8", readme, err => {
//     if (err) throw err;
//   });


// array of questions for user
var questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
  },
  {
    type: 'input',
    name: 'project',
    message: "How would you describe your project?",
  
  },
  {
    type: 'input',
    name: 'technolodgy',
    message: "What technologies were used to make this project?",
  },
  {
    type: 'input',
    name: 'use',
    message: "How is this intended to be used?",
    },
  {
    type: 'input',
    name: 'title',
    message: "Who contributed to this project?",
  },
  {
    type: 'input',
    name: 'license',
    message: "What license would you like to use?",
  },
  {
    type: 'input',
    name: 'testing',
    message: "How was this product tested?",
  },
];



//   function to write README file

function writeToFile(fileName, data) {
    // for(var i = 0; i <questions.length; i++){
    //     console.log(questions[i]);
        // var userInput = parse.process.argv[2]
       return fs.writeFile(path.join(process.cwd(),fileName), data, "utf8", function (err){
            if(err){
                throw err;
            } else{
                console.log("File Saved!")
               
            }
        })
    }
// function to initialize program
function init() {
   console.log("Fill in corresponding information in quotation  marks with commas in seperating to build readMe:");
inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
  writeToFile("./sample/readme.md", markDown({...answers}));
  
});
// function call to initialize program
//Possibly add inquirer into init and write to

}
init();