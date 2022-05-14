/*
https://oj.lidemy.com/problem/1042
 */

var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  console.log(toLowerCase(lines[0]))
}

// LIOJ 1042：String toLowerCase
function toLowerCase(str) {
  const ascA = 'A'.charCodeAt()
  const ascZ = 'Z'.charCodeAt()
  const asca = 'a'.charCodeAt()
  const diff = asca - ascA

  let result = ''
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt()
    if ((code >= ascA) && (code <= ascZ)) {
      result += String.fromCharCode(code + diff)
    } else {
      result += str[i]
    }
  }
  return result
}

/*
solve(["ABCefg!!"])
//*/
