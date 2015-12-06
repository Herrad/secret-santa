var _ = require('lodash');

module.exports = function createGenerator(groups) {

    function getApprorpiateFamilyFor(family, collection) {
        return _.chain(collection)
            .reject({
                name: family.name
            })
            .reject({
                siblings: family.siblings
            })
            .reject({
                family: family.family
            })
            .filter(function (other) {
                if (other.assigned) {
                    return false;
                }
                return true;
            })
            .shuffle()
            .first()
            .value();

    }

    function getAllUnassigned(collection) {
        return _.filter(collection, function (other) {
            if (other.assigned) {
                return false;
            }
            return true;
        });
    }

    return {
        generate: function () {
            var notMapped = _.cloneDeep(groups);
            var family = notMapped[0];
            var numberOfIterations = 0
            var assignments = []
            var remaining = 0;

            while (notMapped.length > 1 && numberOfIterations < 1000) {
                var assignTo = getApprorpiateFamilyFor(family, notMapped);
                if (!assignTo) {
                    remaining = notMapped.length + 1;
                    break;
                }
                family.assigned = assignTo.name

                assignments.push(family.name + ' -> ' + family.assigned);
                family = _.find(notMapped, {
                    name: assignTo.name
                });
                notMapped = getAllUnassigned(notMapped);
                numberOfIterations++;
            }

            if (notMapped.length > 1) {
                return {
                    succeeded: false,
                    assignments: assignments,
                    remaining: remaining,
                    stuckOn: family.name
                }
            }

            notMapped[0].assigned = groups[0].name
            assignments.push(notMapped[0].name + ' -> ' + notMapped[0].assigned);
            return {
                succeeded: true,
                assignments: assignments,
                remaining: remaining
            };
        }
    }

}