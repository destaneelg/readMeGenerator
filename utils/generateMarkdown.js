// function to generate markdown for README
function generateMarkdown(data) {

  return `# 

  Title

  ${data.title}

  Project

  ${data.project}

  Technolodgy



  ${data.technolodgy}

  Use


  ${data.use}

  
  License

  ${data.license}

 
  Testing
 
  ${data.testing}
 


`;
}

module.exports = generateMarkdown;
