const fs = require('fs');
const svg = fs.readFileSync('public/logo.svg', 'utf8');

const pathRegex = /<path[^>]*d="([^"]+)"[^>]*>/g;
let match;
let index = 0;
while ((match = pathRegex.exec(svg)) !== null) {
  const d = match[1];
  const moves = (d.match(/M|m/g) || []).length;
  console.log(`Path ${index}: ${moves} moves, length: ${d.length}`);
  index++;
}
