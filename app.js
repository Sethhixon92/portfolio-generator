const fs = require('fs');
const generatePage = require('./src/page-template.js');

const pageHTML = generatePage(name, github);

const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});