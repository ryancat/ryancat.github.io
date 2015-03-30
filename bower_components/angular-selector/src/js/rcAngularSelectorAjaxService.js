/**
 * @fileOverview The ajax service for fetching data
 *
 * @author rchen
 */

// @ngInject

module.exports = /* @ngInject */ function ($q, $http) {

    angular.extend(this, {

        /**
         * Get the search result by given url and params
         * Return cached result if we cached before
         */
        getSearchResult: function (url, params) {

             return $http.get(url, {
                    params: params,
                    // Cache the query results
                    cache: true
                });

        }

    });

};
