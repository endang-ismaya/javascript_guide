let re;
re = /hello/i; // Literal Characters

// String to match
const str = 'Hello World';

// Metacharacter Symbols
re = /^h/i; // ^ Must start with
re = /d$/i; // $ Must End with
re = /h.llo/i; // Matches any ONE Character
re = /h*llo/i; // Matches any char 0 or more times
re = /gre?a?y/i; // optional char
re = /gre?a?y\?/i; // Escape char

// Brackets [] -> Character Sets
re = /gr[ae]y/i; // must be an a or e
re = /[GR]ray/i; // match anything except a G or F
re = /[A-Z]ray/; // match any uppercase letter A to Z
re = /[A-Za-z]ray/; // match any letter
re = /[0-9]ray/; // match any digit

// Braces {} -> Quantifiers
re = /Hel{2}o/i; // must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // must occur between {m, n} amount of times
re = /Hel{2}o/i; // must occur at least {m} times

// Parentheses () -> Grouping
re = /([0-9]x){3}/;

// SHorthand Char classes
re = /\w+/; // Word Char
re = /\W+/; // Non-Word
re = /\d+/; // Digit
re = /\D+/; // Non-Digit
re = /\s+/; // white spaces
re = /\S+/; // non-white spaces
re = /Hell\b/; // Word Boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(reg, strs) {
  if (reg.test(str)) {
    console.log(`${strs} matches ${reg.source}`);
  } else {
    console.log(`${strs} un-matches ${reg.source}`);
  }
}

reTest(re, str);
