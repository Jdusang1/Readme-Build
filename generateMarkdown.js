// function that takes collected data from user and prints to readme.md with github markdown
function generateMarkdown(data) {
  return `![GitHub] 
  https://img.shields.io/badge/license-${data.license}-blue.svg
  
  # ${data.title} 
    
  ## Use
  ${data.use}
    
  ## Why
  ${data.why}
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Collaborators](#collaborators)
    * [License](#license) 
    * [Tests](#tests) 
    * [Questions](#questions)

  ## Installation:
    ${data.install}
  
  ## Usage
    ${data.how}
  
  ## Collaborators
    ${data.collaborators}

  ## Licensing
    This project is covered under a ${data.license} license.
  
  ## Tests
    ${data.tests}
  
  ## Questions
    
  https://github.com/${data.github}
    
  Email: ${data.email}`

    ;

};



module.exports = generateMarkdown;