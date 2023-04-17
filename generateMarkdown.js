function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }
  
  function generateMarkdown(data) {
    return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
 
  * [Dependencies](#Dependencies)
  * [languages](#Languages)
  * [Contributors](#contributors) 
  * [creator](#creator)
 
  ## Dependencies
  ${data.require}
  ## Languages Associated:
  ${data.usage}
  ## Contributors:
  ${data.contributors}
  ## Creator
 [github/${data.creator}](https://github.com/${data.creator})
  `;
  }
  
  module.exports = generateMarkdown;