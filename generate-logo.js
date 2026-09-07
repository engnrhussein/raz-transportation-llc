const fs = require('fs');
const svg = fs.readFileSync('public/logo.svg', 'utf8');

if (!fs.existsSync('src/components')) {
    fs.mkdirSync('src/components', { recursive: true });
}

const component = `import React from 'react';

export default function LogoR(props: React.SVGProps<SVGSVGElement>) {
  return (
    ${svg
        .replace('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2224 1920" width="100%" height="100%">', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1920" {...props}>')
        .replace(/fill-rule/g, 'fillRule')
        .replace(/stop-color/g, 'stopColor')
        .replace(/stop-opacity/g, 'stopOpacity')
        .replace(/gradientUnits/g, 'gradientUnits')
    }
  );
}
`;
fs.writeFileSync('src/components/LogoR.tsx', component);
