const fs = require('fs');
const svg = fs.readFileSync('public/logo.svg', 'utf8');

const pathRegex = /<path[^>]*d="([^"]+)"[^>]*>/g;
let match;
let count = 0;
const paths = [];

while ((match = pathRegex.exec(svg)) !== null) {
  paths.push(match[0]);
  count++;
}

console.log('Total paths:', count);

// Create a directory to output individual paths
const outDir = 'public/isolated_paths';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

const viewBoxMatch = svg.match(/viewBox="([^"]+)"/);
const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 2224 1920";

paths.forEach((p, index) => {
  const newSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="100%" height="100%">
    <g transform="translate(0,1920) scale(0.1,-0.1)">
      ${p}
    </g>
  </svg>`;
  fs.writeFileSync(`${outDir}/path_${index}.svg`, newSvg);
});

console.log('Saved paths to', outDir);
