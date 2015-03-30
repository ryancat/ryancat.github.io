/**
 * @fileOverview The angular-selector-input directive
 *
 * @author rchen
 */

var _ = require('lodash');

// @ngInject
module.exports = /* @ngInject */ function (
    $log,
    $http,
    $q,
    $timeout,
    $filter,
    rcAngularSelectorAjaxService,
    rcAngularSelectorKeyboardEnum,
    rcAngularSelectorConfig,
    usSpinnerService) {

    return {
        restrict: 'E',
        templateUrl: 'angular-selector-input.html',
        link: function (scope, element) {

            var inputBox = element.find('input');

            angular.extend(scope, {

                /**
                 * The search results from remote
                 */
                searchResults: [],
                /**
                 * The bad search results that not passing
                 * #validateSearchResult function
                 */
                badSearchResults: [],
                /**
                 * True if the option is selected after last time
                 * the input box got focused
                 */
                isSelected: false,
                /**
                 * True if there is more results to fetch
                 */
                hasMore: true,
                /**
                 * Index of which option in drop down menu should be highlighted
                 */
                verticalIndex: -1,
                /**
                 * Index of selections
                 */
                horizontalIndex: -1,
                /**
                 * Search params updated and used based on the one given by user
                 */
                updatedSearchParams: angular.copy(scope.searchParams()) || {},

                selectResult: function (searchResult) {

                    // Tell selections we have one more item
                    scope.selectionsObj.appendToSelections(searchResult);
                    // Clean the input box
                    scope.resetInputBox();
                    // Set the status to true after selecting
                    scope.isSelected = true;
                },
                /**
                 * Remove a selection from selections array
                 */
                removeSelection: function (selection) {

                    var defaultSelections = scope.defaultSelections();

                    // Remove the selection
                    scope.selectionsObj.removeSelectionById(selection.__id);

                    // If there are no selection after removal,
                    // and if we have default selections,
                    // we need to open the dropdown box and request
                    // user to select any. Otherwise we will use default selections
                    if (scope.selectionsObj.isEmpty() &&
                        angular.isDefined(defaultSelections)) {

                        // Make sure the input box is focused
                        scope.focusInputBox();
                    }
                },
                /**
                 * The main fetch function
                 * use the searchUrl provided to fetch data with given params
                 * if there is no searchUrl defined, then try to fetch results
                 * from given options
                 */
                fetch: function () {

                	var deferred = $q.defer(),
                		selectOptions = scope.selectOptions();

                	// Get the select options if given
                	selectOptions = angular.isArray(selectOptions) ? selectOptions : [];
                    // Turn the spinner on
                    usSpinnerService.spin(scope.usSpinnerKey);

                    // If there is no search url defined
                    // use options given by user
                    if (!scope.searchUrl()) {
                    	deferred.resolve($filter('filter')(selectOptions, scope.updatedSearchParams.searchString));
                    }
                    // Otherwise, we should use the url to fetch
                    // data from remote side
                    else {
                    	deferred.resolve(rcAngularSelectorAjaxService.getSearchResult(
	                        scope.searchUrl(),
	                        // We need to copy the search params as the cache is using reference
	                        // to the search params object
	                        scope.updatedSearchParams
	                    ));
                    }

                    return deferred.promise.then(scope.fetchSucceed, scope.fetchFailure)
                    .finally(function () {

                        // Turn the spinner off
                        usSpinnerService.stop(scope.usSpinnerKey);

                    });

                },

                fetchSucceed: function (response) {

                    var params, results;

                    if (!scope.searchUrl()) {
                    	params = {
                    		offset: 0,
                    		limit: response.length + 1
                    	}
                    	results = response;
                    } else {
                    	params = response.config.params;
                        results = response.data;
                    }

                    // Get the correct list of data through given resultMap array
                    (scope.resultMap() || []).forEach(function (resultKey) {

                         if (angular.isString(resultKey)) {
                            results = results[resultKey];
                        } else if (angular.isObject(resultKey)) {

                            // Prepend the prefix search results
                            if (params.offset === 0) {
                                results = (scope.prefixSearchResults() || []).concat(results);
                            }

                            // The mapping step
                            // Need to map the id and text to customized field
                            results = results.map(function (result) {

                                // TODO: We are assuming there is no such id and text used
                                // __id and __text
                                return angular.extend(result, {
                                    __id: result[resultKey.id],
                                    __text: result[resultKey.text]
                                });

                            });
                        }

                    });

                    // Replace or attach to the searchResults array
                    if (params.offset === 0) {
                        // Update the current fetch status
                        scope.hasMore = (results.length - (scope.prefixSearchResults() || []).length) === params.limit;
                        scope.replace(results);
                    } else {
                        // Update the current fetch status
                        scope.hasMore = results.length === params.limit;
                        scope.append(results);
                    }

                },

                fetchFailure: function (reason) {

                    $log.error('Fetch failure due to:' + (reason || 'Unknown reason'));

                },



                /**
                 * Replace the search results to given results, and
                 * update the offset
                 */
                replace: function (results) {

                    scope.searchResults = results;
                    scope.updateSearchParams({
                        offset: results.length - (scope.prefixSearchResults() || []).length
                    });

                },
                /**
                 * Append the results to search results, and
                 * update the offset
                 */
                append: function (results) {

                    scope.searchResults = scope.searchResults.concat(results);
                    scope.updateSearchParams({
                        offset: scope.updatedSearchParams.offset + results.length
                    });

                },

                handleInputBoxFocus: function () {

                    scope.isSelecting = true;
                    scope.fetch();
                },

                handleInputBoxBlur: function () {

                    var defaultSelections = scope.defaultSelections();

                    // Clean the input box
                    scope.resetInputBox();
                    // Clean the search params
                    scope.resetSearchParams();
                    // Clean the search result menu
                    scope.searchResults = [];
                    // Reset has more
                    scope.resetHasMore();

                    // Different behavior for multiple and single mode
                    if (scope.isSelected && scope.multiple()) {
                        // Make sure the input box is focused
                        // We need $timeout to bypass the blur
                        scope.focusInputBox();
                    } else {
                        // If we have default and there is no selection
                        // made. We need to use the default selections
                        if (scope.selectionsObj.isEmpty() &&
                            angular.isDefined(defaultSelections)) {
                            scope.loadDefaultSelections();
                        }

                        scope.isSelecting = false;
                    }

                    // Turn the spinner off
                    usSpinnerService.stop(scope.usSpinnerKey);
                },

                handleSearchStringChange: function () {

                    // Reset the offset
                    scope.updateSearchParams({
                        offset: 0
                    });

                    scope.fetch();

                },
                /**
                 * Focus the input box
                 * Do nothing if you click on a existing selection tag
                 * @param  {event} e click event to tell if we click on existing selection
                 */
                focusInputBox: function (e) {

                    var target;

                    if (e) {
                        target = angular.element(e.target);

                        if (target.hasClass('angular-selector-selection') ||
                            target.parent().hasClass('angular-selector-selection')) {
                            return ;
                        }
                    }

                    // Typeahead the most used cached data
                    if (scope.typeahead) {
                        // TODO use cache to implement typeahead
                    }

                    $timeout(function () {
                        inputBox[0].focus();
                        // Set the isSelected status to false
                        // prepare for the next selection
                        scope.isSelected = false;
                    });
                },

                blurInputBox: function () {

                    $timeout(function () {
                        inputBox[0].blur();
                        // Set the isSelected status to false
                        // prepare for the next selection
                        scope.isSelected = false;
                        scope.handleInputBoxBlur();
                    });

                },

                handleKeydownResponse: function (e) {

                    switch (e.keyCode) {

                        case rcAngularSelectorKeyboardEnum.DOWN_ARROW:
                            scope.verticalIndex += 1;
                            scope.refreshDropdownMenu();
                            break;

                        case rcAngularSelectorKeyboardEnum.UP_ARROW:
                            scope.verticalIndex -= 1;
                            scope.refreshDropdownMenu();
                            break;

                        case rcAngularSelectorKeyboardEnum.LEFT_ARROW:
                            scope.horizontalIndex -= 1;
                            break;

                        case rcAngularSelectorKeyboardEnum.RIGHT_ARROW:
                            scope.horizontalIndex += 1;
                            break;

                        case rcAngularSelectorKeyboardEnum.ENTER:
                            scope.selectResult(scope.searchResults[scope.verticalIndex]);
                            scope.isSelected = false;
                            break;

                        case rcAngularSelectorKeyboardEnum.ESCAPE:
                            scope.blurInputBox();
                            break;
                    }

                },
                /**
                 * Reset the keyboard vertical index record
                 */
                resetVerticalIndex: function (indexToReset) {

                    indexToReset = angular.isNumber(indexToReset) ? indexToReset : -1;
                    scope.verticalIndex = indexToReset;
                },

                handleMouseoverOnSearchResults: function (searchResultIndex) {

                    scope.resetVerticalIndex(searchResultIndex);

                },
                /**
                 * Function called when you press down/up arrow key
                 * This will adjust the dropdown scroll accordingly
                 */
                refreshDropdownMenu: function () {

                    // TODO: Get the height of each 'li' element
                    // Move the search result panel up or down when necessary

                },
                /**
                 * Reset the input box
                 */
                resetInputBox: function () {
                    inputBox.val('');
                },
                /**
                 * Reset the search params to default (from user)
                 * @param  {Boolean} isDeepReset flag to reset everything or just
                 *                               offset and search string
                 */
                resetSearchParams: function (isDeepReset) {

                    if (isDeepReset) {
                        scope.updateSearchParams(scope.searchParams());
                    } else {
                        scope.updateSearchParams({
                            offset: scope.searchParams().offset
                        });
                    }

                },
                /**
                 * Reset the offset in search params to 0
                 */
                resetOffset: function () {
                    scope.updatedSearchParams.offset = 0;
                },
                /**
                 * Reset the has more flag to true (default)
                 */
                resetHasMore: function () {
                    scope.hasMore = true;
                },
                /**
                 * Update the search params
                 */
                updateSearchParams: function (searchParams) {

                    if (!angular.isObject(searchParams)) {
                        $log.warn('Invalid search params');
                        return ;
                    }

                    angular.extend(scope.updatedSearchParams, searchParams);
                },
                /**
                 * Validate the search result
                 * A valid search result must have an ID and TEXT
                 */
                validateSearchResult: function (searchResult) {

                    var validated = angular.isDefined(searchResult.__id) &&
                        angular.isDefined(searchResult.__text);

                    if (!validated) {
                        scope.badSearchResults = scope.badSearchResults.concat(
                            _.remove(scope.searchResults, searchResult));
                    }

                    return validated;

                }

            });

            // Watcher on searchString updates
            // Debounce the executing of callback function to reduce ajax calls
            scope.$watch('updatedSearchParams.searchString', _.debounce(function (searchString) {

                if (!angular.isDefined(searchString)) {
                    return ;
                }

                scope.handleSearchStringChange();

            }, 300));

            // Watch on the selections array count
            scope.$watch('selections.length', function (length) {

                // Update the horizontalIndex to be the latest
                // index of selection
                scope.horizontalIndex = length - 1;

            });

            // teardown
            scope.$on('$destroy', function(){});

        }
    };

};
