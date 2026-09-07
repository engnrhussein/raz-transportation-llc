const fs = require('fs');

function createSvgComponent(inputName, outputName, componentName) {
  let svg = fs.readFileSync(inputName, 'utf8');
  svg = svg.replace(/<\?xml[^>]*\?>/g, ''); 
  svg = svg.replace(/<!--[\s\S]*?-->/g, ''); 
  
  // Strip Inkscape specific tags
  svg = svg.replace(/<sodipodi:[^>]*\/>/g, '');
  svg = svg.replace(/<sodipodi:[^>]*>/g, '');
  svg = svg.replace(/<\/sodipodi:[^>]*>/g, '');
  svg = svg.replace(/<inkscape:[^>]*\/>/g, '');
  svg = svg.replace(/<inkscape:[^>]*>/g, '');
  svg = svg.replace(/<\/inkscape:[^>]*>/g, '');
  
  // Strip namespaces in root element
  svg = svg.replace(/xmlns:sodipodi="[^"]*"/g, '');
  svg = svg.replace(/xmlns:inkscape="[^"]*"/g, '');
  svg = svg.replace(/xmlns:svg="[^"]*"/g, '');
  
  // Strip bad properties completely
  svg = svg.replace(/inkscape:[a-z-A-Z0-9]+="[^"]*"/g, '');
  svg = svg.replace(/sodipodi:[a-z-A-Z0-9]+="[^"]*"/g, '');
  
  svg = svg
    .replace(/fill-rule/g, 'fillRule')
    .replace(/stop-color/g, 'stopColor')
    .replace(/stop-opacity/g, 'stopOpacity')
    .replace(/clip-path/g, 'clipPath')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stroke-miterlimit/g, 'strokeMiterlimit')
    .replace(/vector-effect/g, 'vectorEffect')
    .replace(/class="/g, 'className="');
    
  // Handle xlink:href
  svg = svg.replace(/xlink:href/g, 'xlinkHref');
  svg = svg.replace(/xmlns:xlink/g, 'xmlnsXlink');

  // Convert style="a:b;c:d" to style={{a: 'b', c: 'd'}}
  svg = svg.replace(/style="([^"]*)"/g, function(match, p1) {
    const parts = p1.split(';').filter(Boolean);
    const objStr = parts.map(part => {
      const kv = part.split(':');
      if(kv.length === 2) {
        const key = kv[0].trim().replace(/-([a-z])/g, (m, c) => c.toUpperCase());
        return `${key}: '${kv[1].trim()}'`;
      }
      return '';
    }).filter(Boolean).join(', ');
    return `style={{ ${objStr} }}`;
  });

  svg = svg.replace(/<svg([^>]*)>/, '<svg$1 {...props}>');

  const component = `import React from 'react';\n\nexport default function ${componentName}(props: React.SVGProps<SVGSVGElement>) {\n  return (\n    ${svg}\n  );\n}\n`;
  fs.writeFileSync(outputName, component);
}

createSvgComponent('public/logo_modified.svg', 'src/components/LogoModified.tsx', 'LogoModified');
