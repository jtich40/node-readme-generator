// function that returns a license badge based on which license is passed in, if none selected then it returns an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-red.svg)`
  }
  return ''
}

// function that returns the license link, if none selected then it returns an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`
  }
  return ''
}

// function that returns the license section of README, if none selected then it returns an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
  This application is licensed by the ${license} license.`
  }
  return ''
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* ${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

Use the following command to install required dependencies for the application:
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests

Use the following command to run tests for the application:
${data.test}

## Questions

For any questions, please contact me at ${data.email}. Feel free to check out more of my projects at [${data.github}](https://github.com/${data.github})!
`;
}

module.exports = generateMarkdown;
