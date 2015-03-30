/**
 * @fileOverview The main src code
 * @ngInject
 * @author rchen@turn.com
 */

require('../build/template-build');

module.exports = angular
.module('rc/angularSelector', [
    'angularSelectorTemplate',
    // 'turn/infiniteScroll',
    'angularSpinner'
])

// Constants
.constant('rcAngularSelectorKeyboardEnum', require('./js/constants/rcKeyBoardEnum'))
.constant('rcAngularSelectorConfig', require('./js/constants/rcAngularSelectorConfig'))

// Filters
.filter('rcAngularSelectorSelectedItemsFilter', require('./js/filters/rcAngularSelectorSelectedItemsFilter'))

// Factories
.factory('RcAngularSelectorDataFactory', require('./js/factories/RcAngularSelectorDataFactory'))

// Services
.service('rcAngularSelectorAjaxService', require('./js/rcAngularSelectorAjaxService'))

/**
 * The main entry of turn selector
 * @example
 *
 * <div angular-selector
 *        search-url="searchUrl"
 *        search-params="searchParams"
 *        multiple="false"
 *        session="userSession"
 *        typeahead="true"></div>
 *
 * @author rchen@turn.com
 */
.directive('rcAngularSelector', require('./js/directives/rcAngularSelectorDirective'))

/**
 * The selector input
 * @example
 * <div angular-selector-input ng-show="isSelecting"></div>
 *
 * @author rchen@turn.com
 */
.directive('rcAngularSelectorInput', require('./js/directives/rcAngularSelectorInputDirective'))
;
