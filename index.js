import * as color from 'randomcolor';

//Random color via the randomcolor library
let randomColorPicker = color.randomColor();
console.log(randomColorPicker);

// Color based on request
let randomColorRequest = color.randomColor({
  luminosity: 'light',
  hue: 'blue',
});
console.log(randomColorRequest);

let rows = 9;

// pattern variable carries the final pattern in string format
let pattern = '';

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
  for (let num = 1; num <= 31; num++) {
    // print # only if it is the boundary location
    if (n < 4 || n > 6) pattern += '#';
    else {
      if (num === 1 || num === 23) {
        pattern += '#'.repeat(5);
      } else {
        pattern += ' ';
      }
    }
  }
  pattern += '\n';
}
console.log(pattern);
