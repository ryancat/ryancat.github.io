/**
 * @fileOverview The selected item filter
 * Return the selection name with a dividor
 *
 * @author rchen
 */

var _ = require('lodash');

// @ngInject
module.exports = /* @ngInject */ function () {

    return function (selectedItems, keyToShow) {

        if (!angular.isArray(selectedItems)) {
            return selectedItems;
        }

        return _.pluck(selectedItems, keyToShow).join(', ');

    };

};