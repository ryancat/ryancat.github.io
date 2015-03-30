angular.module('angularSelectorTemplate', ['angular-selector-input.html', 'angular-selector.html']);

angular.module("angular-selector-input.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angular-selector-input.html",
    "<div class=\"rc-angular-selector-input\">\n" +
    "\n" +
    "    <div class=\"rc-angular-selector-input-overlay\"\n" +
    "        ng-show=\"isDisabled()\"></div>\n" +
    "\n" +
    "    <!-- The input box for searching -->\n" +
    "    <ul class=\"rc-angular-selector-selections rc-clearfix\"\n" +
    "        ng-click=\"focusInputBox($event)\">\n" +
    "\n" +
    "        <li class=\"rc-angular-selector-selection rc-pull-left rc-clearfix\"\n" +
    "            ng-class=\"{ 'is-multiple': multiple(), 'has-selection': selections.length > 0 }\"\n" +
    "            ng-repeat=\"selection in selections track by $index\">\n" +
    "            <span class=\"rc-pull-left\">{{ selection.__text }}</span>\n" +
    "            <!-- <span class=\"rc-remove-icon rc-pull-right icon-cancel-circle\"\n" +
    "            ng-click=\"removeSelection(selection)\"></span> -->\n" +
    "            <span class=\"rc-remove-icon rc-pull-right\"\n" +
    "            	ng-click=\"removeSelection(selection)\">\n" +
    "            	<svg class=\"rc-icon rc-icon-cancel-circle\"><use xlink:href=\"#icon-cancel-circle\"></use></svg>\n" +
    "            </span>\n" +
    "        </li>\n" +
    "\n" +
    "        <li class=\"rc-angular-selector-search-field rc-pull-left\"\n" +
    "            ng-hide=\"selections.length > 0 && !multiple()\">\n" +
    "            <input type=\"text\"\n" +
    "                ng-model=\"updatedSearchParams.searchString\"\n" +
    "                ng-focus=\"handleInputBoxFocus()\"\n" +
    "                ng-blur=\"handleInputBoxBlur()\"\n" +
    "                ng-keydown=\"handleKeydownResponse($event)\"></input>\n" +
    "\n" +
    "            <span\n" +
    "                us-spinner=\"usSpinnerOpts\"\n" +
    "                spinner-key=\"usSpinnerKey\"></span>\n" +
    "        </li>\n" +
    "\n" +
    "    </ul>\n" +
    "\n" +
    "    <!-- The search result panel -->\n" +
    "    <div class=\"rc-angular-selector-search-results-wrapper\">\n" +
    "        <div ng-show=\"isSelecting\"\n" +
    "            class=\"rc-angular-selector-search-results\">\n" +
    "\n" +
    "            <!-- <div infinite-scroll=\"fetch()\"\n" +
    "                infinite-scroll-active=\"isSelecting && hasMore\"\n" +
    "                infinite-scroll-is-local=\"true\"\n" +
    "                class=\"rc-angular-selector-search-results-menu\">\n" +
    "                <ul>\n" +
    "                    <li ng-repeat=\"searchResult in searchResults track by $index\"\n" +
    "                        class=\"rc-angular-selector-search-result\"\n" +
    "                        ng-class=\"{ 'is-highlighted': $index == verticalIndex, 'is-end-prefix': $index == prefixSearchResults().length - 1 }\"\n" +
    "                        ng-mouseover=\"handleMouseoverOnSearchResults($index)\"\n" +
    "                        ng-mousedown=\"selectResult(searchResult)\"\n" +
    "                        ng-show=\"validateSearchResult(searchResult)\">\n" +
    "\n" +
    "                        <span>{{ searchResult.__text }}</span>\n" +
    "\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div> -->\n" +
    "\n" +
    "\n" +
    "            <ul class=\"rc-angular-selector-search-results-menu\">\n" +
    "                <li ng-repeat=\"searchResult in searchResults track by $index\"\n" +
    "                    class=\"rc-angular-selector-search-result\"\n" +
    "                    ng-class=\"{ 'is-highlighted': $index == verticalIndex, 'is-end-prefix': $index == prefixSearchResults().length - 1 }\"\n" +
    "                    ng-mouseover=\"handleMouseoverOnSearchResults($index)\"\n" +
    "                    ng-mousedown=\"selectResult(searchResult)\"\n" +
    "                    ng-show=\"validateSearchResult(searchResult)\">\n" +
    "\n" +
    "                    <span>{{ searchResult.__text }}</span>\n" +
    "\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angular-selector.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angular-selector.html",
    "<div class=\"rc-angular-selector rc-clearfix\">\n" +
    "\n" +
    "	<!-- The svg defs used by the delete icon -->\n" +
    "	<svg display=\"none\" width=\"0\" height=\"0\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n" +
    "	<defs>\n" +
    "	<symbol id=\"icon-cancel-circle\" viewBox=\"0 0 1024 1024\">\n" +
    "		<title>cancel-circle</title>\n" +
    "		<path class=\"path1\" d=\"M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z\"></path>\n" +
    "		<path class=\"path2\" d=\"M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z\"></path>\n" +
    "	</symbol>\n" +
    "	</defs>\n" +
    "	</svg>\n" +
    "\n" +
    "    <span class=\"rc-angular-selector-label rc-selector-result rc-pull-left\"\n" +
    "        ng-hide=\"isSelecting || isHovering || selections.length == 0\"\n" +
    "        ng-mouseover=\"isHovering = true\">\n" +
    "        {{ selections || [] | rcAngularSelectorSelectedItemsFilter : '__text' }}</span>\n" +
    "\n" +
    "    <rc-angular-selector-input\n" +
    "        class=\"rc-angular-selector-input-wrapper rc-pull-left\"\n" +
    "        ng-class=\"{ 'has-selection': selections.length > 0, 'is-multiple': multiple }\"\n" +
    "        ng-show=\"isSelecting || isHovering || selections.length == 0\"\n" +
    "        ng-mouseleave=\"isHovering = false\"></rc-angular-selector-input>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
