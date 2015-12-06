var run = require('./run')
var result = run();
var runs = 0
while (!result.succeeded && runs < 1000) {
    result = run();
    runs++;
}

if (runs === 1000) {
    console.log('could not find a way through your groups.json in 1000 attempts');
    return;
}

for (var i = result.assignments.length - 1; i >= 0; i--) {
    console.log(result.assignments[i])
};