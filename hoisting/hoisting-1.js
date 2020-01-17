// Steven Hancock

// hoisting : The javascript enginer scans the code for function
// and variable declarations and adds them to memory

hosting();

function hosting() {
  console.log(hoist);

  var what = 'Variable and function declarations.';

  console.log('What is hoisted? ' + what);

  var hoist = 'to lift or raise up.';

  console.log('Hoist means ' + hoist);
}
