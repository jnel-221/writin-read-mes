// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(`# ${data.title}
  
  ## Badge(s)
  
  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [Contributing](#Contributing)
  - [Test](#Tests)
  - [License](License)
  - [Questions](Questions)
  
  ## Installation

  ${data.install}
  
  ## Usage

  ${data.usage}
  
  ## Credits

  ${data.credits}
  
  ## Contributing
  
  Please review our community standards for contributing, adopted from the [Contributor Covenant](https://www.contributor-covenant.org/).
  
  ## Tests

  ${data.tests}
  
  ## License

  ${data.license}
  
  ## Questions
  
  Questions? Please contact by [email](${data.email}. Feel free to check out additional projects at [gitHub profile name](https://github.com/${data.gitHub})
  

`);
}

module.exports = generateMarkdown;
