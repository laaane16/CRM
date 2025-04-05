/* eslint-disable @typescript-eslint/no-require-imports, no-undef */
const fs = require('fs');
const path = require('path');

const babelCachePath = path.resolve(__dirname, '..', '..', 'node_modules', '.cache', 'babel-loader');
try {
  fs.rmSync(babelCachePath, { recursive: true, force: true });
  console.log('Babel cache removed.');
} catch (e) {
  console.log(e);
}
