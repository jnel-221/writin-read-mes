function renderBadgeSection(license) {
  let noBadgeSection = ` ---------------------------- `;
  let badgeSection = `## Badge`;
  return license === "none" ? noBadgeSection : badgeSection;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let noBadge = ` `;

  if (license === "none") {
    return noBadge;
  } else {
    switch (license) {
      case "MIT":
        response = `![Badge](https://img.shields.io/badge/license-MIT-green.svg)`;
        break;
      case "GNU GPLv3":
        response = `![Badge](https://img.shields.io/badge/license-GNU%20GPLv3-lightgrey.svg)`;
        break;
      case "The Unlicense":
        response = `![Badge](https://img.shields.io/badge/license-The%20Unlicense-green.svg)`;
        break;
      case "Mozilla Public 2.0":
        response = `![Badge](https://img.shields.io/badge/license-Mozilla%20Public%202.0-blue.svg)`;
        break;
      case "Apache 2.0":
        response = `![Badge](https://img.shields.io/badge/license-Apache%202.0-blue.svg)`;
        break;
      default:
        response = license;
    }
    return response;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let noLink = ` `;
  let link = `- [License](License)`;
  return license === "none" ? noLink : link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let noLicenseSection = ` `;
  let licenseSection = `## License`;
  return license === "none" ? noLicenseSection : licenseSection;
}

function renderLicenseContents(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(`# ${data.title}
  
  ${renderBadgeSection(data.license)}

  ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [Contributing](#Contributing)
  - [Test](#Tests)
  - [Questions](Questions)
  ${renderLicenseLink(data.license)}
  
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
  
  ## Questions
  
  Questions? Please contact by [email](${
    data.email
  }). Feel free to check out additional projects at [my GitHub profile](https://github.com/${
    data.gitHub
  })
  
  ${renderLicenseSection(data.license)}

  ${data.license}

`);
}

module.exports = generateMarkdown;
