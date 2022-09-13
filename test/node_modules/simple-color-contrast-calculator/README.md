# Simple Color Contrast Calculator

Simple color contrast calculator, given two colors it returns the contrast. Accepts either Hex code (must start with #) or RGB array.


```javascript
npm i simple-color-contrast-calculator
```

example usage

```javascript
import contrast from "simple-color-contrast-calculator"

console.log(contrast("#FFFFFF","#000000"))
// 21
console.log(contrast([255,255,255],[0,0,0]))
// 21
```

```javascript
const contrast = require('simple-color-contrast-calculator');

console.log(contrast("#FFFFFF","#000000"))
// 21
console.log(contrast([255,255,255],[0,0,0]))
// 21
```

# Licence
MIT
