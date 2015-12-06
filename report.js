var run = require('./run')
var result = run();
while (!result.succeeded) {
    result = run();
}

for (var i = result.assignments.length - 1; i >= 0; i--) {
    console.log(result.assignments[i])
};