// TODO: Include packages needed for this application
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const generateREADME = (response) => { 

  switch (response.license) {
// MIT License Section
            case 'MIT' :
                var licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
                var licenseLink = 'https://www.mit.edu/~amini/LICENSE.md';
                var licenseSection = `MIT License
    
Copyright (c) [2023] [${response.username}]
                
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

${licenseLink}`;
                break;
  
// Apache license section Section
            case 'Apache License v2' :
                var licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
                var licenseLink = `https://www.apache.org/licenses/LICENSE-2.0.txt`;
                var licenseSection = `Copyright [2023] [${response.username}]
    
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
                
${licenseLink}
                
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
                break;
  
// GNU General Public License Section
            case'GNU General Public License v3' :
                  var licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
                  var licenseLink = 'https://www.gnu.org/licenses/';
                  var licenseSection = `${response.title}
Copyright (C) 2023  ${response.username}
            
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
            
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
            
You should have received a copy of the GNU General Public License
along with this program.  If not, see ${licenseLink}.`;
                break;

// Returns empty string for license section if None is selected
            case'None' :
                var licenseBadge = '';
                var licenseLink = '';
                var licenseSection = '';
                break;
        }

// TODO: Create a function to generate markdown for README
  const fullREADME = `${licenseBadge}
      
# ${response.title}
      
## Description:
      
${response.description}
  
## Table of Contents:
  
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contribution](#contribution)

[Tests](#tests)

[Questions](#questions)
  
## Installation:
  
${response.install}
  
## Usage:
  
${response.usage}
  
## License:
  
${licenseSection}
  
## How to Contribute:
  
${response.contribute}
  
## Tests:
  
${response.test}
  
## Questions:

Please refer all questions to https://github.com/${response.username} or by emailing: ${response.email}`;

  fs.writeFile('README.md', fullREADME, (err)=>
    err ? console.error(err) : console.log("Your README.md was created!")
    );
};

module.exports = {
  generateREADME,
}