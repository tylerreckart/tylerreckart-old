'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extended = undefined;
exports.formatDate = formatDate;
exports.handleStringLength = handleStringLength;
exports.readingTime = readingTime;
exports.summarize = summarize;

var _aphrodite = require('aphrodite');

/**
 *
 *
 * @export
 * @param {any} timestamp
 * @returns
 */
function formatDate(timestamp) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var date = new Date(parseInt(timestamp, 10));

  var month = months[date.getMonth()];
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();

  return month + ' ' + day + ', ' + year;
}

/**
 *
 *
 * @export
 * @param {any} string
 * @param {any} start
 * @param {any} end
 * @returns
 */
function handleStringLength(string, start, end) {
  if (string.length > end) {
    return string.substring(start, end).replace(/^\s+|\s+$/g, '') + '...';
  }

  return string;
}

/**
 *
 *
 * @export
 * @param {any} string
 * @returns
 */
function readingTime(string) {
  var minutes = Math.floor(string.split(' ').length / 220);

  return '(' + minutes + ' minute read)';
}

/**
 *
 *
 * @export
 * @param {any} string
 * @returns
 */
function summarize(string) {
  if (string.length > 400) {
    return handleStringLength(string, 0, 400);
  }

  return string;
}

var globalSelectorHandler = function globalSelectorHandler(selector, _, generateSubtreeStyles) {
  if (selector[0] !== '*') {
    return null;
  }
  return generateSubtreeStyles(selector.slice(1));
};

var globalExtension = { selectorHandler: globalSelectorHandler };

var extended = exports.extended = _aphrodite.StyleSheet.extend([globalExtension]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9jb21wb25lbnRVdGlscy5qcyJdLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwiaGFuZGxlU3RyaW5nTGVuZ3RoIiwicmVhZGluZ1RpbWUiLCJzdW1tYXJpemUiLCJ0aW1lc3RhbXAiLCJtb250aHMiLCJkYXRlIiwiRGF0ZSIsInBhcnNlSW50IiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldFVUQ0RhdGUiLCJ5ZWFyIiwiZ2V0VVRDRnVsbFllYXIiLCJzdHJpbmciLCJzdGFydCIsImVuZCIsImxlbmd0aCIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic3BsaXQiLCJnbG9iYWxTZWxlY3RvckhhbmRsZXIiLCJzZWxlY3RvciIsIl8iLCJnZW5lcmF0ZVN1YnRyZWVTdHlsZXMiLCJzbGljZSIsImdsb2JhbEV4dGVuc2lvbiIsInNlbGVjdG9ySGFuZGxlciIsImV4dGVuZGVkIiwiZXh0ZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7UUFPZ0IsQSxhQUFBLEE7UUFpQ0EsQSxxQkFBQSxBO1FBZUEsQSxjQUFBLEE7UUFhQSxBLFlBQUEsQTs7QUFRaEI7O0FBNUVBOzs7Ozs7O0FBT08sU0FBUyxBQUFULFdBQW9CLEFBQXBCLFdBQStCLEFBQ3BDO01BQU0sU0FBUyxDQUNiLEFBRGEsT0FFYixBQUZhLE9BR2IsQUFIYSxPQUliLEFBSmEsT0FLYixBQUxhLE9BTWIsQUFOYSxPQU9iLEFBUGEsT0FRYixBQVJhLE9BU2IsQUFUYSxPQVViLEFBVmEsT0FXYixBQVhhLEFBQWYsQUFjQTs7TUFBTSxPQUFPLElBQUksQUFBSixLQUFTLFNBQVMsQUFBVCxXQUFvQixBQUFwQixBQUFULEFBQWIsQUFFQTs7TUFBTSxRQUFRLE9BQU8sS0FBSyxBQUFMLEFBQVAsQUFBZCxBQUNBO01BQU0sTUFBTSxLQUFLLEFBQUwsQUFBWixBQUNBO01BQU0sT0FBTyxLQUFLLEFBQUwsQUFBYixBQUVBOztTQUFVLEFBQVYsY0FBbUIsQUFBbkIsYUFBMkIsQUFBM0IsQUFDRDs7O0FBRUQ7Ozs7Ozs7OztBQVNPLFNBQVMsQUFBVCxtQkFBNEIsQUFBNUIsUUFBb0MsQUFBcEMsT0FBMkMsQUFBM0MsS0FBZ0QsQUFDckQ7TUFBSSxPQUFPLEFBQVAsU0FBZ0IsQUFBcEIsS0FBeUIsQUFDdkI7V0FBVSxPQUFPLEFBQVAsVUFBaUIsQUFBakIsT0FBd0IsQUFBeEIsS0FBNkIsQUFBN0IsUUFBcUMsQUFBckMsY0FBbUQsQUFBbkQsQUFBVixNQUNEO0FBRUQ7O1NBQU8sQUFBUCxBQUNEOzs7QUFFRDs7Ozs7OztBQU9PLFNBQVMsQUFBVCxZQUFxQixBQUFyQixRQUE2QixBQUNsQztNQUFNLFVBQVUsS0FBSyxBQUFMLE1BQVcsT0FBTyxBQUFQLE1BQWEsQUFBYixLQUFrQixBQUFsQixTQUEyQixBQUF0QyxBQUFoQixBQUVBOztlQUFXLEFBQVgsVUFDRDs7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTLEFBQVQsVUFBbUIsQUFBbkIsUUFBMkIsQUFDaEM7TUFBSSxPQUFPLEFBQVAsU0FBZ0IsQUFBcEIsS0FBeUIsQUFDdkI7V0FBTyxtQkFBbUIsQUFBbkIsUUFBMkIsQUFBM0IsR0FBOEIsQUFBOUIsQUFBUCxBQUNEO0FBRUQ7O1NBQU8sQUFBUCxBQUNEOzs7QUFJRCxJQUFNLHdCQUF3QixTQUF4QixBQUF3QixzQkFBQyxBQUFELFVBQVcsQUFBWCxHQUFjLEFBQWQsdUJBQXdDLEFBQ3BFO01BQUksU0FBUyxBQUFULE9BQWdCLEFBQXBCLEtBQXlCLEFBQ3ZCO1dBQU8sQUFBUCxBQUNEO0FBQ0Q7U0FBTyxzQkFBc0IsU0FBUyxBQUFULE1BQWUsQUFBZixBQUF0QixBQUFQLEFBQ0Q7QUFMRDs7QUFPQSxJQUFNLGtCQUFrQixFQUFFLGlCQUFpQixBQUFuQixBQUF4Qjs7QUFFTyxJQUFNLDhCQUFXLHNCQUFXLEFBQVgsT0FBa0IsQ0FBQyxBQUFELEFBQWxCLEFBQWpCIiwiZmlsZSI6ImNvbXBvbmVudFV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmVja2FydC9Db2RlL3R5bGVycmVja2FydC5jb20ifQ==