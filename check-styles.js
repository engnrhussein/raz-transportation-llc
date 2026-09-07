const fs = require('fs');

let svg = fs.readFileSync('public/logo_modified.svg', 'utf8');

// See what style strings look like
const styles = svg.match(/style="([^"]*)"/g);
console.log(styles ? styles.slice(0, 10) : 'No styles');
