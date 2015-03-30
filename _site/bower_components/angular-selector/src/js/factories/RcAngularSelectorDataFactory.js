/**
 * @fileOverview The data service for turn selector
 * This data service can be used outside of this module
 * to share information with others
 *
 * @author rchen
 */

var _ = require('lodash');

// @ngInject
module.exports = /* @ngInject */ function () {

    // The selection object
    var Selections = function (selectionsToInit) {

        var selections = angular.isArray(selectionsToInit) ? 
                selectionsToInit : [];

        angular.extend(this, {

            resetSelections: function () {

                this.resetArray(selections);

            },

            getSelections: function () {

                return this.getArray(selections);

            },

            setSelections: function (selectionsToSet) {

                this.setArray(selections, selectionsToSet);

            },

            appendToSelections: function (selectionsToAppend) {

                this.addToArray(selections, selectionsToAppend, true, '__id');

            },

            removeSelectionById: function (selectionId) {

                this.removeItemByKey(selections, '__id', selectionId);

            },
            /**
             * True if there is empty selection
             */
            isEmpty: function () {

                return selections.length === 0;

            }
        });

    };

    // The prototype of selections
    // TODO: This is also reused in segmentDataBrowserService
    // I think we can move them to a higher level of prototype
    Selections.prototype = {

        /**
         * Set given array with dest array.
         * Not to use outside
         * @param {Array}  array      Dest array
         * @param {Array}  arrayToSet Src array
         * will have new memory location
         */
        setArray: function (array, arrayToSet) {

            if (!angular.isArray(arrayToSet)) {
                $log.warn('Invalid array to set');
                return false;
            }

            array.length = 0;
            Array.prototype.push.apply(array, arrayToSet);
            
            return true;

        },
        /**
         * Get reference of given array.
         * Not to use outside
         */
        getArray: function (array) {

            return array;

        },
        /**
         * Reset the src array without changing the
         * memory location.
         * Not to use outside
         */
        resetArray: function (array) {

            array.length = 0;

        },
        /**
         * Add one or more items into src array.
         * Not to use outside
         * @param {Array}  array     src array
         * @param {Items}  items     item(s) to add
         * @param {Boolean} isUnique  flag to uniq the result
         * @param {String}  uniqueKey if isUnique set to true, 
         *                            what key to uniq with.
         *                            Default to 'id'
         */
        addToArray: function (array, items, isUnique, uniqueKey) {

            var uniqueArray;

            if (!angular.isArray(items) &&
                !angular.isObject(items)) {
                $log.warn('Invalid items to add');
                return ;
            }

            if (angular.isArray(items)) {
                Array.prototype.push.apply(array, items);
            } else {
                array.push(items);
            }

            // Unique the array if requested
            if (isUnique) {
                uniqueArray = _.uniq(array, uniqueKey || 'id');
                this.resetArray(array);
                Array.prototype.push.apply(array, uniqueArray);
            }
            
        }, 
        /**
         * Remove item from array based on given key and value.
         * Not to use outside
         * @param  {Array} array The src array
         * @param  {String} key   The key to match
         * @param  {Object} value The value to match given key using '==='
         */
        removeItemByKey: function (array, key, value) {

            _.remove(array, function (item) {

                return item[key] === value;

            });

        }
    };

    return Selections;
};