/**
 * @fileOverview The angular-selector directive
 *
 * @author rchen
 */

var _ = require('lodash');

// @ngInject
module.exports = /* @ngInject */ function (
	$log,
	$document,
	$timeout,
	RcAngularSelectorDataFactory,
	rcAngularSelectorConfig) {

    return {
        restrict: 'E',
        scope: {

            selections: '=',
            searchUrl: '&',
            searchParams: '&',
            isDisabled: '&',
            resultMap: '&',
            selectOptions: '&',
            multiple: '&',
            prefixSearchResults: '&',
            usSpinnerOptions: '&',
            defaultSelections: '&'

        },
        templateUrl: 'angular-selector.html',
        link: {
        	pre: function (scope) {

        		// Make sure we have some default search
        		// params. This is for both static and
        		// ajax way of fetching search result
        		scope.searchParams = scope.searchParams() ?
        			scope.searchParams :
        			function () {
	        			return {
	        				offset: 0,
	        				limit: rcAngularSelectorConfig.SEARCH_RESULT_LIMIT
	        			}
        			};

        	},

        	post: function (scope, element) {
        		// Validate the attributes
	            if (!angular.isArray(scope.selections)) {
	                $log.error('Invalid selections attribute');
	                return ;
	            }

	            if (!angular.isArray(scope.resultMap())) {
	                scope.resultMap = function () {
	                    return [{
	                        id: 'id',
	                        text: 'text'
	                    }];
	                };
	            }

	            angular.extend(scope, {

	                // We need to create a new selections for each selector in the
	                // same web app
	                selectionsObj: new RcAngularSelectorDataFactory(scope.selections),
	                /**
	                 * Selecting status flag
	                 * This flag is true whenever input box is fucused
	                 */
	                isSelecting: false,
	                /**
	                 * Use current scope's id (unique) for the only spinner in
	                 * selector
	                 */
	                usSpinnerKey: scope.$id,
	                /**
	                 * Customize the spinner style
	                 */
	                usSpinnerOpts: scope.usSpinnerOptions() || {

	                    length: 3, // The length of each line
	                    width: 2, // The line thickness
	                    radius: 3, // The radius of the inner circle
	                    top: '50%', // Top position relative to parent
	                    left: '90%' // Left position relative to parent

	                },

	                init: function () {

	                    var defaultSelections = scope.defaultSelections();

	                    // Get reference to selections
	                    // Do not use scope.selections directly. Always use
	                    // api given from selectionsObj.
	                    scope.selections = scope.selectionsObj.getSelections();

	                    // Set the default selection(s) if any
	                    if (angular.isDefined(defaultSelections)) {
	                        scope.loadDefaultSelections();
	                    }

	                },
	                /**
	                 * Extend __id and __text field for selections
	                 */
	                prepareSelection: function (selection) {

	                    if (angular.isDefined(selection.__id) &&
	                        angular.isDefined(selection.__text)) {
	                        return ;
	                    }

	                    angular.extend(selection, {

	                        __id: selection[_.last(scope.resultMap()).id] || selection.id,
	                        __text: selection[_.last(scope.resultMap()).text] || selection.text,

	                    });

	                },
	                /**
	                 * Load the default selections
	                 */
	                loadDefaultSelections: function () {

	                    var defaultSelections = scope.defaultSelections();

	                    // Prepare the selection
	                    _.flatten([defaultSelections]).forEach(scope.prepareSelection);
	                    scope.selectionsObj.appendToSelections(defaultSelections);

	                }
	            });

	            scope.init();

	            scope.$watch('selections.length', function (length) {

	                if (length === 0) {
	                    return ;
	                }

	                // Make sure all selection has correct hidden fields to
	                // their id and text
	                scope.selections.forEach(scope.prepareSelection);

	            });

	            // teardown
	            scope.$on('$destroy', function(){});
        	}
        }
    };

};
