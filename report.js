var run = require('./run')
var result = run();
while (!result.succeeded) {
    result = run();
}
console.log(result.assignments)