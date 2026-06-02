const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  throw new Error(`Missing built index.html at ${indexPath}`);
}

const indexHtml = fs.readFileSync(indexPath, 'utf8');

for (const route of ['fr', 'en']) {
  fs.writeFileSync(path.join(distDir, `${route}.html`), indexHtml);
}

console.log('Created clean language routes: /fr and /en');
