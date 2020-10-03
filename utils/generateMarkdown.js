// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.project}



  ${data.technolodgy}


  ${data.use}


  ${data.license}


  ${data.testing}
 


`;
}

module.exports = generateMarkdown;
