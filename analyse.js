var _ = require('lodash');

function analyse() {
    var passed = 0;
    var failedOn = [];
    for (var i = 100; i >= 0; i--) {

        var result = require('./run')();
        if (result.succeeded) {
            passed++;
        } else {
            failedOn.push(result.stuckOn)
            failedOn = _.unique(failedOn);
        }
    };
    console.log(passed + '% success rate');
    console.log('got stuck on', failedOn);
}

analyse();