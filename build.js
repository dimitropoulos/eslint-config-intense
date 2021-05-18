const { writeFileSync } = require('fs');
const eslintrc = require('./index.js');

writeFileSync('build.json', JSON.stringify(eslintrc, null, 2));
