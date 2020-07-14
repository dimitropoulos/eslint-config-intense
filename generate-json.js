const { writeFileSync } = require('fs');
const eslintrc = require('./index.js');

writeFileSync('generated.json', JSON.stringify(eslintrc, null, 2));
