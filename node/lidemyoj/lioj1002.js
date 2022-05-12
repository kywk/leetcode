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
  for (var i = 0; i < lines.length; i++)
  {
    var tmp = lines[i].split(' ')
    a = Number(tmp[0])
    b = Number(tmp[1])
    if ((a == 0) && (b == 0))
      break

    if (a > b)
      console.log(a)
    else
      console.log(b)
  }
}
