webpackHotUpdate(5,{

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _templateObject = _taggedTemplateLiteral(['\n  query {\n    allPosts(orderBy: ID_ASC) {\n      nodes {\n        title\n        created\n        content\n        url\n      }\n    }\n  }\n'], ['\n  query {\n    allPosts(orderBy: ID_ASC) {\n      nodes {\n        title\n        created\n        content\n        url\n      }\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  @media (max-width: 700px) {\n    display: block;\n    padding: 0 1em;\n  }\n'], ['\n  display: block;\n  @media (max-width: 700px) {\n    display: block;\n    padding: 0 1em;\n  }\n']);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(566);

var _recompose = __webpack_require__(589);

var _reactApollo = __webpack_require__(591);

var _styledComponents = __webpack_require__(402);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Header = __webpack_require__(626);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(627);

var _Footer2 = _interopRequireDefault(_Footer);

var _Feed = __webpack_require__(652);

var _Feed2 = _interopRequireDefault(_Feed);

var _Pagination = __webpack_require__(657);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _apolloClient = __webpack_require__(592);

var _apolloLinkHttp = __webpack_require__(673);

var _apolloCacheInmemory = __webpack_require__(686);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

// Components


// Apollo


// by default, this client will send queries to `/graphql` (relative to the URL of your app)
var client = new _apolloClient.ApolloClient({
  link: (0, _apolloLinkHttp.createHttpLink)({ uri: 'http://localhost:8080/graphql' }),
  cache: new _apolloCacheInmemory.InMemoryCache()
});

var QUERY = (0, _reactApollo.gql)(_templateObject);

var Rect = _styledComponents2.default.div(_templateObject2);

var Home = function Home(props) {
  var posts = [];
  if (props.data.allPosts) {
    posts = props.data.allPosts.nodes;
  }

  var node = _react2.default.createElement(Rect, null, _react2.default.createElement(_Feed2.default, _extends({}, props, { posts: posts })));

  return _react2.default.createElement(_reactApollo.ApolloProvider, { client: client }, _react2.default.createElement(_Header2.default, props), posts.length > 0 ? node : null, _react2.default.createElement(_Footer2.default, null));
};

// Home.defaultProps = {
//   posts: [],
// };

// Home.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.numberd,
//     created: PropTypes.number,
//     public: PropTypes.bool,
//     title: PropTypes.string,
//     content: PropTypes.string,
//     url: PropTypes.string
//   })),
// };

exports.default = (0, _reactApollo.graphql)(QUERY)(Home);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNsaWVudCIsImxpbmsiLCJ1cmkiLCJjYWNoZSIsIlFVRVJZIiwiUmVjdCIsImRpdiIsIkhvbWUiLCJwcm9wcyIsInBvc3RzIiwiZGF0YSIsImFsbFBvc3RzIiwibm9kZXMiLCJub2RlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFWQTs7O0FBTUE7OztBQU1BO0FBQ0EsSUFBTTtRQUNFLG9DQUFlLEVBQUUsS0FETyxBQUN4QixBQUFlLEFBQU8sQUFDNUI7U0FBTyx5QkFGVCxBQUFlLEFBQWlCO0FBQUEsQUFDOUIsQ0FEYTs7QUFLZixJQUFNLDhCQUFOOztBQWFBLElBQU0sT0FBTywyQkFBUCxBQUFjLElBQXBCOztBQVFBLElBQU0sT0FBTyxTQUFQLEFBQU8sS0FBQSxBQUFDLE9BQVUsQUFDdEI7TUFBSSxRQUFKLEFBQVksQUFDWjtNQUFJLE1BQUEsQUFBTSxLQUFWLEFBQWUsVUFBVSxBQUN2QjtZQUFRLE1BQUEsQUFBTSxLQUFOLEFBQVcsU0FBbkIsQUFBNEIsQUFDN0I7QUFFRDs7TUFBTSxPQUNKLGdCQUFDLGNBQUQsTUFDRSxpRUFBQSxBQUFVLFNBQU8sT0FGckIsQUFDRSxBQUNFLEFBQXdCLEFBSTVCOztTQUNFLGdCQUFBLDJCQUFBLGtCQUFnQixRQUFoQixBQUF3QixBQUN0QiwwREFERixBQUNFLEFBQVksQUFDWCxjQUFBLEFBQU0sU0FBTixBQUFlLElBQWYsQUFBbUIsT0FGdEIsQUFFNkIsQUFDM0Isc0RBSkosQUFDRSxBQU1IO0FBbkJEOztBQXFCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O2tCQUVlLDBCQUFBLEFBQVEsT0FBUixBQUFlLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyZWNrYXJ0L0NvZGUvdHlsZXJyZWNrYXJ0LmNvbSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/treckart/Code/tylerreckart.com/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/treckart/Code/tylerreckart.com/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives__ = __webpack_require__(678);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fragments__ = __webpack_require__(679);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__fragments__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getFromAST__ = __webpack_require__(665);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transform__ = __webpack_require__(680);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__transform__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storeUtils__ = __webpack_require__(660);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_assign__ = __webpack_require__(666);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__util_assign__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_cloneDeep__ = __webpack_require__(667);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_environment__ = __webpack_require__(661);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_7__util_environment__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_7__util_environment__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_errorHandling__ = __webpack_require__(681);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_isEqual__ = __webpack_require__(682);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_9__util_isEqual__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_maybeDeepFreeze__ = __webpack_require__(683);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_warnOnce__ = __webpack_require__(684);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_11__util_warnOnce__["a"]; });












//# sourceMappingURL=index.js.map

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(677).Observable;


/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isScalarValue */
/* unused harmony export isNumberValue */
/* harmony export (immutable) */ __webpack_exports__["i"] = valueToObjectRepresentation;
/* harmony export (immutable) */ __webpack_exports__["h"] = storeKeyNameFromField;
/* harmony export (immutable) */ __webpack_exports__["b"] = getStoreKeyName;
/* harmony export (immutable) */ __webpack_exports__["a"] = argumentsObjectFromField;
/* harmony export (immutable) */ __webpack_exports__["g"] = resultKeyNameFromField;
/* harmony export (immutable) */ __webpack_exports__["c"] = isField;
/* harmony export (immutable) */ __webpack_exports__["e"] = isInlineFragment;
/* harmony export (immutable) */ __webpack_exports__["d"] = isIdValue;
/* unused harmony export toIdValue */
/* harmony export (immutable) */ __webpack_exports__["f"] = isJsonValue;
/* unused harmony export valueFromNode */
function isScalarValue(value) {
    return ['StringValue', 'BooleanValue', 'EnumValue'].indexOf(value.kind) > -1;
}
function isNumberValue(value) {
    return ['IntValue', 'FloatValue'].indexOf(value.kind) > -1;
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else {
        throw new Error("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\" is not supported.\n                    Use variables instead of inline arguments to overcome this limitation.");
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
function getStoreKeyName(fieldName, args, directives) {
    if (directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var queryArgs_1 = args;
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = queryArgs_1[key];
            });
            return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    if (args) {
        var stringifiedArgs = JSON.stringify(args);
        return fieldName + "(" + stringifiedArgs + ")";
    }
    return fieldName;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
function isIdValue(idObject) {
    return idObject && idObject.type === 'id';
}
function toIdValue(id, generated) {
    if (generated === void 0) { generated = false; }
    return {
        type: 'id',
        id: id,
        generated: generated,
    };
}
function isJsonValue(jsonObject) {
    return (jsonObject != null &&
        typeof jsonObject === 'object' &&
        jsonObject.type === 'json');
}
function defaultValueFromVariable(node) {
    throw new Error("Variable nodes are not supported by valueFromNode");
}
function valueFromNode(node, onVariable) {
    if (onVariable === void 0) { onVariable = defaultValueFromVariable; }
    switch (node.kind) {
        case 'Variable':
            return onVariable(node);
        case 'NullValue':
            return null;
        case 'IntValue':
            return parseInt(node.value);
        case 'FloatValue':
            return parseFloat(node.value);
        case 'ListValue':
            return node.values.map(function (v) { return valueFromNode(v, onVariable); });
        case 'ObjectValue': {
            var value = {};
            for (var _i = 0, _a = node.fields; _i < _a.length; _i++) {
                var field = _a[_i];
                value[field.name.value] = valueFromNode(field.value, onVariable);
            }
            return value;
        }
        default:
            return node.value;
    }
}
//# sourceMappingURL=storeUtils.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export getEnv */
/* unused harmony export isEnv */
/* harmony export (immutable) */ __webpack_exports__["b"] = isProduction;
/* harmony export (immutable) */ __webpack_exports__["a"] = isDevelopment;
/* harmony export (immutable) */ __webpack_exports__["c"] = isTest;
function getEnv() {
    if (typeof process !== 'undefined' && "development") {
        return "development";
    }
    return 'development';
}
function isEnv(env) {
    return getEnv() === env;
}
function isProduction() {
    return isEnv('production') === true;
}
function isDevelopment() {
    return isEnv('development') === true;
}
function isTest() {
    return isEnv('test') === true;
}
//# sourceMappingURL=environment.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(129)))

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

var _visitor = __webpack_require__(685);

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
} /**
   *  Copyright (c) 2015, Facebook, Inc.
   *  All rights reserved.
   *
   *  This source code is licensed under the BSD-style license found in the
   *  LICENSE file in the root directory of this source tree. An additional grant
   *  of patent rights can be found in the PATENTS file in the same directory.
   */

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },

  // Document

  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },

  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet;
    // Anonymous queries with no directives or variable definitions can use
    // the query short form.
    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },


  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue;
    return variable + ': ' + type + wrap(' = ', defaultValue);
  },

  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },

  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },

  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },

  // Fragments

  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },

  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },

  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return 'fragment ' + name + ' on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ') + selectionSet;
  },

  // Value

  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10) {
    var value = _ref10.value;
    return JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return JSON.stringify(value);
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },

  // Directive

  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },

  // Type

  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },

  // Type System Definitions

  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },

  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },

  ScalarTypeDefinition: function ScalarTypeDefinition(_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  },

  ObjectTypeDefinition: function ObjectTypeDefinition(_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ', ')), join(directives, ' '), block(fields)], ' ');
  },

  FieldDefinition: function FieldDefinition(_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '));
  },

  InputValueDefinition: function InputValueDefinition(_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  },

  InterfaceTypeDefinition: function InterfaceTypeDefinition(_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  },

  UnionTypeDefinition: function UnionTypeDefinition(_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), '= ' + join(types, ' | ')], ' ');
  },

  EnumTypeDefinition: function EnumTypeDefinition(_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  },

  EnumValueDefinition: function EnumValueDefinition(_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  },

  InputObjectTypeDefinition: function InputObjectTypeDefinition(_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  },

  TypeExtensionDefinition: function TypeExtensionDefinition(_ref31) {
    var definition = _ref31.definition;
    return 'extend ' + definition;
  },

  DirectiveDefinition: function DirectiveDefinition(_ref32) {
    var name = _ref32.name,
        args = _ref32.arguments,
        locations = _ref32.locations;
    return 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ');
  }
};

/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}

/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */
function block(array) {
  return array && array.length !== 0 ? indent('{\n' + join(array, '\n')) + '\n}' : '{}';
}

/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */
function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && maybeString.replace(/\n/g, '\n  ');
}

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectCache; });
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultNormalizedCacheFactory;
var ObjectCache = (function () {
    function ObjectCache(data) {
        if (data === void 0) { data = {}; }
        this.data = data;
    }
    ObjectCache.prototype.toObject = function () {
        return this.data;
    };
    ObjectCache.prototype.get = function (dataId) {
        return this.data[dataId];
    };
    ObjectCache.prototype.set = function (dataId, value) {
        this.data[dataId] = value;
    };
    ObjectCache.prototype.delete = function (dataId) {
        this.data[dataId] = undefined;
    };
    ObjectCache.prototype.clear = function () {
        this.data = {};
    };
    ObjectCache.prototype.replace = function (newData) {
        this.data = newData || {};
    };
    return ObjectCache;
}());

function defaultNormalizedCacheFactory(seed) {
    return new ObjectCache(seed);
}
//# sourceMappingURL=objectCache.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = validateOperation;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkError; });
/* harmony export (immutable) */ __webpack_exports__["c"] = isTerminating;
/* unused harmony export toPromise */
/* unused harmony export makePromise */
/* unused harmony export fromPromise */
/* harmony export (immutable) */ __webpack_exports__["d"] = transformOperation;
/* harmony export (immutable) */ __webpack_exports__["b"] = createOperation;
/* unused harmony export getKey */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zen_observable__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zen_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zen_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_language_printer__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_language_printer__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw new Error("illegal argument: " + key);
        }
    }
    return operation;
}
var LinkError = (function (_super) {
    __extends(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));

function isTerminating(link) {
    return link.request.length <= 1;
}
function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    console.warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
var makePromise = toPromise;
function fromPromise(promise) {
    return new __WEBPACK_IMPORTED_MODULE_1_zen_observable__(function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["k" /* getOperationName */])(transformedOperation.query)
                : '';
    }
    return transformedOperation;
}
function createOperation(starting, operation) {
    var context = __assign({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = __assign({}, context, next(context));
        }
        else {
            context = __assign({}, context, next);
        }
    };
    var getContext = function () { return (__assign({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    Object.defineProperty(operation, 'toKey', {
        enumerable: false,
        value: function () { return getKey(operation); },
    });
    return operation;
}
function getKey(operation) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_graphql_language_printer__["print"])(operation.query) + "|" + JSON.stringify(operation.variables) + "|" + operation.operationName;
}
//# sourceMappingURL=linkUtils.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getMutationDefinition */
/* harmony export (immutable) */ __webpack_exports__["a"] = checkDocument;
/* harmony export (immutable) */ __webpack_exports__["f"] = getOperationDefinition;
/* harmony export (immutable) */ __webpack_exports__["g"] = getOperationDefinitionOrDie;
/* harmony export (immutable) */ __webpack_exports__["h"] = getOperationName;
/* harmony export (immutable) */ __webpack_exports__["d"] = getFragmentDefinitions;
/* harmony export (immutable) */ __webpack_exports__["i"] = getQueryDefinition;
/* unused harmony export getFragmentDefinition */
/* harmony export (immutable) */ __webpack_exports__["e"] = getMainDefinition;
/* harmony export (immutable) */ __webpack_exports__["b"] = createFragmentMap;
/* harmony export (immutable) */ __webpack_exports__["c"] = getDefaultValues;
/* unused harmony export variablesInOperation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_assign__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storeUtils__ = __webpack_require__(660);


function getMutationDefinition(doc) {
    checkDocument(doc);
    var mutationDef = doc.definitions.filter(function (definition) {
        return definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation';
    })[0];
    if (!mutationDef) {
        throw new Error('Must contain a mutation definition.');
    }
    return mutationDef;
}
function checkDocument(doc) {
    if (doc.kind !== 'Document') {
        throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    }
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw new Error("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
        }
        return definition;
    });
    if (operations.length > 1) {
        throw new Error("Ambiguous GraphQL document: contains " + operations.length + " operations");
    }
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationDefinitionOrDie(document) {
    var def = getOperationDefinition(document);
    if (!def) {
        throw new Error("GraphQL document is missing an operation");
    }
    return def;
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    if (!queryDef || queryDef.operation !== 'query') {
        throw new Error('Must contain a query definition.');
    }
    return queryDef;
}
function getFragmentDefinition(doc) {
    if (doc.kind !== 'Document') {
        throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    }
    if (doc.definitions.length > 1) {
        throw new Error('Fragment must have exactly one definition.');
    }
    var fragmentDef = doc.definitions[0];
    if (fragmentDef.kind !== 'FragmentDefinition') {
        throw new Error('Must be a fragment definition.');
    }
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw new Error('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getDefaultValues(definition) {
    if (definition &&
        definition.variableDefinitions &&
        definition.variableDefinitions.length) {
        var defaultValues = definition.variableDefinitions
            .filter(function (_a) {
            var defaultValue = _a.defaultValue;
            return defaultValue;
        })
            .map(function (_a) {
            var variable = _a.variable, defaultValue = _a.defaultValue;
            var defaultValueObj = {};
            Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["i" /* valueToObjectRepresentation */])(defaultValueObj, variable.name, defaultValue);
            return defaultValueObj;
        });
        return __WEBPACK_IMPORTED_MODULE_0__util_assign__["a" /* assign */].apply(void 0, [{}].concat(defaultValues));
    }
    return {};
}
function variablesInOperation(operation) {
    var names = new Set();
    if (operation.variableDefinitions) {
        for (var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++) {
            var definition = _a[_i];
            names.add(definition.variable.name.value);
        }
    }
    return names;
}
//# sourceMappingURL=getFromAST.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assign;
function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        if (typeof source === 'undefined' || source === null) {
            return;
        }
        Object.keys(source).forEach(function (key) {
            target[key] = source[key];
        });
    });
    return target;
}
//# sourceMappingURL=assign.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneDeep;
function cloneDeep(value) {
    if (Array.isArray(value)) {
        return value.map(function (item) { return cloneDeep(item); });
    }
    if (value !== null && typeof value === 'object') {
        var nextValue = {};
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                nextValue[key] = cloneDeep(value[key]);
            }
        }
        return nextValue;
    }
    return value;
}
//# sourceMappingURL=cloneDeep.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeuristicFragmentMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IntrospectionFragmentMatcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(658);

var haveWarned = false;
var HeuristicFragmentMatcher = (function () {
    function HeuristicFragmentMatcher() {
    }
    HeuristicFragmentMatcher.prototype.ensureReady = function () {
        return Promise.resolve();
    };
    HeuristicFragmentMatcher.prototype.canBypassInit = function () {
        return true;
    };
    HeuristicFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
        var obj = context.store.get(idValue.id);
        if (!obj) {
            return false;
        }
        if (!obj.__typename) {
            if (!haveWarned) {
                console.warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.");
                console.warn('Could not find __typename on Fragment ', typeCondition, obj);
                console.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior " +
                    "and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.");
                if (!Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["t" /* isTest */])()) {
                    haveWarned = true;
                }
            }
            context.returnPartialData = true;
            return true;
        }
        if (obj.__typename === typeCondition) {
            return true;
        }
        Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["x" /* warnOnceInDevelopment */])("You are using the simple (heuristic) fragment matcher, but your queries contain union or interface types.\n     Apollo Client will not be able to able to accurately map fragments." +
            "To make this error go away, use the IntrospectionFragmentMatcher as described in the docs: " +
            "http://dev.apollodata.com/react/initialization.html#fragment-matcher", 'error');
        context.returnPartialData = true;
        return true;
    };
    return HeuristicFragmentMatcher;
}());

var IntrospectionFragmentMatcher = (function () {
    function IntrospectionFragmentMatcher(options) {
        if (options && options.introspectionQueryResultData) {
            this.possibleTypesMap = this.parseIntrospectionResult(options.introspectionQueryResultData);
            this.isReady = true;
        }
        else {
            this.isReady = false;
        }
        this.match = this.match.bind(this);
    }
    IntrospectionFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
        if (!this.isReady) {
            throw new Error('FragmentMatcher.match() was called before FragmentMatcher.init()');
        }
        var obj = context.store.get(idValue.id);
        if (!obj) {
            return false;
        }
        if (!obj.__typename) {
            throw new Error("Cannot match fragment because __typename property is missing: " + JSON.stringify(obj));
        }
        if (obj.__typename === typeCondition) {
            return true;
        }
        var implementingTypes = this.possibleTypesMap[typeCondition];
        if (implementingTypes && implementingTypes.indexOf(obj.__typename) > -1) {
            return true;
        }
        return false;
    };
    IntrospectionFragmentMatcher.prototype.parseIntrospectionResult = function (introspectionResultData) {
        var typeMap = {};
        introspectionResultData.__schema.types.forEach(function (type) {
            if (type.kind === 'UNION' || type.kind === 'INTERFACE') {
                typeMap[type.name] = type.possibleTypes.map(function (implementingType) { return implementingType.name; });
            }
        });
        return typeMap;
    };
    return IntrospectionFragmentMatcher;
}());

//# sourceMappingURL=fragmentMatcher.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteError; });
/* harmony export (immutable) */ __webpack_exports__["b"] = enhanceErrorWithDocument;
/* harmony export (immutable) */ __webpack_exports__["c"] = writeQueryToStore;
/* harmony export (immutable) */ __webpack_exports__["d"] = writeResultToStore;
/* harmony export (immutable) */ __webpack_exports__["e"] = writeSelectionSetToStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_utilities__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectCache__ = __webpack_require__(663);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var WriteError = (function (_super) {
    __extends(WriteError, _super);
    function WriteError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'WriteError';
        return _this;
    }
    return WriteError;
}(Error));

function enhanceErrorWithDocument(error, document) {
    var enhancedError = new WriteError("Error writing result to store for query:\n " + Object(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__["print"])(document));
    enhancedError.message += '\n' + error.message;
    enhancedError.stack = error.stack;
    return enhancedError;
}
function writeQueryToStore(_a) {
    var result = _a.result, query = _a.query, _b = _a.storeFactory, storeFactory = _b === void 0 ? __WEBPACK_IMPORTED_MODULE_2__objectCache__["b" /* defaultNormalizedCacheFactory */] : _b, _c = _a.store, store = _c === void 0 ? storeFactory() : _c, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, _d = _a.fragmentMap, fragmentMap = _d === void 0 ? {} : _d, fragmentMatcherFunction = _a.fragmentMatcherFunction;
    var queryDefinition = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["l" /* getQueryDefinition */])(query);
    variables = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["c" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["e" /* getDefaultValues */])(queryDefinition), variables);
    try {
        return writeSelectionSetToStore({
            dataId: 'ROOT_QUERY',
            result: result,
            selectionSet: queryDefinition.selectionSet,
            context: {
                store: store,
                storeFactory: storeFactory,
                processedData: {},
                variables: variables,
                dataIdFromObject: dataIdFromObject,
                fragmentMap: fragmentMap,
                fragmentMatcherFunction: fragmentMatcherFunction,
            },
        });
    }
    catch (e) {
        throw enhanceErrorWithDocument(e, query);
    }
}
function writeResultToStore(_a) {
    var dataId = _a.dataId, result = _a.result, document = _a.document, _b = _a.storeFactory, storeFactory = _b === void 0 ? __WEBPACK_IMPORTED_MODULE_2__objectCache__["b" /* defaultNormalizedCacheFactory */] : _b, _c = _a.store, store = _c === void 0 ? storeFactory() : _c, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, fragmentMatcherFunction = _a.fragmentMatcherFunction;
    var operationDefinition = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["j" /* getOperationDefinition */])(document);
    var selectionSet = operationDefinition.selectionSet;
    var fragmentMap = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["d" /* createFragmentMap */])(Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["g" /* getFragmentDefinitions */])(document));
    variables = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["c" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["e" /* getDefaultValues */])(operationDefinition), variables);
    try {
        return writeSelectionSetToStore({
            result: result,
            dataId: dataId,
            selectionSet: selectionSet,
            context: {
                store: store,
                storeFactory: storeFactory,
                processedData: {},
                variables: variables,
                dataIdFromObject: dataIdFromObject,
                fragmentMap: fragmentMap,
                fragmentMatcherFunction: fragmentMatcherFunction,
            },
        });
    }
    catch (e) {
        throw enhanceErrorWithDocument(e, document);
    }
}
function writeSelectionSetToStore(_a) {
    var result = _a.result, dataId = _a.dataId, selectionSet = _a.selectionSet, context = _a.context;
    var variables = context.variables, store = context.store, fragmentMap = context.fragmentMap;
    selectionSet.selections.forEach(function (selection) {
        var included = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["v" /* shouldInclude */])(selection, variables);
        if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["o" /* isField */])(selection)) {
            var resultFieldKey = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["u" /* resultKeyNameFromField */])(selection);
            var value = result[resultFieldKey];
            if (included) {
                if (typeof value !== 'undefined') {
                    writeFieldToStore({
                        dataId: dataId,
                        value: value,
                        field: selection,
                        context: context,
                    });
                }
                else {
                    var isDefered = selection.directives &&
                        selection.directives.length &&
                        selection.directives.some(function (directive) { return directive.name && directive.name.value === 'defer'; });
                    if (!isDefered && context.fragmentMatcherFunction) {
                        if (!Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isProduction */])()) {
                            console.warn("Missing field " + resultFieldKey + " in " + JSON.stringify(result, null, 2).substring(0, 100));
                        }
                    }
                }
            }
        }
        else {
            var fragment = void 0;
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["q" /* isInlineFragment */])(selection)) {
                fragment = selection;
            }
            else {
                fragment = (fragmentMap || {})[selection.name.value];
                if (!fragment) {
                    throw new Error("No fragment named " + selection.name.value + ".");
                }
            }
            var matches = true;
            if (context.fragmentMatcherFunction && fragment.typeCondition) {
                var idValue = { type: 'id', id: 'self', generated: false };
                var fakeContext = {
                    store: new __WEBPACK_IMPORTED_MODULE_2__objectCache__["a" /* ObjectCache */]({ self: result }),
                    returnPartialData: false,
                    hasMissingField: false,
                    cacheResolvers: {},
                };
                matches = context.fragmentMatcherFunction(idValue, fragment.typeCondition.name.value, fakeContext);
                if (!Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isProduction */])() && fakeContext.returnPartialData) {
                    console.error('WARNING: heuristic fragment matching going on!');
                }
            }
            if (included && matches) {
                writeSelectionSetToStore({
                    result: result,
                    selectionSet: fragment.selectionSet,
                    dataId: dataId,
                    context: context,
                });
            }
        }
    });
    return store;
}
function isGeneratedId(id) {
    return id[0] === '$';
}
function mergeWithGenerated(generatedKey, realKey, cache) {
    var generated = cache.get(generatedKey);
    var real = cache.get(realKey);
    Object.keys(generated).forEach(function (key) {
        var value = generated[key];
        var realValue = real[key];
        if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["p" /* isIdValue */])(value) && isGeneratedId(value.id) && Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["p" /* isIdValue */])(realValue)) {
            mergeWithGenerated(value.id, realValue.id, cache);
        }
        cache.delete(generatedKey);
        cache.set(realKey, __assign({}, generated, real));
    });
}
function isDataProcessed(dataId, field, processedData) {
    if (!processedData) {
        return false;
    }
    if (processedData[dataId]) {
        if (processedData[dataId].indexOf(field) >= 0) {
            return true;
        }
        else {
            processedData[dataId].push(field);
        }
    }
    else {
        processedData[dataId] = [field];
    }
    return false;
}
function writeFieldToStore(_a) {
    var field = _a.field, value = _a.value, dataId = _a.dataId, context = _a.context;
    var variables = context.variables, dataIdFromObject = context.dataIdFromObject, store = context.store;
    var storeValue;
    var storeObject;
    var storeFieldName = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["w" /* storeKeyNameFromField */])(field, variables);
    var shouldMerge = false;
    var generatedKey = '';
    if (!field.selectionSet || value === null) {
        storeValue =
            value != null && typeof value === 'object'
                ?
                    { type: 'json', json: value }
                :
                    value;
    }
    else if (Array.isArray(value)) {
        var generatedId = dataId + "." + storeFieldName;
        storeValue = processArrayValue(value, generatedId, field.selectionSet, context);
    }
    else {
        var valueDataId = dataId + "." + storeFieldName;
        var generated = true;
        if (!isGeneratedId(valueDataId)) {
            valueDataId = '$' + valueDataId;
        }
        if (dataIdFromObject) {
            var semanticId = dataIdFromObject(value);
            if (semanticId && isGeneratedId(semanticId)) {
                throw new Error('IDs returned by dataIdFromObject cannot begin with the "$" character.');
            }
            if (semanticId) {
                valueDataId = semanticId;
                generated = false;
            }
        }
        if (!isDataProcessed(valueDataId, field, context.processedData)) {
            writeSelectionSetToStore({
                dataId: valueDataId,
                result: value,
                selectionSet: field.selectionSet,
                context: context,
            });
        }
        storeValue = {
            type: 'id',
            id: valueDataId,
            generated: generated,
        };
        storeObject = store.get(dataId);
        if (storeObject && storeObject[storeFieldName] !== storeValue) {
            var escapedId = storeObject[storeFieldName];
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["p" /* isIdValue */])(storeValue) &&
                storeValue.generated &&
                Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["p" /* isIdValue */])(escapedId) &&
                !escapedId.generated) {
                throw new Error("Store error: the application attempted to write an object with no provided id" +
                    (" but the store already contains an id of " + escapedId.id + " for this object. The selectionSet") +
                    " that was trying to be written is:\n" +
                    Object(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__["print"])(field));
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["p" /* isIdValue */])(escapedId) && escapedId.generated) {
                generatedKey = escapedId.id;
                shouldMerge = true;
            }
        }
    }
    var newStoreObj = __assign({}, store.get(dataId), (_b = {}, _b[storeFieldName] = storeValue, _b));
    if (shouldMerge) {
        mergeWithGenerated(generatedKey, storeValue.id, store);
    }
    storeObject = store.get(dataId);
    if (!storeObject || storeValue !== storeObject[storeFieldName]) {
        store.set(dataId, newStoreObj);
    }
    var _b;
}
function processArrayValue(value, generatedId, selectionSet, context) {
    return value.map(function (item, index) {
        if (item === null) {
            return null;
        }
        var itemDataId = generatedId + "." + index;
        if (Array.isArray(item)) {
            return processArrayValue(item, itemDataId, selectionSet, context);
        }
        var generated = true;
        if (context.dataIdFromObject) {
            var semanticId = context.dataIdFromObject(item);
            if (semanticId) {
                itemDataId = semanticId;
                generated = false;
            }
        }
        if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) {
            writeSelectionSetToStore({
                dataId: itemDataId,
                result: item,
                selectionSet: selectionSet,
                context: context,
            });
        }
        var idStoreValue = {
            type: 'id',
            id: itemDataId,
            generated: generated,
        };
        return idStoreValue;
    });
}
//# sourceMappingURL=writeToStore.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ID_KEY; });
/* harmony export (immutable) */ __webpack_exports__["d"] = readQueryFromStore;
/* harmony export (immutable) */ __webpack_exports__["c"] = diffQueryAgainstStore;
/* harmony export (immutable) */ __webpack_exports__["b"] = assertIdValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_anywhere__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_utilities__ = __webpack_require__(658);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var ID_KEY = typeof Symbol !== 'undefined' ? Symbol('id') : '@@id';
function readQueryFromStore(options) {
    var optsPatch = { returnPartialData: false };
    return diffQueryAgainstStore(__assign({}, options, optsPatch)).result;
}
var readStoreResolver = function (fieldName, idValue, args, context, _a) {
    var resultKey = _a.resultKey, directives = _a.directives;
    assertIdValue(idValue);
    var objId = idValue.id;
    var obj = context.store.get(objId);
    var storeKeyName = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["m" /* getStoreKeyName */])(fieldName, args, directives);
    var fieldValue = (obj || {})[storeKeyName];
    if (typeof fieldValue === 'undefined') {
        if (context.cacheResolvers &&
            obj &&
            (obj.__typename || objId === 'ROOT_QUERY')) {
            var typename = obj.__typename || 'Query';
            var type = context.cacheResolvers[typename];
            if (type) {
                var resolver = type[fieldName];
                if (resolver) {
                    fieldValue = resolver(obj, args);
                }
            }
        }
    }
    if (typeof fieldValue === 'undefined') {
        if (!context.returnPartialData) {
            throw new Error("Can't find field " + storeKeyName + " on object (" + objId + ") " + JSON.stringify(obj, null, 2) + ".");
        }
        context.hasMissingField = true;
        return fieldValue;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["r" /* isJsonValue */])(fieldValue)) {
        if (idValue.previousResult &&
            Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["n" /* isEqual */])(idValue.previousResult[resultKey], fieldValue.json)) {
            return idValue.previousResult[resultKey];
        }
        return fieldValue.json;
    }
    if (idValue.previousResult) {
        fieldValue = addPreviousResultToIdValues(fieldValue, idValue.previousResult[resultKey]);
    }
    return fieldValue;
};
function diffQueryAgainstStore(_a) {
    var store = _a.store, query = _a.query, variables = _a.variables, previousResult = _a.previousResult, _b = _a.returnPartialData, returnPartialData = _b === void 0 ? true : _b, _c = _a.rootId, rootId = _c === void 0 ? 'ROOT_QUERY' : _c, fragmentMatcherFunction = _a.fragmentMatcherFunction, config = _a.config;
    var queryDefinition = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["l" /* getQueryDefinition */])(query);
    variables = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["c" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["e" /* getDefaultValues */])(queryDefinition), variables);
    var context = {
        store: store,
        returnPartialData: returnPartialData,
        cacheResolvers: (config && config.cacheResolvers) || {},
        hasMissingField: false,
    };
    var rootIdValue = {
        type: 'id',
        id: rootId,
        previousResult: previousResult,
    };
    var result = Object(__WEBPACK_IMPORTED_MODULE_0_graphql_anywhere__["a" /* default */])(readStoreResolver, query, rootIdValue, context, variables, {
        fragmentMatcher: fragmentMatcherFunction,
        resultMapper: resultMapper,
    });
    return {
        result: result,
        complete: !context.hasMissingField,
    };
}
function assertIdValue(idValue) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["p" /* isIdValue */])(idValue)) {
        throw new Error("Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.");
    }
}
function addPreviousResultToIdValues(value, previousResult) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["p" /* isIdValue */])(value)) {
        return __assign({}, value, { previousResult: previousResult });
    }
    else if (Array.isArray(value)) {
        var idToPreviousResult_1 = new Map();
        if (Array.isArray(previousResult)) {
            previousResult.forEach(function (item) {
                if (item && item[ID_KEY]) {
                    idToPreviousResult_1.set(item[ID_KEY], item);
                }
            });
        }
        return value.map(function (item, i) {
            var itemPreviousResult = previousResult && previousResult[i];
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["p" /* isIdValue */])(item)) {
                itemPreviousResult =
                    idToPreviousResult_1.get(item.id) || itemPreviousResult;
            }
            return addPreviousResultToIdValues(item, itemPreviousResult);
        });
    }
    return value;
}
function resultMapper(resultFields, idValue) {
    if (idValue.previousResult) {
        var currentResultKeys_1 = Object.keys(resultFields);
        var sameAsPreviousResult = Object.keys(idValue.previousResult).reduce(function (sameKeys, key) { return sameKeys && currentResultKeys_1.indexOf(key) > -1; }, true) &&
            currentResultKeys_1.every(function (key) {
                return areNestedArrayItemsStrictlyEqual(resultFields[key], idValue.previousResult[key]);
            });
        if (sameAsPreviousResult) {
            return idValue.previousResult;
        }
    }
    Object.defineProperty(resultFields, ID_KEY, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: idValue.id,
    });
    return resultFields;
}
function areNestedArrayItemsStrictlyEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
        return false;
    }
    return a.every(function (item, i) { return areNestedArrayItemsStrictlyEqual(item, b[i]); });
}
//# sourceMappingURL=readFromStore.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = graphql;
/* unused harmony export merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(658);

function graphql(resolver, document, rootValue, contextValue, variableValues, execOptions) {
    if (execOptions === void 0) { execOptions = {}; }
    var mainDefinition = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["i" /* getMainDefinition */])(document);
    var fragments = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["g" /* getFragmentDefinitions */])(document);
    var fragmentMap = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["d" /* createFragmentMap */])(fragments);
    var resultMapper = execOptions.resultMapper;
    var fragmentMatcher = execOptions.fragmentMatcher || (function () { return true; });
    var execContext = {
        fragmentMap: fragmentMap,
        contextValue: contextValue,
        variableValues: variableValues,
        resultMapper: resultMapper,
        resolver: resolver,
        fragmentMatcher: fragmentMatcher,
    };
    return executeSelectionSet(mainDefinition.selectionSet, rootValue, execContext);
}
function executeSelectionSet(selectionSet, rootValue, execContext) {
    var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
    var result = {};
    selectionSet.selections.forEach(function (selection) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["v" /* shouldInclude */])(selection, variables)) {
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["o" /* isField */])(selection)) {
            var fieldResult = executeField(selection, rootValue, execContext);
            var resultFieldKey = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["u" /* resultKeyNameFromField */])(selection);
            if (fieldResult !== undefined) {
                if (result[resultFieldKey] === undefined) {
                    result[resultFieldKey] = fieldResult;
                }
                else {
                    merge(result[resultFieldKey], fieldResult);
                }
            }
        }
        else {
            var fragment = void 0;
            if (Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["q" /* isInlineFragment */])(selection)) {
                fragment = selection;
            }
            else {
                fragment = fragmentMap[selection.name.value];
                if (!fragment) {
                    throw new Error("No fragment named " + selection.name.value);
                }
            }
            var typeCondition = fragment.typeCondition.name.value;
            if (execContext.fragmentMatcher(rootValue, typeCondition, contextValue)) {
                var fragmentResult = executeSelectionSet(fragment.selectionSet, rootValue, execContext);
                merge(result, fragmentResult);
            }
        }
    });
    if (execContext.resultMapper) {
        return execContext.resultMapper(result, rootValue);
    }
    return result;
}
function executeField(field, rootValue, execContext) {
    var variables = execContext.variableValues, contextValue = execContext.contextValue, resolver = execContext.resolver;
    var fieldName = field.name.value;
    var args = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["b" /* argumentsObjectFromField */])(field, variables);
    var info = {
        isLeaf: !field.selectionSet,
        resultKey: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["u" /* resultKeyNameFromField */])(field),
        directives: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["f" /* getDirectiveInfoFromField */])(field, variables),
    };
    var result = resolver(fieldName, rootValue, args, contextValue, info);
    if (!field.selectionSet) {
        return result;
    }
    if (result == null) {
        return result;
    }
    if (Array.isArray(result)) {
        return executeSubSelectedArray(field, result, execContext);
    }
    return executeSelectionSet(field.selectionSet, result, execContext);
}
function executeSubSelectedArray(field, result, execContext) {
    return result.map(function (item) {
        if (item === null) {
            return null;
        }
        if (Array.isArray(item)) {
            return executeSubSelectedArray(field, item, execContext);
        }
        return executeSelectionSet(field.selectionSet, item, execContext);
    });
}
function merge(dest, src) {
    if (src === null || typeof src !== 'object') {
        return src;
    }
    Object.keys(dest).forEach(function (destKey) {
        if (src.hasOwnProperty(destKey)) {
            merge(dest[destKey], src[destKey]);
        }
    });
    Object.keys(src).forEach(function (srcKey) {
        if (!dest.hasOwnProperty(srcKey)) {
            dest[srcKey] = src[srcKey];
        }
    });
}
//# sourceMappingURL=graphql.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordingCache; });
/* harmony export (immutable) */ __webpack_exports__["b"] = record;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var RecordingCache = (function () {
    function RecordingCache(data) {
        if (data === void 0) { data = {}; }
        this.data = data;
        this.recordedData = {};
    }
    RecordingCache.prototype.record = function (transaction) {
        transaction(this);
        var recordedData = this.recordedData;
        this.recordedData = {};
        return recordedData;
    };
    RecordingCache.prototype.toObject = function () {
        return __assign({}, this.data, this.recordedData);
    };
    RecordingCache.prototype.get = function (dataId) {
        if (this.recordedData.hasOwnProperty(dataId)) {
            return this.recordedData[dataId];
        }
        return this.data[dataId];
    };
    RecordingCache.prototype.set = function (dataId, value) {
        if (this.get(dataId) !== value) {
            this.recordedData[dataId] = value;
        }
    };
    RecordingCache.prototype.delete = function (dataId) {
        this.recordedData[dataId] = undefined;
    };
    RecordingCache.prototype.clear = function () {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) { return _this.delete(dataId); });
        this.recordedData = {};
    };
    RecordingCache.prototype.replace = function (newData) {
        this.clear();
        this.recordedData = __assign({}, newData);
    };
    return RecordingCache;
}());

function record(startingState, transaction) {
    var recordingCache = new RecordingCache(startingState);
    return recordingCache.record(transaction);
}
//# sourceMappingURL=recordingCache.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__httpLink__ = __webpack_require__(674);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return __WEBPACK_IMPORTED_MODULE_0__httpLink__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return __WEBPACK_IMPORTED_MODULE_0__httpLink__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createHttpLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
var parseAndCheckResponse = function (request) { return function (response) {
    return response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            return Promise.reject(parseError);
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            throwServerError(response, result, "Response not successful: Received status code " + response.status);
        }
        if (!result.hasOwnProperty('data') && !result.hasOwnProperty('errors')) {
            throwServerError(response, result, "Server response was missing for query '" + request.operationName + "'.");
        }
        return result;
    });
}; };
var checkFetcher = function (fetcher) {
    if (fetcher.use) {
        throw new Error("\n      It looks like you're using apollo-fetch! Apollo Link now uses native fetch\n      implementation, so apollo-fetch is not needed. If you want to use your existing\n      apollo-fetch middleware, please check this guide to upgrade:\n        https://github.com/apollographql/apollo-link/blob/master/docs/implementation.md\n    ");
    }
};
var warnIfNoFetch = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        var library = 'unfetch';
        if (typeof window === 'undefined')
            library = 'node-fetch';
        throw new Error("fetch is not found globally and no fetcher passed, to fix pass a fetch for\n      your environment like https://www.npmjs.com/package/" + library + ".\n\n      For example:\n        import fetch from '" + library + "';\n        import { createHttpLink } from 'apollo-link-http';\n\n        const link = createHttpLink({ uri: '/graphql', fetch: fetch });\n      ");
    }
};
var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};
var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var uri = linkOptions.uri, fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, requestOptions = __rest(linkOptions, ["uri", "fetch", "includeExtensions"]);
    warnIfNoFetch(fetcher);
    if (fetcher)
        checkFetcher(fetcher);
    if (!fetcher)
        fetcher = fetch;
    if (!uri)
        uri = '/graphql';
    return new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */](function (operation) {
        return new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["b" /* Observable */](function (observer) {
            var _a = operation.getContext(), headers = _a.headers, credentials = _a.credentials, _b = _a.fetchOptions, fetchOptions = _b === void 0 ? {} : _b, contextURI = _a.uri, _c = _a.http, httpOptions = _c === void 0 ? {} : _c;
            var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
            var http = __assign({}, defaultHttpOptions, httpOptions);
            var body = { operationName: operationName, variables: variables };
            if (includeExtensions || http.includeExtensions)
                body.extensions = extensions;
            if (http.includeQuery)
                body.query = Object(__WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__["print"])(query);
            var serializedBody;
            try {
                serializedBody = JSON.stringify(body);
            }
            catch (e) {
                var parseError = new Error("Network request failed. Payload is not serializable: " + e.message);
                parseError.parseError = e;
                throw parseError;
            }
            var options = fetchOptions;
            if (requestOptions.fetchOptions)
                options = __assign({}, requestOptions.fetchOptions, options);
            var fetcherOptions = __assign({ method: 'POST' }, options, { headers: {
                    accept: '*/*',
                    'content-type': 'application/json',
                }, body: serializedBody });
            if (requestOptions.credentials)
                fetcherOptions.credentials = requestOptions.credentials;
            if (credentials)
                fetcherOptions.credentials = credentials;
            if (requestOptions.headers)
                fetcherOptions.headers = __assign({}, fetcherOptions.headers, requestOptions.headers);
            if (headers)
                fetcherOptions.headers = __assign({}, fetcherOptions.headers, headers);
            var _d = createSignalIfSupported(), controller = _d.controller, signal = _d.signal;
            if (controller)
                fetcherOptions.signal = signal;
            fetcher(contextURI || uri, fetcherOptions)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then(parseAndCheckResponse(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};
var HttpLink = (function (_super) {
    __extends(HttpLink, _super);
    function HttpLink(opts) {
        return _super.call(this, createHttpLink(opts).request) || this;
    }
    return HttpLink;
}(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */]));

//# sourceMappingURL=httpLink.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__link__ = __webpack_require__(676);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkUtils__ = __webpack_require__(664);
/* unused harmony reexport createOperation */
/* unused harmony reexport makePromise */
/* unused harmony reexport toPromise */
/* unused harmony reexport fromPromise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zen_observable__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zen_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zen_observable__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2_zen_observable__; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export empty */
/* unused harmony export from */
/* unused harmony export split */
/* unused harmony export concat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApolloLink; });
/* unused harmony export execute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zen_observable__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zen_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zen_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkUtils__ = __webpack_require__(664);


var passthrough = function (op, forward) { return (forward ? forward(op) : __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]()); };
var toLink = function (handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
};
var empty = function () {
    return new ApolloLink(function (op, forward) { return __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"](); });
};
var from = function (links) {
    if (links.length === 0)
        return empty();
    return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
};
var split = function (test, left, right) {
    if (right === void 0) { right = new ApolloLink(passthrough); }
    var leftLink = toLink(left);
    var rightLink = toLink(right);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["c" /* isTerminating */])(leftLink) && Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["c" /* isTerminating */])(rightLink)) {
        return new ApolloLink(function (operation) {
            return test(operation)
                ? leftLink.request(operation) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]()
                : rightLink.request(operation) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return test(operation)
                ? leftLink.request(operation, forward) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]()
                : rightLink.request(operation, forward) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]();
        });
    }
};
var concat = function (first, second) {
    var firstLink = toLink(first);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["c" /* isTerminating */])(firstLink)) {
        console.warn(new __WEBPACK_IMPORTED_MODULE_1__linkUtils__["a" /* LinkError */]("You are calling concat on a terminating link, which will have no effect", firstLink));
        return firstLink;
    }
    var nextLink = toLink(second);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["c" /* isTerminating */])(nextLink)) {
        return new ApolloLink(function (operation) {
            return firstLink.request(operation, function (op) { return nextLink.request(op) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"](); }) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return (firstLink.request(operation, function (op) {
                return nextLink.request(op, forward) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]();
            }) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]());
        });
    }
};
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.prototype.split = function (test, left, right) {
        if (right === void 0) { right = new ApolloLink(passthrough); }
        return this.concat(split(test, left, right));
    };
    ApolloLink.prototype.concat = function (next) {
        return concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw new Error('request is not implemented');
    };
    ApolloLink.empty = empty;
    ApolloLink.from = from;
    ApolloLink.split = split;
    return ApolloLink;
}());

function execute(link, operation) {
    return (link.request(Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["b" /* createOperation */])(operation.context, Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["d" /* transformOperation */])(Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["e" /* validateOperation */])(operation)))) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]());
}
//# sourceMappingURL=link.js.map

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) { (function(fn, name) { if (true) { fn(exports, module); } else if (typeof self !== "undefined") { var e = name === "*" ? self : (name ? self[name] = {} : {}); fn(e, { exports: e }); } })(function(exports, module) { // === Symbol Support ===

function hasSymbol(name) {
  return typeof Symbol === "function" && Boolean(Symbol[name]);
}

function getSymbol(name) {
  return hasSymbol(name) ? Symbol[name] : "@@" + name;
}

// Ponyfill Symbol.observable for interoperability with other libraries
if (typeof Symbol === "function" && !Symbol.observable) {
  Symbol.observable = Symbol("observable");
}

// === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];

  if (value == null)
    return undefined;

  if (typeof value !== "function")
    throw new TypeError(value + " is not a function");

  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== undefined) {
    ctor = ctor[getSymbol("species")];
    if (ctor === null) {
      ctor = undefined;
    }
  }
  return ctor !== undefined ? ctor : Observable;
}

function addMethods(target, methods) {
  Object.keys(methods).forEach(function(k) {
    var desc = Object.getOwnPropertyDescriptor(methods, k);
    desc.enumerable = false;
    Object.defineProperty(target, k, desc);
  });
}

function cleanupSubscription(subscription) {
  // Assert:  observer._observer is undefined

  var cleanup = subscription._cleanup;

  if (!cleanup)
    return;

  // Drop the reference to the cleanup function so that we won't call it
  // more than once
  subscription._cleanup = undefined;

  // Call the cleanup function
  cleanup();
}

function subscriptionClosed(subscription) {
  return subscription._observer === undefined;
}

function closeSubscription(subscription) {
  if (subscriptionClosed(subscription))
    return;

  subscription._observer = undefined;
  cleanupSubscription(subscription);
}

function cleanupFromSubscription(subscription) {
  return function() { subscription.unsubscribe() };
}

function Subscription(observer, subscriber) {
  // Assert: subscriber is callable

  // The observer must be an object
  if (Object(observer) !== observer)
    throw new TypeError("Observer must be an object");

  this._cleanup = undefined;
  this._observer = observer;

  var start = getMethod(observer, "start");

  if (start)
    start.call(observer, this);

  if (subscriptionClosed(this))
    return;

  observer = new SubscriptionObserver(this);

  try {
    // Call the subscriber function
    var cleanup$0 = subscriber.call(undefined, observer);

    // The return value must be undefined, null, a subscription object, or a function
    if (cleanup$0 != null) {
      if (typeof cleanup$0.unsubscribe === "function")
        cleanup$0 = cleanupFromSubscription(cleanup$0);
      else if (typeof cleanup$0 !== "function")
        throw new TypeError(cleanup$0 + " is not a function");

      this._cleanup = cleanup$0;
    }
  } catch (e) {
    // If an error occurs during startup, then attempt to send the error
    // to the observer
    observer.error(e);
    return;
  }

  // If the stream is already finished, then perform cleanup
  if (subscriptionClosed(this))
    cleanupSubscription(this);
}

addMethods(Subscription.prototype = {}, {
  get closed() { return subscriptionClosed(this) },
  unsubscribe: function() { closeSubscription(this) },
});

function SubscriptionObserver(subscription) {
  this._subscription = subscription;
}

addMethods(SubscriptionObserver.prototype = {}, {

  get closed() { return subscriptionClosed(this._subscription) },

  next: function(value) {
    var subscription = this._subscription;

    // If the stream is closed, then return undefined
    if (subscriptionClosed(subscription))
      return undefined;

    var observer = subscription._observer;
    var m = getMethod(observer, "next");

    // If the observer doesn't support "next", then return undefined
    if (!m)
      return undefined;

    // Send the next value to the sink
    return m.call(observer, value);
  },

  error: function(value) {
    var subscription = this._subscription;

    // If the stream is closed, throw the error to the caller
    if (subscriptionClosed(subscription))
      throw value;

    var observer = subscription._observer;
    subscription._observer = undefined;

    try {
      var m$0 = getMethod(observer, "error");

      // If the sink does not support "error", then throw the error to the caller
      if (!m$0)
        throw value;

      value = m$0.call(observer, value);
    } catch (e) {
      try { cleanupSubscription(subscription) }
      finally { throw e }
    }

    cleanupSubscription(subscription);
    return value;
  },

  complete: function(value) {
    var subscription = this._subscription;

    // If the stream is closed, then return undefined
    if (subscriptionClosed(subscription))
      return undefined;

    var observer = subscription._observer;
    subscription._observer = undefined;

    try {
      var m$1 = getMethod(observer, "complete");

      // If the sink does not support "complete", then return undefined
      value = m$1 ? m$1.call(observer, value) : undefined;
    } catch (e) {
      try { cleanupSubscription(subscription) }
      finally { throw e }
    }

    cleanupSubscription(subscription);
    return value;
  },

});

function Observable(subscriber) {
  // The stream subscriber must be a function
  if (typeof subscriber !== "function")
    throw new TypeError("Observable initializer must be a function");

  this._subscriber = subscriber;
}

addMethods(Observable.prototype, {

  subscribe: function(observer) { for (var args = [], __$0 = 1; __$0 < arguments.length; ++__$0) args.push(arguments[__$0]); 
    if (typeof observer === 'function') {
      observer = {
        next: observer,
        error: args[0],
        complete: args[1],
      };
    }

    return new Subscription(observer, this._subscriber);
  },

  forEach: function(fn) { var __this = this; 
    return new Promise(function(resolve, reject) {
      if (typeof fn !== "function")
        return Promise.reject(new TypeError(fn + " is not a function"));

      __this.subscribe({
        _subscription: null,

        start: function(subscription) {
          if (Object(subscription) !== subscription)
            throw new TypeError(subscription + " is not an object");

          this._subscription = subscription;
        },

        next: function(value) {
          var subscription = this._subscription;

          if (subscription.closed)
            return;

          try {
            return fn(value);
          } catch (err) {
            reject(err);
            subscription.unsubscribe();
          }
        },

        error: reject,
        complete: resolve,
      });
    });
  },

  map: function(fn) { var __this = this; 
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    var C = getSpecies(this);

    return new C(function(observer) { return __this.subscribe({
      next: function(value) {
        if (observer.closed)
          return;

        try { value = fn(value) }
        catch (e) { return observer.error(e) }

        return observer.next(value);
      },

      error: function(e) { return observer.error(e) },
      complete: function(x) { return observer.complete(x) },
    }); });
  },

  filter: function(fn) { var __this = this; 
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    var C = getSpecies(this);

    return new C(function(observer) { return __this.subscribe({
      next: function(value) {
        if (observer.closed)
          return;

        try { if (!fn(value)) return undefined }
        catch (e) { return observer.error(e) }

        return observer.next(value);
      },

      error: function(e) { return observer.error(e) },
      complete: function() { return observer.complete() },
    }); });
  },

  reduce: function(fn) { var __this = this; 
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;

    return new C(function(observer) { return __this.subscribe({

      next: function(value) {
        if (observer.closed)
          return;

        var first = !hasValue;
        hasValue = true;

        if (!first || hasSeed) {
          try { acc = fn(acc, value) }
          catch (e) { return observer.error(e) }
        } else {
          acc = value;
        }
      },

      error: function(e) { observer.error(e) },

      complete: function() {
        if (!hasValue && !hasSeed) {
          observer.error(new TypeError("Cannot reduce an empty sequence"));
          return;
        }

        observer.next(acc);
        observer.complete();
      },

    }); });
  },

  flatMap: function(fn) { var __this = this; 
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    var C = getSpecies(this);

    return new C(function(observer) {
      var completed = false;
      var subscriptions = [];

      // Subscribe to the outer Observable
      var outer = __this.subscribe({

        next: function(value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (x) {
              observer.error(x);
              return;
            }
          }

          // Subscribe to the inner Observable
          Observable.from(value).subscribe({
            _subscription: null,

            start: function(s) { subscriptions.push(this._subscription = s) },
            next: function(value) { observer.next(value) },
            error: function(e) { observer.error(e) },

            complete: function() {
              var i = subscriptions.indexOf(this._subscription);

              if (i >= 0)
                subscriptions.splice(i, 1);

              closeIfDone();
            }
          });
        },

        error: function(e) {
          return observer.error(e);
        },

        complete: function() {
          completed = true;
          closeIfDone();
        }
      });

      function closeIfDone() {
        if (completed && subscriptions.length === 0)
          observer.complete();
      }

      return function() {
        subscriptions.forEach(function(s) { return s.unsubscribe(); });
        outer.unsubscribe();
      };
    });
  },

});

Object.defineProperty(Observable.prototype, getSymbol("observable"), {
  value: function() { return this },
  writable: true,
  configurable: true,
});

addMethods(Observable, {

  from: function(x) {
    var C = typeof this === "function" ? this : Observable;

    if (x == null)
      throw new TypeError(x + " is not an object");

    var method = getMethod(x, getSymbol("observable"));

    if (method) {
      var observable$0 = method.call(x);

      if (Object(observable$0) !== observable$0)
        throw new TypeError(observable$0 + " is not an object");

      if (observable$0.constructor === C)
        return observable$0;

      return new C(function(observer) { return observable$0.subscribe(observer); });
    }

    if (hasSymbol("iterator") && (method = getMethod(x, getSymbol("iterator")))) {
      return new C(function(observer) {
        for (var __$0 = (method.call(x))[Symbol.iterator](), __$1; __$1 = __$0.next(), !__$1.done;) { var item$0 = __$1.value; 
          observer.next(item$0);
          if (observer.closed)
            return;
        }

        observer.complete();
      });
    }

    if (Array.isArray(x)) {
      return new C(function(observer) {
        for (var i$0 = 0; i$0 < x.length; ++i$0) {
          observer.next(x[i$0]);
          if (observer.closed)
            return;
        }

        observer.complete();
      });
    }

    throw new TypeError(x + " is not observable");
  },

  of: function() { for (var items = [], __$0 = 0; __$0 < arguments.length; ++__$0) items.push(arguments[__$0]); 
    var C = typeof this === "function" ? this : Observable;

    return new C(function(observer) {
      for (var i$1 = 0; i$1 < items.length; ++i$1) {
        observer.next(items[i$1]);
        if (observer.closed)
          return;
      }

      observer.complete();
    });
  },

});

Object.defineProperty(Observable, getSymbol("species"), {
  get: function() { return this },
  configurable: true,
});

Object.defineProperty(Observable, "observableSymbol", {
  value: getSymbol("observable"),
});

exports.Observable = Observable;


}, "*");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(98)(module)))

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDirectiveInfoFromField;
/* harmony export (immutable) */ __webpack_exports__["b"] = shouldInclude;
/* unused harmony export flattenSelections */
/* unused harmony export getDirectiveNames */
/* unused harmony export hasDirectives */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storeUtils__ = __webpack_require__(660);

function getDirectiveInfoFromField(field, variables) {
    if (field.directives && field.directives.length) {
        var directiveObj_1 = {};
        field.directives.forEach(function (directive) {
            directiveObj_1[directive.name.value] = Object(__WEBPACK_IMPORTED_MODULE_0__storeUtils__["a" /* argumentsObjectFromField */])(directive, variables);
        });
        return directiveObj_1;
    }
    return null;
}
function shouldInclude(selection, variables) {
    if (variables === void 0) { variables = {}; }
    if (!selection.directives) {
        return true;
    }
    var res = true;
    selection.directives.forEach(function (directive) {
        if (directive.name.value !== 'skip' && directive.name.value !== 'include') {
            return;
        }
        var directiveArguments = directive.arguments || [];
        var directiveName = directive.name.value;
        if (directiveArguments.length !== 1) {
            throw new Error("Incorrect number of arguments for the @" + directiveName + " directive.");
        }
        var ifArgument = directiveArguments[0];
        if (!ifArgument.name || ifArgument.name.value !== 'if') {
            throw new Error("Invalid argument for the @" + directiveName + " directive.");
        }
        var ifValue = directiveArguments[0].value;
        var evaledValue = false;
        if (!ifValue || ifValue.kind !== 'BooleanValue') {
            if (ifValue.kind !== 'Variable') {
                throw new Error("Argument for the @" + directiveName + " directive must be a variable or a bool ean value.");
            }
            else {
                evaledValue = variables[ifValue.name.value];
                if (evaledValue === undefined) {
                    throw new Error("Invalid variable referenced in @" + directiveName + " directive.");
                }
            }
        }
        else {
            evaledValue = ifValue.value;
        }
        if (directiveName === 'skip') {
            evaledValue = !evaledValue;
        }
        if (!evaledValue) {
            res = false;
        }
    });
    return res;
}
function flattenSelections(selection) {
    if (!selection.selectionSet ||
        !(selection.selectionSet.selections.length > 0))
        return [selection];
    return [selection].concat(selection.selectionSet.selections
        .map(function (selectionNode) {
        return [selectionNode].concat(flattenSelections(selectionNode));
    })
        .reduce(function (selections, selected) { return selections.concat(selected); }, []));
}
var added = new Map();
function getDirectiveNames(doc) {
    var cached = added.get(doc);
    if (cached)
        return cached;
    var directives = doc.definitions
        .filter(function (definition) {
        return definition.selectionSet && definition.selectionSet.selections;
    })
        .map(function (x) { return flattenSelections(x); })
        .reduce(function (selections, selected) { return selections.concat(selected); }, [])
        .filter(function (selection) {
        return selection.directives && selection.directives.length > 0;
    })
        .map(function (selection) { return selection.directives; })
        .reduce(function (directives, directive) { return directives.concat(directive); }, [])
        .map(function (directive) { return directive.name.value; });
    added.set(doc, directives);
    return directives;
}
function hasDirectives(names, doc) {
    return getDirectiveNames(doc).some(function (name) { return names.indexOf(name) > -1; });
}
//# sourceMappingURL=directives.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFragmentQueryDocument;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw new Error("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        if (fragments.length !== 1) {
            throw new Error("Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
        }
        actualFragmentName = fragments[0].name.value;
    }
    var query = __assign({}, document, { definitions: [
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ].concat(document.definitions) });
    return query;
}
//# sourceMappingURL=fragments.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export removeDirectivesFromDocument */
/* harmony export (immutable) */ __webpack_exports__["a"] = addTypenameToDocument;
/* unused harmony export removeConnectionDirectiveFromDocument */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_cloneDeep__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getFromAST__ = __webpack_require__(665);


var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function addTypenameToSelectionSet(selectionSet, isRoot) {
    if (isRoot === void 0) { isRoot = false; }
    if (selectionSet.selections) {
        if (!isRoot) {
            var alreadyHasThisField = selectionSet.selections.some(function (selection) {
                return (selection.kind === 'Field' &&
                    selection.name.value === '__typename');
            });
            if (!alreadyHasThisField) {
                selectionSet.selections.push(TYPENAME_FIELD);
            }
        }
        selectionSet.selections.forEach(function (selection) {
            if (selection.kind === 'Field') {
                if (selection.name.value.lastIndexOf('__', 0) !== 0 &&
                    selection.selectionSet) {
                    addTypenameToSelectionSet(selection.selectionSet);
                }
            }
            else if (selection.kind === 'InlineFragment') {
                if (selection.selectionSet) {
                    addTypenameToSelectionSet(selection.selectionSet);
                }
            }
        });
    }
}
function removeDirectivesFromSelectionSet(directives, selectionSet) {
    if (!selectionSet.selections)
        return selectionSet;
    var agressiveRemove = directives.some(function (dir) { return dir.remove; });
    selectionSet.selections = selectionSet.selections
        .map(function (selection) {
        if (selection.kind !== 'Field' ||
            !selection ||
            !selection.directives)
            return selection;
        var remove;
        selection.directives = selection.directives.filter(function (directive) {
            var shouldKeep = !directives.some(function (dir) {
                if (dir.name && dir.name === directive.name.value)
                    return true;
                if (dir.test && dir.test(directive))
                    return true;
                return false;
            });
            if (!remove && !shouldKeep && agressiveRemove)
                remove = true;
            return shouldKeep;
        });
        return remove ? null : selection;
    })
        .filter(function (x) { return !!x; });
    selectionSet.selections.forEach(function (selection) {
        if ((selection.kind === 'Field' || selection.kind === 'InlineFragment') &&
            selection.selectionSet) {
            removeDirectivesFromSelectionSet(directives, selection.selectionSet);
        }
    });
    return selectionSet;
}
function removeDirectivesFromDocument(directives, doc) {
    var docClone = Object(__WEBPACK_IMPORTED_MODULE_0__util_cloneDeep__["a" /* cloneDeep */])(doc);
    docClone.definitions.forEach(function (definition) {
        removeDirectivesFromSelectionSet(directives, definition.selectionSet);
    });
    var operation = Object(__WEBPACK_IMPORTED_MODULE_1__getFromAST__["g" /* getOperationDefinitionOrDie */])(docClone);
    var fragments = Object(__WEBPACK_IMPORTED_MODULE_1__getFromAST__["b" /* createFragmentMap */])(Object(__WEBPACK_IMPORTED_MODULE_1__getFromAST__["d" /* getFragmentDefinitions */])(docClone));
    var isNotEmpty = function (op) {
        return op.selectionSet.selections.filter(function (selectionSet) {
            return !(selectionSet &&
                selectionSet.kind === 'FragmentSpread' &&
                !isNotEmpty(fragments[selectionSet.name.value]));
        }).length > 0;
    };
    return isNotEmpty(operation) ? docClone : null;
}
var added = new Map();
function addTypenameToDocument(doc) {
    Object(__WEBPACK_IMPORTED_MODULE_1__getFromAST__["a" /* checkDocument */])(doc);
    var cached = added.get(doc);
    if (cached)
        return cached;
    var docClone = Object(__WEBPACK_IMPORTED_MODULE_0__util_cloneDeep__["a" /* cloneDeep */])(doc);
    docClone.definitions.forEach(function (definition) {
        var isRoot = definition.kind === 'OperationDefinition';
        addTypenameToSelectionSet(definition.selectionSet, isRoot);
    });
    added.set(doc, docClone);
    return docClone;
}
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                console.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
var removed = new Map();
function removeConnectionDirectiveFromDocument(doc) {
    Object(__WEBPACK_IMPORTED_MODULE_1__getFromAST__["a" /* checkDocument */])(doc);
    var cached = removed.get(doc);
    if (cached)
        return cached;
    var docClone = removeDirectivesFromDocument([connectionRemoveConfig], doc);
    removed.set(doc, docClone);
    return docClone;
}
//# sourceMappingURL=transform.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tryFunctionOrLogError */
/* unused harmony export graphQLResultHasError */
function tryFunctionOrLogError(f) {
    try {
        return f();
    }
    catch (e) {
        if (console.error) {
            console.error(e);
        }
    }
}
function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
}
//# sourceMappingURL=errorHandling.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEqual;
function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    if (a != null &&
        typeof a === 'object' &&
        b != null &&
        typeof b === 'object') {
        for (var key in a) {
            if (Object.prototype.hasOwnProperty.call(a, key)) {
                if (!Object.prototype.hasOwnProperty.call(b, key)) {
                    return false;
                }
                if (!isEqual(a[key], b[key])) {
                    return false;
                }
            }
        }
        for (var key in b) {
            if (!Object.prototype.hasOwnProperty.call(a, key)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=isEqual.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export maybeDeepFreeze */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(661);

function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop) &&
            o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
}
function maybeDeepFreeze(obj) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__environment__["a" /* isDevelopment */])() || Object(__WEBPACK_IMPORTED_MODULE_0__environment__["c" /* isTest */])()) {
        return deepFreeze(obj);
    }
    return obj;
}
//# sourceMappingURL=maybeDeepFreeze.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warnOnceInDevelopment;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(661);

var haveWarned = Object.create({});
function warnOnceInDevelopment(msg, type) {
    if (type === void 0) { type = 'warn'; }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__environment__["b" /* isProduction */])()) {
        return;
    }
    if (!haveWarned[msg]) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__environment__["c" /* isTest */])()) {
            haveWarned[msg] = true;
        }
        switch (type) {
            case 'error':
                console.error(msg);
                break;
            default:
                console.warn(msg);
        }
    }
}
//# sourceMappingURL=warnOnce.js.map

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.visitWithTypeInfo = visitWithTypeInfo;
exports.getVisitFn = getVisitFn;
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var QueryDocumentKeys = exports.QueryDocumentKeys = {
  Name: [],

  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],

  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', 'typeCondition', 'directives', 'selectionSet'],

  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],

  Directive: ['name', 'arguments'],

  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],

  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],

  ScalarTypeDefinition: ['name', 'directives'],
  ObjectTypeDefinition: ['name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['name', 'directives', 'fields'],
  UnionTypeDefinition: ['name', 'directives', 'types'],
  EnumTypeDefinition: ['name', 'directives', 'values'],
  EnumValueDefinition: ['name', 'directives'],
  InputObjectTypeDefinition: ['name', 'directives', 'fields'],

  TypeExtensionDefinition: ['definition'],

  DirectiveDefinition: ['name', 'arguments', 'locations']
};

var BREAK = exports.BREAK = {};

/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */
function visit(root, visitor, keyMap) {
  var visitorKeys = keyMap || QueryDocumentKeys;

  var stack = void 0;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var parent = void 0;
  var path = [];
  var ancestors = [];
  var newRoot = root;

  do {
    index++;
    var isLeaving = index === keys.length;
    var key = void 0;
    var node = void 0;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path.pop();
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var k in node) {
            if (node.hasOwnProperty(k)) {
              clone[k] = node[k];
            }
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === undefined) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (!isLeaving) {
      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return maybeNode && typeof maybeNode.kind === 'string';
}

/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */
function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);

  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}

/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */
function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
      if (fn) {
        var result = fn.apply(visitor, arguments);
        if (result !== undefined) {
          typeInfo.leave(node);
          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }
        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
      var result = void 0;
      if (fn) {
        result = fn.apply(visitor, arguments);
      }
      typeInfo.leave(node);
      return result;
    }
  };
}

/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inMemoryCache__ = __webpack_require__(687);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return __WEBPACK_IMPORTED_MODULE_0__inMemoryCache__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return __WEBPACK_IMPORTED_MODULE_0__inMemoryCache__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__readFromStore__ = __webpack_require__(670);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ID_KEY", function() { return __WEBPACK_IMPORTED_MODULE_1__readFromStore__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "readQueryFromStore", function() { return __WEBPACK_IMPORTED_MODULE_1__readFromStore__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "diffQueryAgainstStore", function() { return __WEBPACK_IMPORTED_MODULE_1__readFromStore__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "assertIdValue", function() { return __WEBPACK_IMPORTED_MODULE_1__readFromStore__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__writeToStore__ = __webpack_require__(669);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WriteError", function() { return __WEBPACK_IMPORTED_MODULE_2__writeToStore__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enhanceErrorWithDocument", function() { return __WEBPACK_IMPORTED_MODULE_2__writeToStore__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "writeQueryToStore", function() { return __WEBPACK_IMPORTED_MODULE_2__writeToStore__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "writeResultToStore", function() { return __WEBPACK_IMPORTED_MODULE_2__writeToStore__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "writeSelectionSetToStore", function() { return __WEBPACK_IMPORTED_MODULE_2__writeToStore__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fragmentMatcher__ = __webpack_require__(668);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HeuristicFragmentMatcher", function() { return __WEBPACK_IMPORTED_MODULE_3__fragmentMatcher__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "IntrospectionFragmentMatcher", function() { return __WEBPACK_IMPORTED_MODULE_3__fragmentMatcher__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objectCache__ = __webpack_require__(663);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ObjectCache", function() { return __WEBPACK_IMPORTED_MODULE_4__objectCache__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defaultNormalizedCacheFactory", function() { return __WEBPACK_IMPORTED_MODULE_4__objectCache__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recordingCache__ = __webpack_require__(672);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RecordingCache", function() { return __WEBPACK_IMPORTED_MODULE_5__recordingCache__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "record", function() { return __WEBPACK_IMPORTED_MODULE_5__recordingCache__["b"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultDataIdFromObject;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_cache__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_utilities__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fragmentMatcher__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__writeToStore__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__readFromStore__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objectCache__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recordingCache__ = __webpack_require__(672);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







var defaultConfig = {
    fragmentMatcher: new __WEBPACK_IMPORTED_MODULE_2__fragmentMatcher__["a" /* HeuristicFragmentMatcher */](),
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    storeFactory: __WEBPACK_IMPORTED_MODULE_5__objectCache__["b" /* defaultNormalizedCacheFactory */],
};
function defaultDataIdFromObject(result) {
    if (result.__typename) {
        if (result.id !== undefined) {
            return result.__typename + ":" + result.id;
        }
        if (result._id !== undefined) {
            return result.__typename + ":" + result._id;
        }
    }
    return null;
}
var InMemoryCache = (function (_super) {
    __extends(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.optimistic = [];
        _this.watches = [];
        _this.silenceBroadcast = false;
        _this.config = __assign({}, defaultConfig, config);
        if (_this.config.customResolvers)
            _this.config.cacheResolvers = _this.config.customResolvers;
        _this.addTypename = _this.config.addTypename ? true : false;
        _this.data = _this.config.storeFactory();
        return _this;
    }
    InMemoryCache.prototype.restore = function (data) {
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        if (optimistic && this.optimistic.length > 0) {
            var patches = this.optimistic.map(function (opt) { return opt.data; });
            return Object.assign.apply(Object, [{}, this.data.toObject()].concat(patches));
        }
        return this.data.toObject();
    };
    InMemoryCache.prototype.read = function (query) {
        if (query.rootId && this.data.get(query.rootId) === undefined) {
            return null;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_4__readFromStore__["d" /* readQueryFromStore */])({
            store: this.config.storeFactory(this.extract(query.optimistic)),
            query: this.transformDocument(query.query),
            variables: query.variables,
            rootId: query.rootId,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
            previousResult: query.previousResult,
            config: this.config,
        });
    };
    InMemoryCache.prototype.write = function (write) {
        Object(__WEBPACK_IMPORTED_MODULE_3__writeToStore__["d" /* writeResultToStore */])({
            dataId: write.dataId,
            result: write.result,
            variables: write.variables,
            document: this.transformDocument(write.query),
            store: this.data,
            dataIdFromObject: this.config.dataIdFromObject,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
        });
        this.broadcastWatches();
    };
    InMemoryCache.prototype.diff = function (query) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__readFromStore__["c" /* diffQueryAgainstStore */])({
            store: this.config.storeFactory(this.extract(query.optimistic)),
            query: this.transformDocument(query.query),
            variables: query.variables,
            returnPartialData: query.returnPartialData,
            previousResult: query.previousResult,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
            config: this.config,
        });
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        this.watches.push(watch);
        return function () {
            _this.watches = _this.watches.filter(function (c) { return c !== watch; });
        };
    };
    InMemoryCache.prototype.evict = function (query) {
        throw new Error("eviction is not implemented on InMemory Cache");
    };
    InMemoryCache.prototype.reset = function () {
        this.data.clear();
        this.broadcastWatches();
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (id) {
        var _this = this;
        var toPerform = this.optimistic.filter(function (item) { return item.id !== id; });
        this.optimistic = [];
        toPerform.forEach(function (change) {
            _this.recordOptimisticTransaction(change.transaction, change.id);
        });
        this.broadcastWatches();
    };
    InMemoryCache.prototype.performTransaction = function (transaction) {
        var alreadySilenced = this.silenceBroadcast;
        this.silenceBroadcast = true;
        transaction(this);
        if (!alreadySilenced) {
            this.silenceBroadcast = false;
        }
        this.broadcastWatches();
    };
    InMemoryCache.prototype.recordOptimisticTransaction = function (transaction, id) {
        var _this = this;
        this.silenceBroadcast = true;
        var patch = Object(__WEBPACK_IMPORTED_MODULE_6__recordingCache__["b" /* record */])(this.extract(true), function (recordingCache) {
            var dataCache = _this.data;
            _this.data = recordingCache;
            _this.performTransaction(transaction);
            _this.data = dataCache;
        });
        this.optimistic.push({
            id: id,
            transaction: transaction,
            data: patch,
        });
        this.silenceBroadcast = false;
        this.broadcastWatches();
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename)
            return Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["a" /* addTypenameToDocument */])(document);
        return document;
    };
    InMemoryCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: options.query,
            variables: options.variables,
            optimistic: optimistic,
        });
    };
    InMemoryCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: this.transformDocument(Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName)),
            variables: options.variables,
            rootId: options.id,
            optimistic: optimistic,
        });
    };
    InMemoryCache.prototype.writeQuery = function (options) {
        this.write({
            dataId: 'ROOT_QUERY',
            result: options.data,
            query: this.transformDocument(options.query),
            variables: options.variables,
        });
    };
    InMemoryCache.prototype.writeFragment = function (options) {
        this.write({
            dataId: options.id,
            result: options.data,
            query: this.transformDocument(Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName)),
            variables: options.variables,
        });
    };
    InMemoryCache.prototype.broadcastWatches = function () {
        var _this = this;
        if (this.silenceBroadcast)
            return;
        this.watches.forEach(function (c) {
            var newData = _this.diff({
                query: c.query,
                variables: c.variables,
                previousResult: c.previousResult && c.previousResult(),
                optimistic: c.optimistic,
            });
            c.callback(newData);
        });
    };
    return InMemoryCache;
}(__WEBPACK_IMPORTED_MODULE_0_apollo_cache__["a" /* ApolloCache */]));

//# sourceMappingURL=inMemoryCache.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache__ = __webpack_require__(689);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cache__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(690);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApolloCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(658);

var ApolloCache = (function () {
    function ApolloCache() {
    }
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: options.query,
            variables: options.variables,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName),
            variables: options.variables,
            rootId: options.id,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.writeQuery = function (options) {
        this.write({
            dataId: 'ROOT_QUERY',
            result: options.data,
            query: options.query,
            variables: options.variables,
        });
    };
    ApolloCache.prototype.writeFragment = function (options) {
        this.write({
            dataId: options.id,
            result: options.data,
            variables: options.variables,
            query: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName),
        });
    };
    return ApolloCache;
}());

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cache__ = __webpack_require__(691);
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cache */
var Cache;
(function (Cache) {
})(Cache || (Cache = {}));
//# sourceMappingURL=Cache.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities__ = __webpack_require__(693);
/* unused harmony reexport filter */
/* unused harmony reexport check */
/* unused harmony reexport propType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphql__ = __webpack_require__(671);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__graphql__["a" /* graphql */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export filter */
/* unused harmony export check */
/* unused harmony export propType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphql__ = __webpack_require__(671);

function filter(doc, data) {
    var resolver = function (fieldName, root, args, context, info) {
        return root[info.resultKey];
    };
    return Object(__WEBPACK_IMPORTED_MODULE_0__graphql__["a" /* graphql */])(resolver, doc, data);
}
function check(doc, data) {
    var resolver = function (fieldName, root, args, context, info) {
        if (!{}.hasOwnProperty.call(root, info.resultKey)) {
            throw new Error(info.resultKey + " missing on " + root);
        }
        return root[info.resultKey];
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__graphql__["a" /* graphql */])(resolver, doc, data, {}, {}, {
        fragmentMatcher: function () { return false; },
    });
}
var ANONYMOUS = '<<anonymous>>';
function PropTypeError(message) {
    this.message = message;
    this.stack = '';
}
PropTypeError.prototype = Error.prototype;
var reactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context',
};
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (props[propName] == null) {
            var locationName = reactPropTypeLocationNames[location];
            if (isRequired) {
                if (props[propName] === null) {
                    return new PropTypeError("The " + locationName + " `" + propFullName + "` is marked as required " +
                        ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + locationName + " `" + propFullName + "` is marked as required in " +
                    ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
        }
        else {
            return validate(props, propName, componentName, location, propFullName);
        }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
function propType(doc) {
    return createChainableTypeChecker(function (props, propName) {
        var prop = props[propName];
        try {
            check(doc, prop);
            return null;
        }
        catch (e) {
            return e;
        }
    });
}
//# sourceMappingURL=utilities.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jN2FmMWYxOTE0YTkxY2U3NDVlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MGUxNzRlNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXBvbGxvLXV0aWxpdGllcy9saWIvaW5kZXguanM/M2NjYTFmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVuLW9ic2VydmFibGUvaW5kZXguanM/M2NjYTFmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXBvbGxvLXV0aWxpdGllcy9saWIvc3RvcmVVdGlscy5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi91dGlsL2Vudmlyb25tZW50LmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvcHJpbnRlci5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUtaW5tZW1vcnkvbGliL29iamVjdENhY2hlLmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby1saW5rL2xpYi9saW5rVXRpbHMuanM/M2NjYTFmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXBvbGxvLXV0aWxpdGllcy9saWIvZ2V0RnJvbUFTVC5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi91dGlsL2Fzc2lnbi5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi91dGlsL2Nsb25lRGVlcC5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUtaW5tZW1vcnkvbGliL2ZyYWdtZW50TWF0Y2hlci5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUtaW5tZW1vcnkvbGliL3dyaXRlVG9TdG9yZS5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUtaW5tZW1vcnkvbGliL3JlYWRGcm9tU3RvcmUuanM/M2NjYTFmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC1hbnl3aGVyZS9saWIvZ3JhcGhxbC5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUtaW5tZW1vcnkvbGliL3JlY29yZGluZ0NhY2hlLmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby1saW5rLWh0dHAvbGliL2luZGV4LmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby1saW5rLWh0dHAvbGliL2h0dHBMaW5rLmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby1saW5rL2xpYi9pbmRleC5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tbGluay9saWIvbGluay5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZW4tb2JzZXJ2YWJsZS96ZW4tb2JzZXJ2YWJsZS5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi9kaXJlY3RpdmVzLmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby11dGlsaXRpZXMvbGliL2ZyYWdtZW50cy5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi90cmFuc2Zvcm0uanM/M2NjYTFmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXBvbGxvLXV0aWxpdGllcy9saWIvdXRpbC9lcnJvckhhbmRsaW5nLmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby11dGlsaXRpZXMvbGliL3V0aWwvaXNFcXVhbC5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi91dGlsL21heWJlRGVlcEZyZWV6ZS5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi91dGlsL3dhcm5PbmNlLmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvdmlzaXRvci5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUtaW5tZW1vcnkvbGliL2luZGV4LmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby1jYWNoZS1pbm1lbW9yeS9saWIvaW5NZW1vcnlDYWNoZS5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUvbGliL2luZGV4LmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby1jYWNoZS9saWIvY2FjaGUuanM/M2NjYTFmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXBvbGxvLWNhY2hlL2xpYi90eXBlcy9pbmRleC5qcz8zY2NhMWYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUvbGliL3R5cGVzL0NhY2hlLmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwtYW55d2hlcmUvbGliL2luZGV4LmpzPzNjY2ExZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwtYW55d2hlcmUvbGliL3V0aWxpdGllcy5qcz8zY2NhMWYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEZlZWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRmVlZCc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uJztcblxuLy8gQXBvbGxvXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IGNyZWF0ZUh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcblxuLy8gYnkgZGVmYXVsdCwgdGhpcyBjbGllbnQgd2lsbCBzZW5kIHF1ZXJpZXMgdG8gYC9ncmFwaHFsYCAocmVsYXRpdmUgdG8gdGhlIFVSTCBvZiB5b3VyIGFwcClcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBsaW5rOiBjcmVhdGVIdHRwTGluayh7IHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9ncmFwaHFsJyB9KSxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuY29uc3QgUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBhbGxQb3N0cyhvcmRlckJ5OiBJRF9BU0MpIHtcbiAgICAgIG5vZGVzIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgY3JlYXRlZFxuICAgICAgICBjb250ZW50XG4gICAgICAgIHVybFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUmVjdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgfVxuYDtcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICBsZXQgcG9zdHMgPSBbXTtcbiAgaWYgKHByb3BzLmRhdGEuYWxsUG9zdHMpIHtcbiAgICBwb3N0cyA9IHByb3BzLmRhdGEuYWxsUG9zdHMubm9kZXM7XG4gIH1cblxuICBjb25zdCBub2RlID0gKFxuICAgIDxSZWN0PlxuICAgICAgPEZlZWQgey4uLnByb3BzfSBwb3N0cz17cG9zdHN9IC8+XG4gICAgPC9SZWN0PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxIZWFkZXIgey4uLnByb3BzfSAvPlxuICAgICAge3Bvc3RzLmxlbmd0aCA+IDAgPyBub2RlIDogbnVsbH1cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApOyAgXG59O1xuXG4vLyBIb21lLmRlZmF1bHRQcm9wcyA9IHtcbi8vICAgcG9zdHM6IFtdLFxuLy8gfTtcblxuLy8gSG9tZS5wcm9wVHlwZXMgPSB7XG4vLyAgIHBvc3RzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuLy8gICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyZCxcbi8vICAgICBjcmVhdGVkOiBQcm9wVHlwZXMubnVtYmVyLFxuLy8gICAgIHB1YmxpYzogUHJvcFR5cGVzLmJvb2wsXG4vLyAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4vLyAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbi8vICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmdcbi8vICAgfSkpLFxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChRVUVSWSkoSG9tZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZyYWdtZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2dldEZyb21BU1QnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9zdG9yZVV0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbC9hc3NpZ24nO1xuZXhwb3J0ICogZnJvbSAnLi91dGlsL2Nsb25lRGVlcCc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWwvZW52aXJvbm1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlsL2Vycm9ySGFuZGxpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlsL2lzRXF1YWwnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlsL21heWJlRGVlcEZyZWV6ZSc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWwvd2Fybk9uY2UnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXBvbGxvLXV0aWxpdGllcy9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3plbi1vYnNlcnZhYmxlLmpzXCIpLk9ic2VydmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy96ZW4tb2JzZXJ2YWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjU5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydCBmdW5jdGlvbiBpc1NjYWxhclZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIFsnU3RyaW5nVmFsdWUnLCAnQm9vbGVhblZhbHVlJywgJ0VudW1WYWx1ZSddLmluZGV4T2YodmFsdWUua2luZCkgPiAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlclZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIFsnSW50VmFsdWUnLCAnRmxvYXRWYWx1ZSddLmluZGV4T2YodmFsdWUua2luZCkgPiAtMTtcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ1N0cmluZ1ZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzQm9vbGVhblZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdCb29sZWFuVmFsdWUnO1xufVxuZnVuY3Rpb24gaXNJbnRWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnSW50VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNGbG9hdFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdGbG9hdFZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzVmFyaWFibGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJztcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ09iamVjdFZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzTGlzdFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdMaXN0VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNFbnVtVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0VudW1WYWx1ZSc7XG59XG5leHBvcnQgZnVuY3Rpb24gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09iaiwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcykge1xuICAgIGlmIChpc0ludFZhbHVlKHZhbHVlKSB8fCBpc0Zsb2F0VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IE51bWJlcih2YWx1ZS52YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQm9vbGVhblZhbHVlKHZhbHVlKSB8fCBpc1N0cmluZ1ZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3RWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIG5lc3RlZEFyZ09ial8xID0ge307XG4gICAgICAgIHZhbHVlLmZpZWxkcy5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihuZXN0ZWRBcmdPYmpfMSwgb2JqLm5hbWUsIG9iai52YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IG5lc3RlZEFyZ09ial8xO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZhcmlhYmxlKHZhbHVlKSkge1xuICAgICAgICB2YXIgdmFyaWFibGVWYWx1ZSA9ICh2YXJpYWJsZXMgfHwge30pW3ZhbHVlLm5hbWUudmFsdWVdO1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YXJpYWJsZVZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0xpc3RWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gdmFsdWUudmFsdWVzLm1hcChmdW5jdGlvbiAobGlzdFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbmVzdGVkQXJnQXJyYXlPYmogPSB7fTtcbiAgICAgICAgICAgIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihuZXN0ZWRBcmdBcnJheU9iaiwgbmFtZSwgbGlzdFZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEFyZ0FycmF5T2JqW25hbWUudmFsdWVdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNFbnVtVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGlubGluZSBhcmd1bWVudCBcXFwiXCIgKyBuYW1lLnZhbHVlICsgXCJcXFwiIG9mIGtpbmQgXFxcIlwiICsgdmFsdWUua2luZCArIFwiXFxcIiBpcyBub3Qgc3VwcG9ydGVkLlxcbiAgICAgICAgICAgICAgICAgICAgVXNlIHZhcmlhYmxlcyBpbnN0ZWFkIG9mIGlubGluZSBhcmd1bWVudHMgdG8gb3ZlcmNvbWUgdGhpcyBsaW1pdGF0aW9uLlwiKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc3RvcmVLZXlOYW1lRnJvbUZpZWxkKGZpZWxkLCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgZGlyZWN0aXZlc09iaiA9IG51bGw7XG4gICAgaWYgKGZpZWxkLmRpcmVjdGl2ZXMpIHtcbiAgICAgICAgZGlyZWN0aXZlc09iaiA9IHt9O1xuICAgICAgICBmaWVsZC5kaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgZGlyZWN0aXZlc09ialtkaXJlY3RpdmUubmFtZS52YWx1ZV0gPSB7fTtcbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24oZGlyZWN0aXZlc09ialtkaXJlY3RpdmUubmFtZS52YWx1ZV0sIG5hbWUsIHZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGFyZ09iaiA9IG51bGw7XG4gICAgaWYgKGZpZWxkLmFyZ3VtZW50cyAmJiBmaWVsZC5hcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGFyZ09iaiA9IHt9O1xuICAgICAgICBmaWVsZC5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24oYXJnT2JqLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRTdG9yZUtleU5hbWUoZmllbGQubmFtZS52YWx1ZSwgYXJnT2JqLCBkaXJlY3RpdmVzT2JqKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZUtleU5hbWUoZmllbGROYW1lLCBhcmdzLCBkaXJlY3RpdmVzKSB7XG4gICAgaWYgKGRpcmVjdGl2ZXMgJiZcbiAgICAgICAgZGlyZWN0aXZlc1snY29ubmVjdGlvbiddICYmXG4gICAgICAgIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsna2V5J10pIHtcbiAgICAgICAgaWYgKGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsnZmlsdGVyJ10gJiZcbiAgICAgICAgICAgIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsnZmlsdGVyJ10ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGZpbHRlcktleXMgPSBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddXG4gICAgICAgICAgICAgICAgPyBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddXG4gICAgICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgICAgIGZpbHRlcktleXMuc29ydCgpO1xuICAgICAgICAgICAgdmFyIHF1ZXJ5QXJnc18xID0gYXJncztcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZEFyZ3NfMSA9IHt9O1xuICAgICAgICAgICAgZmlsdGVyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEFyZ3NfMVtrZXldID0gcXVlcnlBcmdzXzFba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsna2V5J10gKyBcIihcIiArIEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkQXJnc18xKSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXVsna2V5J107XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgdmFyIHN0cmluZ2lmaWVkQXJncyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpO1xuICAgICAgICByZXR1cm4gZmllbGROYW1lICsgXCIoXCIgKyBzdHJpbmdpZmllZEFyZ3MgKyBcIilcIjtcbiAgICB9XG4gICAgcmV0dXJuIGZpZWxkTmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcmd1bWVudHNPYmplY3RGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcykge1xuICAgIGlmIChmaWVsZC5hcmd1bWVudHMgJiYgZmllbGQuYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgYXJnT2JqXzEgPSB7fTtcbiAgICAgICAgZmllbGQuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09ial8xLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcmdPYmpfMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCkge1xuICAgIHJldHVybiBmaWVsZC5hbGlhcyA/IGZpZWxkLmFsaWFzLnZhbHVlIDogZmllbGQubmFtZS52YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpZWxkKHNlbGVjdGlvbikge1xuICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0ZpZWxkJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikge1xuICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0lubGluZUZyYWdtZW50Jztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0lkVmFsdWUoaWRPYmplY3QpIHtcbiAgICByZXR1cm4gaWRPYmplY3QgJiYgaWRPYmplY3QudHlwZSA9PT0gJ2lkJztcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0lkVmFsdWUoaWQsIGdlbmVyYXRlZCkge1xuICAgIGlmIChnZW5lcmF0ZWQgPT09IHZvaWQgMCkgeyBnZW5lcmF0ZWQgPSBmYWxzZTsgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdpZCcsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgZ2VuZXJhdGVkOiBnZW5lcmF0ZWQsXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0pzb25WYWx1ZShqc29uT2JqZWN0KSB7XG4gICAgcmV0dXJuIChqc29uT2JqZWN0ICE9IG51bGwgJiZcbiAgICAgICAgdHlwZW9mIGpzb25PYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICAgIGpzb25PYmplY3QudHlwZSA9PT0gJ2pzb24nKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRWYWx1ZUZyb21WYXJpYWJsZShub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVmFyaWFibGUgbm9kZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgdmFsdWVGcm9tTm9kZVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZyb21Ob2RlKG5vZGUsIG9uVmFyaWFibGUpIHtcbiAgICBpZiAob25WYXJpYWJsZSA9PT0gdm9pZCAwKSB7IG9uVmFyaWFibGUgPSBkZWZhdWx0VmFsdWVGcm9tVmFyaWFibGU7IH1cbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xuICAgICAgICBjYXNlICdWYXJpYWJsZSc6XG4gICAgICAgICAgICByZXR1cm4gb25WYXJpYWJsZShub2RlKTtcbiAgICAgICAgY2FzZSAnTnVsbFZhbHVlJzpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjYXNlICdJbnRWYWx1ZSc6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobm9kZS52YWx1ZSk7XG4gICAgICAgIGNhc2UgJ0Zsb2F0VmFsdWUnOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobm9kZS52YWx1ZSk7XG4gICAgICAgIGNhc2UgJ0xpc3RWYWx1ZSc6XG4gICAgICAgICAgICByZXR1cm4gbm9kZS52YWx1ZXMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2YWx1ZUZyb21Ob2RlKHYsIG9uVmFyaWFibGUpOyB9KTtcbiAgICAgICAgY2FzZSAnT2JqZWN0VmFsdWUnOiB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBub2RlLmZpZWxkczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgdmFsdWVbZmllbGQubmFtZS52YWx1ZV0gPSB2YWx1ZUZyb21Ob2RlKGZpZWxkLnZhbHVlLCBvblZhcmlhYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG5vZGUudmFsdWU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RvcmVVdGlscy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi9zdG9yZVV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NjBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IGZ1bmN0aW9uIGdldEVudigpIHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICB9XG4gICAgcmV0dXJuICdkZXZlbG9wbWVudCc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFbnYoZW52KSB7XG4gICAgcmV0dXJuIGdldEVudigpID09PSBlbnY7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm9kdWN0aW9uKCkge1xuICAgIHJldHVybiBpc0VudigncHJvZHVjdGlvbicpID09PSB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV2ZWxvcG1lbnQoKSB7XG4gICAgcmV0dXJuIGlzRW52KCdkZXZlbG9wbWVudCcpID09PSB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVGVzdCgpIHtcbiAgICByZXR1cm4gaXNFbnYoJ3Rlc3QnKSA9PT0gdHJ1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudmlyb25tZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Fwb2xsby11dGlsaXRpZXMvbGliL3V0aWwvZW52aXJvbm1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnByaW50ID0gcHJpbnQ7XG5cbnZhciBfdmlzaXRvciA9IHJlcXVpcmUoJy4vdmlzaXRvcicpO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIEFTVCBpbnRvIGEgc3RyaW5nLCB1c2luZyBvbmUgc2V0IG9mIHJlYXNvbmFibGVcbiAqIGZvcm1hdHRpbmcgcnVsZXMuXG4gKi9cbmZ1bmN0aW9uIHByaW50KGFzdCkge1xuICByZXR1cm4gKDAsIF92aXNpdG9yLnZpc2l0KShhc3QsIHsgbGVhdmU6IHByaW50RG9jQVNUUmVkdWNlciB9KTtcbn0gLyoqXG4gICAqICBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gICAqICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgKlxuICAgKiAgVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqICBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICogIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgKi9cblxudmFyIHByaW50RG9jQVNUUmVkdWNlciA9IHtcbiAgTmFtZTogZnVuY3Rpb24gTmFtZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudmFsdWU7XG4gIH0sXG4gIFZhcmlhYmxlOiBmdW5jdGlvbiBWYXJpYWJsZShub2RlKSB7XG4gICAgcmV0dXJuICckJyArIG5vZGUubmFtZTtcbiAgfSxcblxuICAvLyBEb2N1bWVudFxuXG4gIERvY3VtZW50OiBmdW5jdGlvbiBEb2N1bWVudChub2RlKSB7XG4gICAgcmV0dXJuIGpvaW4obm9kZS5kZWZpbml0aW9ucywgJ1xcblxcbicpICsgJ1xcbic7XG4gIH0sXG5cbiAgT3BlcmF0aW9uRGVmaW5pdGlvbjogZnVuY3Rpb24gT3BlcmF0aW9uRGVmaW5pdGlvbihub2RlKSB7XG4gICAgdmFyIG9wID0gbm9kZS5vcGVyYXRpb247XG4gICAgdmFyIG5hbWUgPSBub2RlLm5hbWU7XG4gICAgdmFyIHZhckRlZnMgPSB3cmFwKCcoJywgam9pbihub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMsICcsICcpLCAnKScpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gam9pbihub2RlLmRpcmVjdGl2ZXMsICcgJyk7XG4gICAgdmFyIHNlbGVjdGlvblNldCA9IG5vZGUuc2VsZWN0aW9uU2V0O1xuICAgIC8vIEFub255bW91cyBxdWVyaWVzIHdpdGggbm8gZGlyZWN0aXZlcyBvciB2YXJpYWJsZSBkZWZpbml0aW9ucyBjYW4gdXNlXG4gICAgLy8gdGhlIHF1ZXJ5IHNob3J0IGZvcm0uXG4gICAgcmV0dXJuICFuYW1lICYmICFkaXJlY3RpdmVzICYmICF2YXJEZWZzICYmIG9wID09PSAncXVlcnknID8gc2VsZWN0aW9uU2V0IDogam9pbihbb3AsIGpvaW4oW25hbWUsIHZhckRlZnNdKSwgZGlyZWN0aXZlcywgc2VsZWN0aW9uU2V0XSwgJyAnKTtcbiAgfSxcblxuXG4gIFZhcmlhYmxlRGVmaW5pdGlvbjogZnVuY3Rpb24gVmFyaWFibGVEZWZpbml0aW9uKF9yZWYpIHtcbiAgICB2YXIgdmFyaWFibGUgPSBfcmVmLnZhcmlhYmxlLFxuICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBfcmVmLmRlZmF1bHRWYWx1ZTtcbiAgICByZXR1cm4gdmFyaWFibGUgKyAnOiAnICsgdHlwZSArIHdyYXAoJyA9ICcsIGRlZmF1bHRWYWx1ZSk7XG4gIH0sXG5cbiAgU2VsZWN0aW9uU2V0OiBmdW5jdGlvbiBTZWxlY3Rpb25TZXQoX3JlZjIpIHtcbiAgICB2YXIgc2VsZWN0aW9ucyA9IF9yZWYyLnNlbGVjdGlvbnM7XG4gICAgcmV0dXJuIGJsb2NrKHNlbGVjdGlvbnMpO1xuICB9LFxuXG4gIEZpZWxkOiBmdW5jdGlvbiBGaWVsZChfcmVmMykge1xuICAgIHZhciBhbGlhcyA9IF9yZWYzLmFsaWFzLFxuICAgICAgICBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgYXJncyA9IF9yZWYzLmFyZ3VtZW50cyxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYzLmRpcmVjdGl2ZXMsXG4gICAgICAgIHNlbGVjdGlvblNldCA9IF9yZWYzLnNlbGVjdGlvblNldDtcbiAgICByZXR1cm4gam9pbihbd3JhcCgnJywgYWxpYXMsICc6ICcpICsgbmFtZSArIHdyYXAoJygnLCBqb2luKGFyZ3MsICcsICcpLCAnKScpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIHNlbGVjdGlvblNldF0sICcgJyk7XG4gIH0sXG5cbiAgQXJndW1lbnQ6IGZ1bmN0aW9uIEFyZ3VtZW50KF9yZWY0KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmNC5uYW1lLFxuICAgICAgICB2YWx1ZSA9IF9yZWY0LnZhbHVlO1xuICAgIHJldHVybiBuYW1lICsgJzogJyArIHZhbHVlO1xuICB9LFxuXG4gIC8vIEZyYWdtZW50c1xuXG4gIEZyYWdtZW50U3ByZWFkOiBmdW5jdGlvbiBGcmFnbWVudFNwcmVhZChfcmVmNSkge1xuICAgIHZhciBuYW1lID0gX3JlZjUubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWY1LmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuICcuLi4nICsgbmFtZSArIHdyYXAoJyAnLCBqb2luKGRpcmVjdGl2ZXMsICcgJykpO1xuICB9LFxuXG4gIElubGluZUZyYWdtZW50OiBmdW5jdGlvbiBJbmxpbmVGcmFnbWVudChfcmVmNikge1xuICAgIHZhciB0eXBlQ29uZGl0aW9uID0gX3JlZjYudHlwZUNvbmRpdGlvbixcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWY2LmRpcmVjdGl2ZXMsXG4gICAgICAgIHNlbGVjdGlvblNldCA9IF9yZWY2LnNlbGVjdGlvblNldDtcbiAgICByZXR1cm4gam9pbihbJy4uLicsIHdyYXAoJ29uICcsIHR5cGVDb25kaXRpb24pLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIHNlbGVjdGlvblNldF0sICcgJyk7XG4gIH0sXG5cbiAgRnJhZ21lbnREZWZpbml0aW9uOiBmdW5jdGlvbiBGcmFnbWVudERlZmluaXRpb24oX3JlZjcpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWY3Lm5hbWUsXG4gICAgICAgIHR5cGVDb25kaXRpb24gPSBfcmVmNy50eXBlQ29uZGl0aW9uLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjcuZGlyZWN0aXZlcyxcbiAgICAgICAgc2VsZWN0aW9uU2V0ID0gX3JlZjcuc2VsZWN0aW9uU2V0O1xuICAgIHJldHVybiAnZnJhZ21lbnQgJyArIG5hbWUgKyAnIG9uICcgKyB0eXBlQ29uZGl0aW9uICsgJyAnICsgd3JhcCgnJywgam9pbihkaXJlY3RpdmVzLCAnICcpLCAnICcpICsgc2VsZWN0aW9uU2V0O1xuICB9LFxuXG4gIC8vIFZhbHVlXG5cbiAgSW50VmFsdWU6IGZ1bmN0aW9uIEludFZhbHVlKF9yZWY4KSB7XG4gICAgdmFyIHZhbHVlID0gX3JlZjgudmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBGbG9hdFZhbHVlOiBmdW5jdGlvbiBGbG9hdFZhbHVlKF9yZWY5KSB7XG4gICAgdmFyIHZhbHVlID0gX3JlZjkudmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBTdHJpbmdWYWx1ZTogZnVuY3Rpb24gU3RyaW5nVmFsdWUoX3JlZjEwKSB7XG4gICAgdmFyIHZhbHVlID0gX3JlZjEwLnZhbHVlO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gIH0sXG4gIEJvb2xlYW5WYWx1ZTogZnVuY3Rpb24gQm9vbGVhblZhbHVlKF9yZWYxMSkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxMS52YWx1ZTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICB9LFxuICBOdWxsVmFsdWU6IGZ1bmN0aW9uIE51bGxWYWx1ZSgpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9LFxuICBFbnVtVmFsdWU6IGZ1bmN0aW9uIEVudW1WYWx1ZShfcmVmMTIpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmMTIudmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBMaXN0VmFsdWU6IGZ1bmN0aW9uIExpc3RWYWx1ZShfcmVmMTMpIHtcbiAgICB2YXIgdmFsdWVzID0gX3JlZjEzLnZhbHVlcztcbiAgICByZXR1cm4gJ1snICsgam9pbih2YWx1ZXMsICcsICcpICsgJ10nO1xuICB9LFxuICBPYmplY3RWYWx1ZTogZnVuY3Rpb24gT2JqZWN0VmFsdWUoX3JlZjE0KSB7XG4gICAgdmFyIGZpZWxkcyA9IF9yZWYxNC5maWVsZHM7XG4gICAgcmV0dXJuICd7JyArIGpvaW4oZmllbGRzLCAnLCAnKSArICd9JztcbiAgfSxcbiAgT2JqZWN0RmllbGQ6IGZ1bmN0aW9uIE9iamVjdEZpZWxkKF9yZWYxNSkge1xuICAgIHZhciBuYW1lID0gX3JlZjE1Lm5hbWUsXG4gICAgICAgIHZhbHVlID0gX3JlZjE1LnZhbHVlO1xuICAgIHJldHVybiBuYW1lICsgJzogJyArIHZhbHVlO1xuICB9LFxuXG4gIC8vIERpcmVjdGl2ZVxuXG4gIERpcmVjdGl2ZTogZnVuY3Rpb24gRGlyZWN0aXZlKF9yZWYxNikge1xuICAgIHZhciBuYW1lID0gX3JlZjE2Lm5hbWUsXG4gICAgICAgIGFyZ3MgPSBfcmVmMTYuYXJndW1lbnRzO1xuICAgIHJldHVybiAnQCcgKyBuYW1lICsgd3JhcCgnKCcsIGpvaW4oYXJncywgJywgJyksICcpJyk7XG4gIH0sXG5cbiAgLy8gVHlwZVxuXG4gIE5hbWVkVHlwZTogZnVuY3Rpb24gTmFtZWRUeXBlKF9yZWYxNykge1xuICAgIHZhciBuYW1lID0gX3JlZjE3Lm5hbWU7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH0sXG4gIExpc3RUeXBlOiBmdW5jdGlvbiBMaXN0VHlwZShfcmVmMTgpIHtcbiAgICB2YXIgdHlwZSA9IF9yZWYxOC50eXBlO1xuICAgIHJldHVybiAnWycgKyB0eXBlICsgJ10nO1xuICB9LFxuICBOb25OdWxsVHlwZTogZnVuY3Rpb24gTm9uTnVsbFR5cGUoX3JlZjE5KSB7XG4gICAgdmFyIHR5cGUgPSBfcmVmMTkudHlwZTtcbiAgICByZXR1cm4gdHlwZSArICchJztcbiAgfSxcblxuICAvLyBUeXBlIFN5c3RlbSBEZWZpbml0aW9uc1xuXG4gIFNjaGVtYURlZmluaXRpb246IGZ1bmN0aW9uIFNjaGVtYURlZmluaXRpb24oX3JlZjIwKSB7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBfcmVmMjAuZGlyZWN0aXZlcyxcbiAgICAgICAgb3BlcmF0aW9uVHlwZXMgPSBfcmVmMjAub3BlcmF0aW9uVHlwZXM7XG4gICAgcmV0dXJuIGpvaW4oWydzY2hlbWEnLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKG9wZXJhdGlvblR5cGVzKV0sICcgJyk7XG4gIH0sXG5cbiAgT3BlcmF0aW9uVHlwZURlZmluaXRpb246IGZ1bmN0aW9uIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uKF9yZWYyMSkge1xuICAgIHZhciBvcGVyYXRpb24gPSBfcmVmMjEub3BlcmF0aW9uLFxuICAgICAgICB0eXBlID0gX3JlZjIxLnR5cGU7XG4gICAgcmV0dXJuIG9wZXJhdGlvbiArICc6ICcgKyB0eXBlO1xuICB9LFxuXG4gIFNjYWxhclR5cGVEZWZpbml0aW9uOiBmdW5jdGlvbiBTY2FsYXJUeXBlRGVmaW5pdGlvbihfcmVmMjIpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyMi5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjIyLmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIGpvaW4oWydzY2FsYXInLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyldLCAnICcpO1xuICB9LFxuXG4gIE9iamVjdFR5cGVEZWZpbml0aW9uOiBmdW5jdGlvbiBPYmplY3RUeXBlRGVmaW5pdGlvbihfcmVmMjMpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyMy5uYW1lLFxuICAgICAgICBpbnRlcmZhY2VzID0gX3JlZjIzLmludGVyZmFjZXMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjMuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjIzLmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ3R5cGUnLCBuYW1lLCB3cmFwKCdpbXBsZW1lbnRzICcsIGpvaW4oaW50ZXJmYWNlcywgJywgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9LFxuXG4gIEZpZWxkRGVmaW5pdGlvbjogZnVuY3Rpb24gRmllbGREZWZpbml0aW9uKF9yZWYyNCkge1xuICAgIHZhciBuYW1lID0gX3JlZjI0Lm5hbWUsXG4gICAgICAgIGFyZ3MgPSBfcmVmMjQuYXJndW1lbnRzLFxuICAgICAgICB0eXBlID0gX3JlZjI0LnR5cGUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjQuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gbmFtZSArIHdyYXAoJygnLCBqb2luKGFyZ3MsICcsICcpLCAnKScpICsgJzogJyArIHR5cGUgKyB3cmFwKCcgJywgam9pbihkaXJlY3RpdmVzLCAnICcpKTtcbiAgfSxcblxuICBJbnB1dFZhbHVlRGVmaW5pdGlvbjogZnVuY3Rpb24gSW5wdXRWYWx1ZURlZmluaXRpb24oX3JlZjI1KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjUubmFtZSxcbiAgICAgICAgdHlwZSA9IF9yZWYyNS50eXBlLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBfcmVmMjUuZGVmYXVsdFZhbHVlLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjI1LmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIGpvaW4oW25hbWUgKyAnOiAnICsgdHlwZSwgd3JhcCgnPSAnLCBkZWZhdWx0VmFsdWUpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyldLCAnICcpO1xuICB9LFxuXG4gIEludGVyZmFjZVR5cGVEZWZpbml0aW9uOiBmdW5jdGlvbiBJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbihfcmVmMjYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyNi5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjI2LmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYyNi5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydpbnRlcmZhY2UnLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9LFxuXG4gIFVuaW9uVHlwZURlZmluaXRpb246IGZ1bmN0aW9uIFVuaW9uVHlwZURlZmluaXRpb24oX3JlZjI3KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjcubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyNy5kaXJlY3RpdmVzLFxuICAgICAgICB0eXBlcyA9IF9yZWYyNy50eXBlcztcbiAgICByZXR1cm4gam9pbihbJ3VuaW9uJywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCAnPSAnICsgam9pbih0eXBlcywgJyB8ICcpXSwgJyAnKTtcbiAgfSxcblxuICBFbnVtVHlwZURlZmluaXRpb246IGZ1bmN0aW9uIEVudW1UeXBlRGVmaW5pdGlvbihfcmVmMjgpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyOC5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjI4LmRpcmVjdGl2ZXMsXG4gICAgICAgIHZhbHVlcyA9IF9yZWYyOC52YWx1ZXM7XG4gICAgcmV0dXJuIGpvaW4oWydlbnVtJywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCBibG9jayh2YWx1ZXMpXSwgJyAnKTtcbiAgfSxcblxuICBFbnVtVmFsdWVEZWZpbml0aW9uOiBmdW5jdGlvbiBFbnVtVmFsdWVEZWZpbml0aW9uKF9yZWYyOSkge1xuICAgIHZhciBuYW1lID0gX3JlZjI5Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjkuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gam9pbihbbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpXSwgJyAnKTtcbiAgfSxcblxuICBJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uOiBmdW5jdGlvbiBJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uKF9yZWYzMCkge1xuICAgIHZhciBuYW1lID0gX3JlZjMwLm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMzAuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjMwLmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ2lucHV0JywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCBibG9jayhmaWVsZHMpXSwgJyAnKTtcbiAgfSxcblxuICBUeXBlRXh0ZW5zaW9uRGVmaW5pdGlvbjogZnVuY3Rpb24gVHlwZUV4dGVuc2lvbkRlZmluaXRpb24oX3JlZjMxKSB7XG4gICAgdmFyIGRlZmluaXRpb24gPSBfcmVmMzEuZGVmaW5pdGlvbjtcbiAgICByZXR1cm4gJ2V4dGVuZCAnICsgZGVmaW5pdGlvbjtcbiAgfSxcblxuICBEaXJlY3RpdmVEZWZpbml0aW9uOiBmdW5jdGlvbiBEaXJlY3RpdmVEZWZpbml0aW9uKF9yZWYzMikge1xuICAgIHZhciBuYW1lID0gX3JlZjMyLm5hbWUsXG4gICAgICAgIGFyZ3MgPSBfcmVmMzIuYXJndW1lbnRzLFxuICAgICAgICBsb2NhdGlvbnMgPSBfcmVmMzIubG9jYXRpb25zO1xuICAgIHJldHVybiAnZGlyZWN0aXZlIEAnICsgbmFtZSArIHdyYXAoJygnLCBqb2luKGFyZ3MsICcsICcpLCAnKScpICsgJyBvbiAnICsgam9pbihsb2NhdGlvbnMsICcgfCAnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBHaXZlbiBtYXliZUFycmF5LCBwcmludCBhbiBlbXB0eSBzdHJpbmcgaWYgaXQgaXMgbnVsbCBvciBlbXB0eSwgb3RoZXJ3aXNlXG4gKiBwcmludCBhbGwgaXRlbXMgdG9nZXRoZXIgc2VwYXJhdGVkIGJ5IHNlcGFyYXRvciBpZiBwcm92aWRlZFxuICovXG5mdW5jdGlvbiBqb2luKG1heWJlQXJyYXksIHNlcGFyYXRvcikge1xuICByZXR1cm4gbWF5YmVBcnJheSA/IG1heWJlQXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0pLmpvaW4oc2VwYXJhdG9yIHx8ICcnKSA6ICcnO1xufVxuXG4vKipcbiAqIEdpdmVuIGFycmF5LCBwcmludCBlYWNoIGl0ZW0gb24gaXRzIG93biBsaW5lLCB3cmFwcGVkIGluIGFuXG4gKiBpbmRlbnRlZCBcInsgfVwiIGJsb2NrLlxuICovXG5mdW5jdGlvbiBibG9jayhhcnJheSkge1xuICByZXR1cm4gYXJyYXkgJiYgYXJyYXkubGVuZ3RoICE9PSAwID8gaW5kZW50KCd7XFxuJyArIGpvaW4oYXJyYXksICdcXG4nKSkgKyAnXFxufScgOiAne30nO1xufVxuXG4vKipcbiAqIElmIG1heWJlU3RyaW5nIGlzIG5vdCBudWxsIG9yIGVtcHR5LCB0aGVuIHdyYXAgd2l0aCBzdGFydCBhbmQgZW5kLCBvdGhlcndpc2VcbiAqIHByaW50IGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gd3JhcChzdGFydCwgbWF5YmVTdHJpbmcsIGVuZCkge1xuICByZXR1cm4gbWF5YmVTdHJpbmcgPyBzdGFydCArIG1heWJlU3RyaW5nICsgKGVuZCB8fCAnJykgOiAnJztcbn1cblxuZnVuY3Rpb24gaW5kZW50KG1heWJlU3RyaW5nKSB7XG4gIHJldHVybiBtYXliZVN0cmluZyAmJiBtYXliZVN0cmluZy5yZXBsYWNlKC9cXG4vZywgJ1xcbiAgJyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9wcmludGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NjJcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIE9iamVjdENhY2hlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYmplY3RDYWNoZShkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhID09PSB2b2lkIDApIHsgZGF0YSA9IHt9OyB9XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIE9iamVjdENhY2hlLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9O1xuICAgIE9iamVjdENhY2hlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbZGF0YUlkXTtcbiAgICB9O1xuICAgIE9iamVjdENhY2hlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoZGF0YUlkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGFbZGF0YUlkXSA9IHZhbHVlO1xuICAgIH07XG4gICAgT2JqZWN0Q2FjaGUucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgdGhpcy5kYXRhW2RhdGFJZF0gPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBPYmplY3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIH07XG4gICAgT2JqZWN0Q2FjaGUucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAobmV3RGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXdEYXRhIHx8IHt9O1xuICAgIH07XG4gICAgcmV0dXJuIE9iamVjdENhY2hlO1xufSgpKTtcbmV4cG9ydCB7IE9iamVjdENhY2hlIH07XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE5vcm1hbGl6ZWRDYWNoZUZhY3Rvcnkoc2VlZCkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0Q2FjaGUoc2VlZCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3RDYWNoZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUtaW5tZW1vcnkvbGliL29iamVjdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NjNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IGdldE9wZXJhdGlvbk5hbWUgfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCAqIGFzIE9ic2VydmFibGUgZnJvbSAnemVuLW9ic2VydmFibGUnO1xuaW1wb3J0IHsgcHJpbnQgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlL3ByaW50ZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlT3BlcmF0aW9uKG9wZXJhdGlvbikge1xuICAgIHZhciBPUEVSQVRJT05fRklFTERTID0gW1xuICAgICAgICAncXVlcnknLFxuICAgICAgICAnb3BlcmF0aW9uTmFtZScsXG4gICAgICAgICd2YXJpYWJsZXMnLFxuICAgICAgICAnZXh0ZW5zaW9ucycsXG4gICAgICAgICdjb250ZXh0JyxcbiAgICBdO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhvcGVyYXRpb24pOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xuICAgICAgICBpZiAoT1BFUkFUSU9OX0ZJRUxEUy5pbmRleE9mKGtleSkgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGFyZ3VtZW50OiBcIiArIGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wZXJhdGlvbjtcbn1cbnZhciBMaW5rRXJyb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMaW5rRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGlua0Vycm9yKG1lc3NhZ2UsIGxpbmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubGluayA9IGxpbms7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIExpbmtFcnJvcjtcbn0oRXJyb3IpKTtcbmV4cG9ydCB7IExpbmtFcnJvciB9O1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGVybWluYXRpbmcobGluaykge1xuICAgIHJldHVybiBsaW5rLnJlcXVlc3QubGVuZ3RoIDw9IDE7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9Qcm9taXNlKG9ic2VydmFibGUpIHtcbiAgICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlByb21pc2UgV3JhcHBlciBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIHJlc3VsdHMgZnJvbSBPYnNlcnZhYmxlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgdmFyIG1ha2VQcm9taXNlID0gdG9Qcm9taXNlO1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Qcm9taXNlKHByb21pc2UpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1PcGVyYXRpb24ob3BlcmF0aW9uKSB7XG4gICAgdmFyIHRyYW5zZm9ybWVkT3BlcmF0aW9uID0ge1xuICAgICAgICB2YXJpYWJsZXM6IG9wZXJhdGlvbi52YXJpYWJsZXMgfHwge30sXG4gICAgICAgIGV4dGVuc2lvbnM6IG9wZXJhdGlvbi5leHRlbnNpb25zIHx8IHt9LFxuICAgICAgICBvcGVyYXRpb25OYW1lOiBvcGVyYXRpb24ub3BlcmF0aW9uTmFtZSxcbiAgICAgICAgcXVlcnk6IG9wZXJhdGlvbi5xdWVyeSxcbiAgICB9O1xuICAgIGlmICghdHJhbnNmb3JtZWRPcGVyYXRpb24ub3BlcmF0aW9uTmFtZSkge1xuICAgICAgICB0cmFuc2Zvcm1lZE9wZXJhdGlvbi5vcGVyYXRpb25OYW1lID1cbiAgICAgICAgICAgIHR5cGVvZiB0cmFuc2Zvcm1lZE9wZXJhdGlvbi5xdWVyeSAhPT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGdldE9wZXJhdGlvbk5hbWUodHJhbnNmb3JtZWRPcGVyYXRpb24ucXVlcnkpXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkT3BlcmF0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wZXJhdGlvbihzdGFydGluZywgb3BlcmF0aW9uKSB7XG4gICAgdmFyIGNvbnRleHQgPSBfX2Fzc2lnbih7fSwgc3RhcnRpbmcpO1xuICAgIHZhciBzZXRDb250ZXh0ID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gX19hc3NpZ24oe30sIGNvbnRleHQsIG5leHQoY29udGV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dCA9IF9fYXNzaWduKHt9LCBjb250ZXh0LCBuZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGdldENvbnRleHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoX19hc3NpZ24oe30sIGNvbnRleHQpKTsgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3BlcmF0aW9uLCAnc2V0Q29udGV4dCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBzZXRDb250ZXh0LFxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcGVyYXRpb24sICdnZXRDb250ZXh0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IGdldENvbnRleHQsXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wZXJhdGlvbiwgJ3RvS2V5Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEtleShvcGVyYXRpb24pOyB9LFxuICAgIH0pO1xuICAgIHJldHVybiBvcGVyYXRpb247XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5KG9wZXJhdGlvbikge1xuICAgIHJldHVybiBwcmludChvcGVyYXRpb24ucXVlcnkpICsgXCJ8XCIgKyBKU09OLnN0cmluZ2lmeShvcGVyYXRpb24udmFyaWFibGVzKSArIFwifFwiICsgb3BlcmF0aW9uLm9wZXJhdGlvbk5hbWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rVXRpbHMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXBvbGxvLWxpbmsvbGliL2xpbmtVdGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNjY0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbC9hc3NpZ24nO1xuaW1wb3J0IHsgdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uIH0gZnJvbSAnLi9zdG9yZVV0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRNdXRhdGlvbkRlZmluaXRpb24oZG9jKSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2MpO1xuICAgIHZhciBtdXRhdGlvbkRlZiA9IGRvYy5kZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmXG4gICAgICAgICAgICBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gJ211dGF0aW9uJztcbiAgICB9KVswXTtcbiAgICBpZiAoIW11dGF0aW9uRGVmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBjb250YWluIGEgbXV0YXRpb24gZGVmaW5pdGlvbi4nKTtcbiAgICB9XG4gICAgcmV0dXJuIG11dGF0aW9uRGVmO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRG9jdW1lbnQoZG9jKSB7XG4gICAgaWYgKGRvYy5raW5kICE9PSAnRG9jdW1lbnQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGluZyBhIHBhcnNlZCBHcmFwaFFMIGRvY3VtZW50LiBQZXJoYXBzIHlvdSBuZWVkIHRvIHdyYXAgdGhlIHF1ZXJ5IHN0cmluZyBpbiBhIFxcXCJncWxcXFwiIHRhZz8gaHR0cDovL2RvY3MuYXBvbGxvc3RhY2suY29tL2Fwb2xsby1jbGllbnQvY29yZS5odG1sI2dxbFwiKTtcbiAgICB9XG4gICAgdmFyIG9wZXJhdGlvbnMgPSBkb2MuZGVmaW5pdGlvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJzsgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kICE9PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNjaGVtYSB0eXBlIGRlZmluaXRpb25zIG5vdCBhbGxvd2VkIGluIHF1ZXJpZXMuIEZvdW5kOiBcXFwiXCIgKyBkZWZpbml0aW9uLmtpbmQgKyBcIlxcXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfSk7XG4gICAgaWYgKG9wZXJhdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbWJpZ3VvdXMgR3JhcGhRTCBkb2N1bWVudDogY29udGFpbnMgXCIgKyBvcGVyYXRpb25zLmxlbmd0aCArIFwiIG9wZXJhdGlvbnNcIik7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE9wZXJhdGlvbkRlZmluaXRpb24oZG9jKSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2MpO1xuICAgIHJldHVybiBkb2MuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7IHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJzsgfSlbMF07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbk9yRGllKGRvY3VtZW50KSB7XG4gICAgdmFyIGRlZiA9IGdldE9wZXJhdGlvbkRlZmluaXRpb24oZG9jdW1lbnQpO1xuICAgIGlmICghZGVmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdyYXBoUUwgZG9jdW1lbnQgaXMgbWlzc2luZyBhbiBvcGVyYXRpb25cIik7XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0T3BlcmF0aW9uTmFtZShkb2MpIHtcbiAgICByZXR1cm4gKGRvYy5kZWZpbml0aW9uc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJiBkZWZpbml0aW9uLm5hbWU7XG4gICAgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5uYW1lLnZhbHVlOyB9KVswXSB8fCBudWxsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGcmFnbWVudERlZmluaXRpb25zKGRvYykge1xuICAgIHJldHVybiBkb2MuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7IHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nOyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeURlZmluaXRpb24oZG9jKSB7XG4gICAgdmFyIHF1ZXJ5RGVmID0gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihkb2MpO1xuICAgIGlmICghcXVlcnlEZWYgfHwgcXVlcnlEZWYub3BlcmF0aW9uICE9PSAncXVlcnknKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBjb250YWluIGEgcXVlcnkgZGVmaW5pdGlvbi4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5RGVmO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZyYWdtZW50RGVmaW5pdGlvbihkb2MpIHtcbiAgICBpZiAoZG9jLmtpbmQgIT09ICdEb2N1bWVudCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0aW5nIGEgcGFyc2VkIEdyYXBoUUwgZG9jdW1lbnQuIFBlcmhhcHMgeW91IG5lZWQgdG8gd3JhcCB0aGUgcXVlcnkgc3RyaW5nIGluIGEgXFxcImdxbFxcXCIgdGFnPyBodHRwOi8vZG9jcy5hcG9sbG9zdGFjay5jb20vYXBvbGxvLWNsaWVudC9jb3JlLmh0bWwjZ3FsXCIpO1xuICAgIH1cbiAgICBpZiAoZG9jLmRlZmluaXRpb25zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGcmFnbWVudCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgZGVmaW5pdGlvbi4nKTtcbiAgICB9XG4gICAgdmFyIGZyYWdtZW50RGVmID0gZG9jLmRlZmluaXRpb25zWzBdO1xuICAgIGlmIChmcmFnbWVudERlZi5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgYSBmcmFnbWVudCBkZWZpbml0aW9uLicpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnREZWY7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnlEb2MpIHtcbiAgICBjaGVja0RvY3VtZW50KHF1ZXJ5RG9jKTtcbiAgICB2YXIgZnJhZ21lbnREZWZpbml0aW9uO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBxdWVyeURvYy5kZWZpbml0aW9uczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGRlZmluaXRpb24gPSBfYVtfaV07XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgdmFyIG9wZXJhdGlvbiA9IGRlZmluaXRpb24ub3BlcmF0aW9uO1xuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJ3F1ZXJ5JyB8fFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbiA9PT0gJ211dGF0aW9uJyB8fFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJyAmJiAhZnJhZ21lbnREZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBmcmFnbWVudERlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmcmFnbWVudERlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50RGVmaW5pdGlvbjtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhIHBhcnNlZCBHcmFwaFFMIHF1ZXJ5IHdpdGggYSBxdWVyeSwgbXV0YXRpb24sIHN1YnNjcmlwdGlvbiwgb3IgYSBmcmFnbWVudC4nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGcmFnbWVudE1hcChmcmFnbWVudHMpIHtcbiAgICBpZiAoZnJhZ21lbnRzID09PSB2b2lkIDApIHsgZnJhZ21lbnRzID0gW107IH1cbiAgICB2YXIgc3ltVGFibGUgPSB7fTtcbiAgICBmcmFnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZnJhZ21lbnQpIHtcbiAgICAgICAgc3ltVGFibGVbZnJhZ21lbnQubmFtZS52YWx1ZV0gPSBmcmFnbWVudDtcbiAgICB9KTtcbiAgICByZXR1cm4gc3ltVGFibGU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlcyhkZWZpbml0aW9uKSB7XG4gICAgaWYgKGRlZmluaXRpb24gJiZcbiAgICAgICAgZGVmaW5pdGlvbi52YXJpYWJsZURlZmluaXRpb25zICYmXG4gICAgICAgIGRlZmluaXRpb24udmFyaWFibGVEZWZpbml0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZXMgPSBkZWZpbml0aW9uLnZhcmlhYmxlRGVmaW5pdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX2EuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgdmFyaWFibGUgPSBfYS52YXJpYWJsZSwgZGVmYXVsdFZhbHVlID0gX2EuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZU9iaiA9IHt9O1xuICAgICAgICAgICAgdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGRlZmF1bHRWYWx1ZU9iaiwgdmFyaWFibGUubmFtZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVPYmo7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXNzaWduLmFwcGx5KHZvaWQgMCwgW3t9XS5jb25jYXQoZGVmYXVsdFZhbHVlcykpO1xuICAgIH1cbiAgICByZXR1cm4ge307XG59XG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzSW5PcGVyYXRpb24ob3BlcmF0aW9uKSB7XG4gICAgdmFyIG5hbWVzID0gbmV3IFNldCgpO1xuICAgIGlmIChvcGVyYXRpb24udmFyaWFibGVEZWZpbml0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gb3BlcmF0aW9uLnZhcmlhYmxlRGVmaW5pdGlvbnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGVmaW5pdGlvbiA9IF9hW19pXTtcbiAgICAgICAgICAgIG5hbWVzLmFkZChkZWZpbml0aW9uLnZhcmlhYmxlLm5hbWUudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuYW1lcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldEZyb21BU1QuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXBvbGxvLXV0aWxpdGllcy9saWIvZ2V0RnJvbUFTVC5qc1xuLy8gbW9kdWxlIGlkID0gNjY1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBzb3VyY2VzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcgfHwgc291cmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3NpZ24uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXBvbGxvLXV0aWxpdGllcy9saWIvdXRpbC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDY2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnQgZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGNsb25lRGVlcChpdGVtKTsgfSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciBuZXh0VmFsdWUgPSB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5leHRWYWx1ZVtrZXldID0gY2xvbmVEZWVwKHZhbHVlW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsb25lRGVlcC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi91dGlsL2Nsb25lRGVlcC5qc1xuLy8gbW9kdWxlIGlkID0gNjY3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7IGlzVGVzdCwgd2Fybk9uY2VJbkRldmVsb3BtZW50IH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG52YXIgaGF2ZVdhcm5lZCA9IGZhbHNlO1xudmFyIEhldXJpc3RpY0ZyYWdtZW50TWF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSGV1cmlzdGljRnJhZ21lbnRNYXRjaGVyKCkge1xuICAgIH1cbiAgICBIZXVyaXN0aWNGcmFnbWVudE1hdGNoZXIucHJvdG90eXBlLmVuc3VyZVJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcbiAgICBIZXVyaXN0aWNGcmFnbWVudE1hdGNoZXIucHJvdG90eXBlLmNhbkJ5cGFzc0luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgSGV1cmlzdGljRnJhZ21lbnRNYXRjaGVyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uIChpZFZhbHVlLCB0eXBlQ29uZGl0aW9uLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBvYmogPSBjb250ZXh0LnN0b3JlLmdldChpZFZhbHVlLmlkKTtcbiAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIWhhdmVXYXJuZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJZb3UncmUgdXNpbmcgZnJhZ21lbnRzIGluIHlvdXIgcXVlcmllcywgYnV0IGVpdGhlciBkb24ndCBoYXZlIHRoZSBhZGRUeXBlbmFtZTpcXG4gIHRydWUgb3B0aW9uIHNldCBpbiBBcG9sbG8gQ2xpZW50LCBvciB5b3UgYXJlIHRyeWluZyB0byB3cml0ZSBhIGZyYWdtZW50IHRvIHRoZSBzdG9yZSB3aXRob3V0IHRoZSBfX3R5cGVuYW1lLlxcbiAgIFBsZWFzZSB0dXJuIG9uIHRoZSBhZGRUeXBlbmFtZSBvcHRpb24gYW5kIGluY2x1ZGUgX190eXBlbmFtZSB3aGVuIHdyaXRpbmcgZnJhZ21lbnRzIHNvIHRoYXQgQXBvbGxvIENsaWVudFxcbiAgIGNhbiBhY2N1cmF0ZWx5IG1hdGNoIGZyYWdtZW50cy5cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgZmluZCBfX3R5cGVuYW1lIG9uIEZyYWdtZW50ICcsIHR5cGVDb25kaXRpb24sIG9iaik7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiREVQUkVDQVRJT04gV0FSTklORzogdXNpbmcgZnJhZ21lbnRzIHdpdGhvdXQgX190eXBlbmFtZSBpcyB1bnN1cHBvcnRlZCBiZWhhdmlvciBcIiArXG4gICAgICAgICAgICAgICAgICAgIFwiYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgQXBvbGxvIGNsaWVudC4gWW91IHNob3VsZCBmaXggdGhpcyBhbmQgc2V0IGFkZFR5cGVuYW1lIHRvIHRydWUgbm93LlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVGVzdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhdmVXYXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQucmV0dXJuUGFydGlhbERhdGEgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5fX3R5cGVuYW1lID09PSB0eXBlQ29uZGl0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB3YXJuT25jZUluRGV2ZWxvcG1lbnQoXCJZb3UgYXJlIHVzaW5nIHRoZSBzaW1wbGUgKGhldXJpc3RpYykgZnJhZ21lbnQgbWF0Y2hlciwgYnV0IHlvdXIgcXVlcmllcyBjb250YWluIHVuaW9uIG9yIGludGVyZmFjZSB0eXBlcy5cXG4gICAgIEFwb2xsbyBDbGllbnQgd2lsbCBub3QgYmUgYWJsZSB0byBhYmxlIHRvIGFjY3VyYXRlbHkgbWFwIGZyYWdtZW50cy5cIiArXG4gICAgICAgICAgICBcIlRvIG1ha2UgdGhpcyBlcnJvciBnbyBhd2F5LCB1c2UgdGhlIEludHJvc3BlY3Rpb25GcmFnbWVudE1hdGNoZXIgYXMgZGVzY3JpYmVkIGluIHRoZSBkb2NzOiBcIiArXG4gICAgICAgICAgICBcImh0dHA6Ly9kZXYuYXBvbGxvZGF0YS5jb20vcmVhY3QvaW5pdGlhbGl6YXRpb24uaHRtbCNmcmFnbWVudC1tYXRjaGVyXCIsICdlcnJvcicpO1xuICAgICAgICBjb250ZXh0LnJldHVyblBhcnRpYWxEYXRhID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gSGV1cmlzdGljRnJhZ21lbnRNYXRjaGVyO1xufSgpKTtcbmV4cG9ydCB7IEhldXJpc3RpY0ZyYWdtZW50TWF0Y2hlciB9O1xudmFyIEludHJvc3BlY3Rpb25GcmFnbWVudE1hdGNoZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEludHJvc3BlY3Rpb25GcmFnbWVudE1hdGNoZXIob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmludHJvc3BlY3Rpb25RdWVyeVJlc3VsdERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucG9zc2libGVUeXBlc01hcCA9IHRoaXMucGFyc2VJbnRyb3NwZWN0aW9uUmVzdWx0KG9wdGlvbnMuaW50cm9zcGVjdGlvblF1ZXJ5UmVzdWx0RGF0YSk7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guYmluZCh0aGlzKTtcbiAgICB9XG4gICAgSW50cm9zcGVjdGlvbkZyYWdtZW50TWF0Y2hlci5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbiAoaWRWYWx1ZSwgdHlwZUNvbmRpdGlvbiwgY29udGV4dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGcmFnbWVudE1hdGNoZXIubWF0Y2goKSB3YXMgY2FsbGVkIGJlZm9yZSBGcmFnbWVudE1hdGNoZXIuaW5pdCgpJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9iaiA9IGNvbnRleHQuc3RvcmUuZ2V0KGlkVmFsdWUuaWQpO1xuICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb2JqLl9fdHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBtYXRjaCBmcmFnbWVudCBiZWNhdXNlIF9fdHlwZW5hbWUgcHJvcGVydHkgaXMgbWlzc2luZzogXCIgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLl9fdHlwZW5hbWUgPT09IHR5cGVDb25kaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbXBsZW1lbnRpbmdUeXBlcyA9IHRoaXMucG9zc2libGVUeXBlc01hcFt0eXBlQ29uZGl0aW9uXTtcbiAgICAgICAgaWYgKGltcGxlbWVudGluZ1R5cGVzICYmIGltcGxlbWVudGluZ1R5cGVzLmluZGV4T2Yob2JqLl9fdHlwZW5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEludHJvc3BlY3Rpb25GcmFnbWVudE1hdGNoZXIucHJvdG90eXBlLnBhcnNlSW50cm9zcGVjdGlvblJlc3VsdCA9IGZ1bmN0aW9uIChpbnRyb3NwZWN0aW9uUmVzdWx0RGF0YSkge1xuICAgICAgICB2YXIgdHlwZU1hcCA9IHt9O1xuICAgICAgICBpbnRyb3NwZWN0aW9uUmVzdWx0RGF0YS5fX3NjaGVtYS50eXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICBpZiAodHlwZS5raW5kID09PSAnVU5JT04nIHx8IHR5cGUua2luZCA9PT0gJ0lOVEVSRkFDRScpIHtcbiAgICAgICAgICAgICAgICB0eXBlTWFwW3R5cGUubmFtZV0gPSB0eXBlLnBvc3NpYmxlVHlwZXMubWFwKGZ1bmN0aW9uIChpbXBsZW1lbnRpbmdUeXBlKSB7IHJldHVybiBpbXBsZW1lbnRpbmdUeXBlLm5hbWU7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGVNYXA7XG4gICAgfTtcbiAgICByZXR1cm4gSW50cm9zcGVjdGlvbkZyYWdtZW50TWF0Y2hlcjtcbn0oKSk7XG5leHBvcnQgeyBJbnRyb3NwZWN0aW9uRnJhZ21lbnRNYXRjaGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcmFnbWVudE1hdGNoZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXBvbGxvLWNhY2hlLWlubWVtb3J5L2xpYi9mcmFnbWVudE1hdGNoZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgcHJpbnQgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlL3ByaW50ZXInO1xuaW1wb3J0IHsgYXNzaWduLCBjcmVhdGVGcmFnbWVudE1hcCwgZ2V0RGVmYXVsdFZhbHVlcywgZ2V0RnJhZ21lbnREZWZpbml0aW9ucywgZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbiwgaXNGaWVsZCwgaXNJZFZhbHVlLCBpc0lubGluZUZyYWdtZW50LCBpc1Byb2R1Y3Rpb24sIHJlc3VsdEtleU5hbWVGcm9tRmllbGQsIHNob3VsZEluY2x1ZGUsIHN0b3JlS2V5TmFtZUZyb21GaWVsZCwgZ2V0UXVlcnlEZWZpbml0aW9uLCB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZGVmYXVsdE5vcm1hbGl6ZWRDYWNoZUZhY3RvcnksIE9iamVjdENhY2hlIH0gZnJvbSAnLi9vYmplY3RDYWNoZSc7XG52YXIgV3JpdGVFcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFdyaXRlRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gV3JpdGVFcnJvcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnR5cGUgPSAnV3JpdGVFcnJvcic7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFdyaXRlRXJyb3I7XG59KEVycm9yKSk7XG5leHBvcnQgeyBXcml0ZUVycm9yIH07XG5leHBvcnQgZnVuY3Rpb24gZW5oYW5jZUVycm9yV2l0aERvY3VtZW50KGVycm9yLCBkb2N1bWVudCkge1xuICAgIHZhciBlbmhhbmNlZEVycm9yID0gbmV3IFdyaXRlRXJyb3IoXCJFcnJvciB3cml0aW5nIHJlc3VsdCB0byBzdG9yZSBmb3IgcXVlcnk6XFxuIFwiICsgcHJpbnQoZG9jdW1lbnQpKTtcbiAgICBlbmhhbmNlZEVycm9yLm1lc3NhZ2UgKz0gJ1xcbicgKyBlcnJvci5tZXNzYWdlO1xuICAgIGVuaGFuY2VkRXJyb3Iuc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICByZXR1cm4gZW5oYW5jZWRFcnJvcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZVF1ZXJ5VG9TdG9yZShfYSkge1xuICAgIHZhciByZXN1bHQgPSBfYS5yZXN1bHQsIHF1ZXJ5ID0gX2EucXVlcnksIF9iID0gX2Euc3RvcmVGYWN0b3J5LCBzdG9yZUZhY3RvcnkgPSBfYiA9PT0gdm9pZCAwID8gZGVmYXVsdE5vcm1hbGl6ZWRDYWNoZUZhY3RvcnkgOiBfYiwgX2MgPSBfYS5zdG9yZSwgc3RvcmUgPSBfYyA9PT0gdm9pZCAwID8gc3RvcmVGYWN0b3J5KCkgOiBfYywgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBkYXRhSWRGcm9tT2JqZWN0ID0gX2EuZGF0YUlkRnJvbU9iamVjdCwgX2QgPSBfYS5mcmFnbWVudE1hcCwgZnJhZ21lbnRNYXAgPSBfZCA9PT0gdm9pZCAwID8ge30gOiBfZCwgZnJhZ21lbnRNYXRjaGVyRnVuY3Rpb24gPSBfYS5mcmFnbWVudE1hdGNoZXJGdW5jdGlvbjtcbiAgICB2YXIgcXVlcnlEZWZpbml0aW9uID0gZ2V0UXVlcnlEZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICB2YXJpYWJsZXMgPSBhc3NpZ24oe30sIGdldERlZmF1bHRWYWx1ZXMocXVlcnlEZWZpbml0aW9uKSwgdmFyaWFibGVzKTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gd3JpdGVTZWxlY3Rpb25TZXRUb1N0b3JlKHtcbiAgICAgICAgICAgIGRhdGFJZDogJ1JPT1RfUVVFUlknLFxuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHF1ZXJ5RGVmaW5pdGlvbi5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgICAgICAgICAgIHN0b3JlRmFjdG9yeTogc3RvcmVGYWN0b3J5LFxuICAgICAgICAgICAgICAgIHByb2Nlc3NlZERhdGE6IHt9LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIGRhdGFJZEZyb21PYmplY3Q6IGRhdGFJZEZyb21PYmplY3QsXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRNYXA6IGZyYWdtZW50TWFwLFxuICAgICAgICAgICAgICAgIGZyYWdtZW50TWF0Y2hlckZ1bmN0aW9uOiBmcmFnbWVudE1hdGNoZXJGdW5jdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBlbmhhbmNlRXJyb3JXaXRoRG9jdW1lbnQoZSwgcXVlcnkpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZVJlc3VsdFRvU3RvcmUoX2EpIHtcbiAgICB2YXIgZGF0YUlkID0gX2EuZGF0YUlkLCByZXN1bHQgPSBfYS5yZXN1bHQsIGRvY3VtZW50ID0gX2EuZG9jdW1lbnQsIF9iID0gX2Euc3RvcmVGYWN0b3J5LCBzdG9yZUZhY3RvcnkgPSBfYiA9PT0gdm9pZCAwID8gZGVmYXVsdE5vcm1hbGl6ZWRDYWNoZUZhY3RvcnkgOiBfYiwgX2MgPSBfYS5zdG9yZSwgc3RvcmUgPSBfYyA9PT0gdm9pZCAwID8gc3RvcmVGYWN0b3J5KCkgOiBfYywgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBkYXRhSWRGcm9tT2JqZWN0ID0gX2EuZGF0YUlkRnJvbU9iamVjdCwgZnJhZ21lbnRNYXRjaGVyRnVuY3Rpb24gPSBfYS5mcmFnbWVudE1hdGNoZXJGdW5jdGlvbjtcbiAgICB2YXIgb3BlcmF0aW9uRGVmaW5pdGlvbiA9IGdldE9wZXJhdGlvbkRlZmluaXRpb24oZG9jdW1lbnQpO1xuICAgIHZhciBzZWxlY3Rpb25TZXQgPSBvcGVyYXRpb25EZWZpbml0aW9uLnNlbGVjdGlvblNldDtcbiAgICB2YXIgZnJhZ21lbnRNYXAgPSBjcmVhdGVGcmFnbWVudE1hcChnZXRGcmFnbWVudERlZmluaXRpb25zKGRvY3VtZW50KSk7XG4gICAgdmFyaWFibGVzID0gYXNzaWduKHt9LCBnZXREZWZhdWx0VmFsdWVzKG9wZXJhdGlvbkRlZmluaXRpb24pLCB2YXJpYWJsZXMpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB3cml0ZVNlbGVjdGlvblNldFRvU3RvcmUoe1xuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICBkYXRhSWQ6IGRhdGFJZCxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDogc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgICAgICAgICAgICBzdG9yZUZhY3Rvcnk6IHN0b3JlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWREYXRhOiB7fSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBkYXRhSWRGcm9tT2JqZWN0OiBkYXRhSWRGcm9tT2JqZWN0LFxuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwOiBmcmFnbWVudE1hcCxcbiAgICAgICAgICAgICAgICBmcmFnbWVudE1hdGNoZXJGdW5jdGlvbjogZnJhZ21lbnRNYXRjaGVyRnVuY3Rpb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgZW5oYW5jZUVycm9yV2l0aERvY3VtZW50KGUsIGRvY3VtZW50KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gd3JpdGVTZWxlY3Rpb25TZXRUb1N0b3JlKF9hKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9hLnJlc3VsdCwgZGF0YUlkID0gX2EuZGF0YUlkLCBzZWxlY3Rpb25TZXQgPSBfYS5zZWxlY3Rpb25TZXQsIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgIHZhciB2YXJpYWJsZXMgPSBjb250ZXh0LnZhcmlhYmxlcywgc3RvcmUgPSBjb250ZXh0LnN0b3JlLCBmcmFnbWVudE1hcCA9IGNvbnRleHQuZnJhZ21lbnRNYXA7XG4gICAgc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHZhciBpbmNsdWRlZCA9IHNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCB2YXJpYWJsZXMpO1xuICAgICAgICBpZiAoaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0RmllbGRLZXkgPSByZXN1bHRLZXlOYW1lRnJvbUZpZWxkKHNlbGVjdGlvbik7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHRbcmVzdWx0RmllbGRLZXldO1xuICAgICAgICAgICAgaWYgKGluY2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVGaWVsZFRvU3RvcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUlkOiBkYXRhSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNEZWZlcmVkID0gc2VsZWN0aW9uLmRpcmVjdGl2ZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5kaXJlY3RpdmVzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZGlyZWN0aXZlKSB7IHJldHVybiBkaXJlY3RpdmUubmFtZSAmJiBkaXJlY3RpdmUubmFtZS52YWx1ZSA9PT0gJ2RlZmVyJzsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNEZWZlcmVkICYmIGNvbnRleHQuZnJhZ21lbnRNYXRjaGVyRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNQcm9kdWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJNaXNzaW5nIGZpZWxkIFwiICsgcmVzdWx0RmllbGRLZXkgKyBcIiBpbiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikuc3Vic3RyaW5nKDAsIDEwMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGlzSW5saW5lRnJhZ21lbnQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gc2VsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQgPSAoZnJhZ21lbnRNYXAgfHwge30pW3NlbGVjdGlvbi5uYW1lLnZhbHVlXTtcbiAgICAgICAgICAgICAgICBpZiAoIWZyYWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGZyYWdtZW50IG5hbWVkIFwiICsgc2VsZWN0aW9uLm5hbWUudmFsdWUgKyBcIi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZnJhZ21lbnRNYXRjaGVyRnVuY3Rpb24gJiYgZnJhZ21lbnQudHlwZUNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBpZFZhbHVlID0geyB0eXBlOiAnaWQnLCBpZDogJ3NlbGYnLCBnZW5lcmF0ZWQ6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgdmFyIGZha2VDb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZTogbmV3IE9iamVjdENhY2hlKHsgc2VsZjogcmVzdWx0IH0pLFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGhhc01pc3NpbmdGaWVsZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlUmVzb2x2ZXJzOiB7fSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBjb250ZXh0LmZyYWdtZW50TWF0Y2hlckZ1bmN0aW9uKGlkVmFsdWUsIGZyYWdtZW50LnR5cGVDb25kaXRpb24ubmFtZS52YWx1ZSwgZmFrZUNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmICghaXNQcm9kdWN0aW9uKCkgJiYgZmFrZUNvbnRleHQucmV0dXJuUGFydGlhbERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignV0FSTklORzogaGV1cmlzdGljIGZyYWdtZW50IG1hdGNoaW5nIGdvaW5nIG9uIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmNsdWRlZCAmJiBtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgd3JpdGVTZWxlY3Rpb25TZXRUb1N0b3JlKHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDogZnJhZ21lbnQuc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgICAgICAgICBkYXRhSWQ6IGRhdGFJZCxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdG9yZTtcbn1cbmZ1bmN0aW9uIGlzR2VuZXJhdGVkSWQoaWQpIHtcbiAgICByZXR1cm4gaWRbMF0gPT09ICckJztcbn1cbmZ1bmN0aW9uIG1lcmdlV2l0aEdlbmVyYXRlZChnZW5lcmF0ZWRLZXksIHJlYWxLZXksIGNhY2hlKSB7XG4gICAgdmFyIGdlbmVyYXRlZCA9IGNhY2hlLmdldChnZW5lcmF0ZWRLZXkpO1xuICAgIHZhciByZWFsID0gY2FjaGUuZ2V0KHJlYWxLZXkpO1xuICAgIE9iamVjdC5rZXlzKGdlbmVyYXRlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGdlbmVyYXRlZFtrZXldO1xuICAgICAgICB2YXIgcmVhbFZhbHVlID0gcmVhbFtrZXldO1xuICAgICAgICBpZiAoaXNJZFZhbHVlKHZhbHVlKSAmJiBpc0dlbmVyYXRlZElkKHZhbHVlLmlkKSAmJiBpc0lkVmFsdWUocmVhbFZhbHVlKSkge1xuICAgICAgICAgICAgbWVyZ2VXaXRoR2VuZXJhdGVkKHZhbHVlLmlkLCByZWFsVmFsdWUuaWQsIGNhY2hlKTtcbiAgICAgICAgfVxuICAgICAgICBjYWNoZS5kZWxldGUoZ2VuZXJhdGVkS2V5KTtcbiAgICAgICAgY2FjaGUuc2V0KHJlYWxLZXksIF9fYXNzaWduKHt9LCBnZW5lcmF0ZWQsIHJlYWwpKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzRGF0YVByb2Nlc3NlZChkYXRhSWQsIGZpZWxkLCBwcm9jZXNzZWREYXRhKSB7XG4gICAgaWYgKCFwcm9jZXNzZWREYXRhKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3NlZERhdGFbZGF0YUlkXSkge1xuICAgICAgICBpZiAocHJvY2Vzc2VkRGF0YVtkYXRhSWRdLmluZGV4T2YoZmllbGQpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YVtkYXRhSWRdLnB1c2goZmllbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcm9jZXNzZWREYXRhW2RhdGFJZF0gPSBbZmllbGRdO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiB3cml0ZUZpZWxkVG9TdG9yZShfYSkge1xuICAgIHZhciBmaWVsZCA9IF9hLmZpZWxkLCB2YWx1ZSA9IF9hLnZhbHVlLCBkYXRhSWQgPSBfYS5kYXRhSWQsIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgIHZhciB2YXJpYWJsZXMgPSBjb250ZXh0LnZhcmlhYmxlcywgZGF0YUlkRnJvbU9iamVjdCA9IGNvbnRleHQuZGF0YUlkRnJvbU9iamVjdCwgc3RvcmUgPSBjb250ZXh0LnN0b3JlO1xuICAgIHZhciBzdG9yZVZhbHVlO1xuICAgIHZhciBzdG9yZU9iamVjdDtcbiAgICB2YXIgc3RvcmVGaWVsZE5hbWUgPSBzdG9yZUtleU5hbWVGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcyk7XG4gICAgdmFyIHNob3VsZE1lcmdlID0gZmFsc2U7XG4gICAgdmFyIGdlbmVyYXRlZEtleSA9ICcnO1xuICAgIGlmICghZmllbGQuc2VsZWN0aW9uU2V0IHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHN0b3JlVmFsdWUgPVxuICAgICAgICAgICAgdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6ICdqc29uJywganNvbjogdmFsdWUgfVxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhciBnZW5lcmF0ZWRJZCA9IGRhdGFJZCArIFwiLlwiICsgc3RvcmVGaWVsZE5hbWU7XG4gICAgICAgIHN0b3JlVmFsdWUgPSBwcm9jZXNzQXJyYXlWYWx1ZSh2YWx1ZSwgZ2VuZXJhdGVkSWQsIGZpZWxkLnNlbGVjdGlvblNldCwgY29udGV4dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdmFsdWVEYXRhSWQgPSBkYXRhSWQgKyBcIi5cIiArIHN0b3JlRmllbGROYW1lO1xuICAgICAgICB2YXIgZ2VuZXJhdGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpc0dlbmVyYXRlZElkKHZhbHVlRGF0YUlkKSkge1xuICAgICAgICAgICAgdmFsdWVEYXRhSWQgPSAnJCcgKyB2YWx1ZURhdGFJZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YUlkRnJvbU9iamVjdCkge1xuICAgICAgICAgICAgdmFyIHNlbWFudGljSWQgPSBkYXRhSWRGcm9tT2JqZWN0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChzZW1hbnRpY0lkICYmIGlzR2VuZXJhdGVkSWQoc2VtYW50aWNJZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lEcyByZXR1cm5lZCBieSBkYXRhSWRGcm9tT2JqZWN0IGNhbm5vdCBiZWdpbiB3aXRoIHRoZSBcIiRcIiBjaGFyYWN0ZXIuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VtYW50aWNJZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlRGF0YUlkID0gc2VtYW50aWNJZDtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRGF0YVByb2Nlc3NlZCh2YWx1ZURhdGFJZCwgZmllbGQsIGNvbnRleHQucHJvY2Vzc2VkRGF0YSkpIHtcbiAgICAgICAgICAgIHdyaXRlU2VsZWN0aW9uU2V0VG9TdG9yZSh7XG4gICAgICAgICAgICAgICAgZGF0YUlkOiB2YWx1ZURhdGFJZCxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDogZmllbGQuc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzdG9yZVZhbHVlID0ge1xuICAgICAgICAgICAgdHlwZTogJ2lkJyxcbiAgICAgICAgICAgIGlkOiB2YWx1ZURhdGFJZCxcbiAgICAgICAgICAgIGdlbmVyYXRlZDogZ2VuZXJhdGVkLFxuICAgICAgICB9O1xuICAgICAgICBzdG9yZU9iamVjdCA9IHN0b3JlLmdldChkYXRhSWQpO1xuICAgICAgICBpZiAoc3RvcmVPYmplY3QgJiYgc3RvcmVPYmplY3Rbc3RvcmVGaWVsZE5hbWVdICE9PSBzdG9yZVZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZXNjYXBlZElkID0gc3RvcmVPYmplY3Rbc3RvcmVGaWVsZE5hbWVdO1xuICAgICAgICAgICAgaWYgKGlzSWRWYWx1ZShzdG9yZVZhbHVlKSAmJlxuICAgICAgICAgICAgICAgIHN0b3JlVmFsdWUuZ2VuZXJhdGVkICYmXG4gICAgICAgICAgICAgICAgaXNJZFZhbHVlKGVzY2FwZWRJZCkgJiZcbiAgICAgICAgICAgICAgICAhZXNjYXBlZElkLmdlbmVyYXRlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0b3JlIGVycm9yOiB0aGUgYXBwbGljYXRpb24gYXR0ZW1wdGVkIHRvIHdyaXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3ZpZGVkIGlkXCIgK1xuICAgICAgICAgICAgICAgICAgICAoXCIgYnV0IHRoZSBzdG9yZSBhbHJlYWR5IGNvbnRhaW5zIGFuIGlkIG9mIFwiICsgZXNjYXBlZElkLmlkICsgXCIgZm9yIHRoaXMgb2JqZWN0LiBUaGUgc2VsZWN0aW9uU2V0XCIpICtcbiAgICAgICAgICAgICAgICAgICAgXCIgdGhhdCB3YXMgdHJ5aW5nIHRvIGJlIHdyaXR0ZW4gaXM6XFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICBwcmludChmaWVsZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzSWRWYWx1ZShlc2NhcGVkSWQpICYmIGVzY2FwZWRJZC5nZW5lcmF0ZWQpIHtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZWRLZXkgPSBlc2NhcGVkSWQuaWQ7XG4gICAgICAgICAgICAgICAgc2hvdWxkTWVyZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBuZXdTdG9yZU9iaiA9IF9fYXNzaWduKHt9LCBzdG9yZS5nZXQoZGF0YUlkKSwgKF9iID0ge30sIF9iW3N0b3JlRmllbGROYW1lXSA9IHN0b3JlVmFsdWUsIF9iKSk7XG4gICAgaWYgKHNob3VsZE1lcmdlKSB7XG4gICAgICAgIG1lcmdlV2l0aEdlbmVyYXRlZChnZW5lcmF0ZWRLZXksIHN0b3JlVmFsdWUuaWQsIHN0b3JlKTtcbiAgICB9XG4gICAgc3RvcmVPYmplY3QgPSBzdG9yZS5nZXQoZGF0YUlkKTtcbiAgICBpZiAoIXN0b3JlT2JqZWN0IHx8IHN0b3JlVmFsdWUgIT09IHN0b3JlT2JqZWN0W3N0b3JlRmllbGROYW1lXSkge1xuICAgICAgICBzdG9yZS5zZXQoZGF0YUlkLCBuZXdTdG9yZU9iaik7XG4gICAgfVxuICAgIHZhciBfYjtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NBcnJheVZhbHVlKHZhbHVlLCBnZW5lcmF0ZWRJZCwgc2VsZWN0aW9uU2V0LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpdGVtRGF0YUlkID0gZ2VuZXJhdGVkSWQgKyBcIi5cIiArIGluZGV4O1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NBcnJheVZhbHVlKGl0ZW0sIGl0ZW1EYXRhSWQsIHNlbGVjdGlvblNldCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGdlbmVyYXRlZCA9IHRydWU7XG4gICAgICAgIGlmIChjb250ZXh0LmRhdGFJZEZyb21PYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBzZW1hbnRpY0lkID0gY29udGV4dC5kYXRhSWRGcm9tT2JqZWN0KGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHNlbWFudGljSWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtRGF0YUlkID0gc2VtYW50aWNJZDtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRGF0YVByb2Nlc3NlZChpdGVtRGF0YUlkLCBzZWxlY3Rpb25TZXQsIGNvbnRleHQucHJvY2Vzc2VkRGF0YSkpIHtcbiAgICAgICAgICAgIHdyaXRlU2VsZWN0aW9uU2V0VG9TdG9yZSh7XG4gICAgICAgICAgICAgICAgZGF0YUlkOiBpdGVtRGF0YUlkLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogaXRlbSxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHNlbGVjdGlvblNldCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlkU3RvcmVWYWx1ZSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdpZCcsXG4gICAgICAgICAgICBpZDogaXRlbURhdGFJZCxcbiAgICAgICAgICAgIGdlbmVyYXRlZDogZ2VuZXJhdGVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaWRTdG9yZVZhbHVlO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVUb1N0b3JlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Fwb2xsby1jYWNoZS1pbm1lbW9yeS9saWIvd3JpdGVUb1N0b3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA2Njlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgZ3JhcGhxbEFueXdoZXJlIGZyb20gJ2dyYXBocWwtYW55d2hlcmUnO1xuaW1wb3J0IHsgYXNzaWduLCBpc0VxdWFsLCBnZXREZWZhdWx0VmFsdWVzLCBnZXRRdWVyeURlZmluaXRpb24sIGlzSnNvblZhbHVlLCBpc0lkVmFsdWUsIGdldFN0b3JlS2V5TmFtZSwgfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmV4cG9ydCB2YXIgSURfS0VZID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ2lkJykgOiAnQEBpZCc7XG5leHBvcnQgZnVuY3Rpb24gcmVhZFF1ZXJ5RnJvbVN0b3JlKG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0c1BhdGNoID0geyByZXR1cm5QYXJ0aWFsRGF0YTogZmFsc2UgfTtcbiAgICByZXR1cm4gZGlmZlF1ZXJ5QWdhaW5zdFN0b3JlKF9fYXNzaWduKHt9LCBvcHRpb25zLCBvcHRzUGF0Y2gpKS5yZXN1bHQ7XG59XG52YXIgcmVhZFN0b3JlUmVzb2x2ZXIgPSBmdW5jdGlvbiAoZmllbGROYW1lLCBpZFZhbHVlLCBhcmdzLCBjb250ZXh0LCBfYSkge1xuICAgIHZhciByZXN1bHRLZXkgPSBfYS5yZXN1bHRLZXksIGRpcmVjdGl2ZXMgPSBfYS5kaXJlY3RpdmVzO1xuICAgIGFzc2VydElkVmFsdWUoaWRWYWx1ZSk7XG4gICAgdmFyIG9iaklkID0gaWRWYWx1ZS5pZDtcbiAgICB2YXIgb2JqID0gY29udGV4dC5zdG9yZS5nZXQob2JqSWQpO1xuICAgIHZhciBzdG9yZUtleU5hbWUgPSBnZXRTdG9yZUtleU5hbWUoZmllbGROYW1lLCBhcmdzLCBkaXJlY3RpdmVzKTtcbiAgICB2YXIgZmllbGRWYWx1ZSA9IChvYmogfHwge30pW3N0b3JlS2V5TmFtZV07XG4gICAgaWYgKHR5cGVvZiBmaWVsZFZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoY29udGV4dC5jYWNoZVJlc29sdmVycyAmJlxuICAgICAgICAgICAgb2JqICYmXG4gICAgICAgICAgICAob2JqLl9fdHlwZW5hbWUgfHwgb2JqSWQgPT09ICdST09UX1FVRVJZJykpIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZSA9IG9iai5fX3R5cGVuYW1lIHx8ICdRdWVyeSc7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGNvbnRleHQuY2FjaGVSZXNvbHZlcnNbdHlwZW5hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZXIgPSB0eXBlW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSByZXNvbHZlcihvYmosIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGZpZWxkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICghY29udGV4dC5yZXR1cm5QYXJ0aWFsRGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZmluZCBmaWVsZCBcIiArIHN0b3JlS2V5TmFtZSArIFwiIG9uIG9iamVjdCAoXCIgKyBvYmpJZCArIFwiKSBcIiArIEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgMikgKyBcIi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5oYXNNaXNzaW5nRmllbGQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZmllbGRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzSnNvblZhbHVlKGZpZWxkVmFsdWUpKSB7XG4gICAgICAgIGlmIChpZFZhbHVlLnByZXZpb3VzUmVzdWx0ICYmXG4gICAgICAgICAgICBpc0VxdWFsKGlkVmFsdWUucHJldmlvdXNSZXN1bHRbcmVzdWx0S2V5XSwgZmllbGRWYWx1ZS5qc29uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkVmFsdWUucHJldmlvdXNSZXN1bHRbcmVzdWx0S2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGRWYWx1ZS5qc29uO1xuICAgIH1cbiAgICBpZiAoaWRWYWx1ZS5wcmV2aW91c1Jlc3VsdCkge1xuICAgICAgICBmaWVsZFZhbHVlID0gYWRkUHJldmlvdXNSZXN1bHRUb0lkVmFsdWVzKGZpZWxkVmFsdWUsIGlkVmFsdWUucHJldmlvdXNSZXN1bHRbcmVzdWx0S2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBmaWVsZFZhbHVlO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBkaWZmUXVlcnlBZ2FpbnN0U3RvcmUoX2EpIHtcbiAgICB2YXIgc3RvcmUgPSBfYS5zdG9yZSwgcXVlcnkgPSBfYS5xdWVyeSwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBwcmV2aW91c1Jlc3VsdCA9IF9hLnByZXZpb3VzUmVzdWx0LCBfYiA9IF9hLnJldHVyblBhcnRpYWxEYXRhLCByZXR1cm5QYXJ0aWFsRGF0YSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gX2Eucm9vdElkLCByb290SWQgPSBfYyA9PT0gdm9pZCAwID8gJ1JPT1RfUVVFUlknIDogX2MsIGZyYWdtZW50TWF0Y2hlckZ1bmN0aW9uID0gX2EuZnJhZ21lbnRNYXRjaGVyRnVuY3Rpb24sIGNvbmZpZyA9IF9hLmNvbmZpZztcbiAgICB2YXIgcXVlcnlEZWZpbml0aW9uID0gZ2V0UXVlcnlEZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICB2YXJpYWJsZXMgPSBhc3NpZ24oe30sIGdldERlZmF1bHRWYWx1ZXMocXVlcnlEZWZpbml0aW9uKSwgdmFyaWFibGVzKTtcbiAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogcmV0dXJuUGFydGlhbERhdGEsXG4gICAgICAgIGNhY2hlUmVzb2x2ZXJzOiAoY29uZmlnICYmIGNvbmZpZy5jYWNoZVJlc29sdmVycykgfHwge30sXG4gICAgICAgIGhhc01pc3NpbmdGaWVsZDogZmFsc2UsXG4gICAgfTtcbiAgICB2YXIgcm9vdElkVmFsdWUgPSB7XG4gICAgICAgIHR5cGU6ICdpZCcsXG4gICAgICAgIGlkOiByb290SWQsXG4gICAgICAgIHByZXZpb3VzUmVzdWx0OiBwcmV2aW91c1Jlc3VsdCxcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSBncmFwaHFsQW55d2hlcmUocmVhZFN0b3JlUmVzb2x2ZXIsIHF1ZXJ5LCByb290SWRWYWx1ZSwgY29udGV4dCwgdmFyaWFibGVzLCB7XG4gICAgICAgIGZyYWdtZW50TWF0Y2hlcjogZnJhZ21lbnRNYXRjaGVyRnVuY3Rpb24sXG4gICAgICAgIHJlc3VsdE1hcHBlcjogcmVzdWx0TWFwcGVyLFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICBjb21wbGV0ZTogIWNvbnRleHQuaGFzTWlzc2luZ0ZpZWxkLFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0SWRWYWx1ZShpZFZhbHVlKSB7XG4gICAgaWYgKCFpc0lkVmFsdWUoaWRWYWx1ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW5jb3VudGVyZWQgYSBzdWItc2VsZWN0aW9uIG9uIHRoZSBxdWVyeSwgYnV0IHRoZSBzdG9yZSBkb2Vzbid0IGhhdmUgYW4gb2JqZWN0IHJlZmVyZW5jZS4gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuIGR1cmluZyBub3JtYWwgdXNlIHVubGVzcyB5b3UgaGF2ZSBjdXN0b20gY29kZSB0aGF0IGlzIGRpcmVjdGx5IG1hbmlwdWxhdGluZyB0aGUgc3RvcmU7IHBsZWFzZSBmaWxlIGFuIGlzc3VlLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRQcmV2aW91c1Jlc3VsdFRvSWRWYWx1ZXModmFsdWUsIHByZXZpb3VzUmVzdWx0KSB7XG4gICAgaWYgKGlzSWRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCB2YWx1ZSwgeyBwcmV2aW91c1Jlc3VsdDogcHJldmlvdXNSZXN1bHQgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhciBpZFRvUHJldmlvdXNSZXN1bHRfMSA9IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJldmlvdXNSZXN1bHQpKSB7XG4gICAgICAgICAgICBwcmV2aW91c1Jlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbVtJRF9LRVldKSB7XG4gICAgICAgICAgICAgICAgICAgIGlkVG9QcmV2aW91c1Jlc3VsdF8xLnNldChpdGVtW0lEX0tFWV0sIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIHZhciBpdGVtUHJldmlvdXNSZXN1bHQgPSBwcmV2aW91c1Jlc3VsdCAmJiBwcmV2aW91c1Jlc3VsdFtpXTtcbiAgICAgICAgICAgIGlmIChpc0lkVmFsdWUoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtUHJldmlvdXNSZXN1bHQgPVxuICAgICAgICAgICAgICAgICAgICBpZFRvUHJldmlvdXNSZXN1bHRfMS5nZXQoaXRlbS5pZCkgfHwgaXRlbVByZXZpb3VzUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZFByZXZpb3VzUmVzdWx0VG9JZFZhbHVlcyhpdGVtLCBpdGVtUHJldmlvdXNSZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gcmVzdWx0TWFwcGVyKHJlc3VsdEZpZWxkcywgaWRWYWx1ZSkge1xuICAgIGlmIChpZFZhbHVlLnByZXZpb3VzUmVzdWx0KSB7XG4gICAgICAgIHZhciBjdXJyZW50UmVzdWx0S2V5c18xID0gT2JqZWN0LmtleXMocmVzdWx0RmllbGRzKTtcbiAgICAgICAgdmFyIHNhbWVBc1ByZXZpb3VzUmVzdWx0ID0gT2JqZWN0LmtleXMoaWRWYWx1ZS5wcmV2aW91c1Jlc3VsdCkucmVkdWNlKGZ1bmN0aW9uIChzYW1lS2V5cywga2V5KSB7IHJldHVybiBzYW1lS2V5cyAmJiBjdXJyZW50UmVzdWx0S2V5c18xLmluZGV4T2Yoa2V5KSA+IC0xOyB9LCB0cnVlKSAmJlxuICAgICAgICAgICAgY3VycmVudFJlc3VsdEtleXNfMS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZU5lc3RlZEFycmF5SXRlbXNTdHJpY3RseUVxdWFsKHJlc3VsdEZpZWxkc1trZXldLCBpZFZhbHVlLnByZXZpb3VzUmVzdWx0W2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGlmIChzYW1lQXNQcmV2aW91c1Jlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkVmFsdWUucHJldmlvdXNSZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3VsdEZpZWxkcywgSURfS0VZLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBpZFZhbHVlLmlkLFxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRGaWVsZHM7XG59XG5mdW5jdGlvbiBhcmVOZXN0ZWRBcnJheUl0ZW1zU3RyaWN0bHlFcXVhbChhLCBiKSB7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShhKSB8fCAhQXJyYXkuaXNBcnJheShiKSB8fCBhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gYS5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaSkgeyByZXR1cm4gYXJlTmVzdGVkQXJyYXlJdGVtc1N0cmljdGx5RXF1YWwoaXRlbSwgYltpXSk7IH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhZEZyb21TdG9yZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUtaW5tZW1vcnkvbGliL3JlYWRGcm9tU3RvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDY3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiwgZ2V0RnJhZ21lbnREZWZpbml0aW9ucywgY3JlYXRlRnJhZ21lbnRNYXAsIHNob3VsZEluY2x1ZGUsIGdldERpcmVjdGl2ZUluZm9Gcm9tRmllbGQsIGlzRmllbGQsIGlzSW5saW5lRnJhZ21lbnQsIHJlc3VsdEtleU5hbWVGcm9tRmllbGQsIGFyZ3VtZW50c09iamVjdEZyb21GaWVsZCwgfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmV4cG9ydCBmdW5jdGlvbiBncmFwaHFsKHJlc29sdmVyLCBkb2N1bWVudCwgcm9vdFZhbHVlLCBjb250ZXh0VmFsdWUsIHZhcmlhYmxlVmFsdWVzLCBleGVjT3B0aW9ucykge1xuICAgIGlmIChleGVjT3B0aW9ucyA9PT0gdm9pZCAwKSB7IGV4ZWNPcHRpb25zID0ge307IH1cbiAgICB2YXIgbWFpbkRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihkb2N1bWVudCk7XG4gICAgdmFyIGZyYWdtZW50cyA9IGdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jdW1lbnQpO1xuICAgIHZhciBmcmFnbWVudE1hcCA9IGNyZWF0ZUZyYWdtZW50TWFwKGZyYWdtZW50cyk7XG4gICAgdmFyIHJlc3VsdE1hcHBlciA9IGV4ZWNPcHRpb25zLnJlc3VsdE1hcHBlcjtcbiAgICB2YXIgZnJhZ21lbnRNYXRjaGVyID0gZXhlY09wdGlvbnMuZnJhZ21lbnRNYXRjaGVyIHx8IChmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9KTtcbiAgICB2YXIgZXhlY0NvbnRleHQgPSB7XG4gICAgICAgIGZyYWdtZW50TWFwOiBmcmFnbWVudE1hcCxcbiAgICAgICAgY29udGV4dFZhbHVlOiBjb250ZXh0VmFsdWUsXG4gICAgICAgIHZhcmlhYmxlVmFsdWVzOiB2YXJpYWJsZVZhbHVlcyxcbiAgICAgICAgcmVzdWx0TWFwcGVyOiByZXN1bHRNYXBwZXIsXG4gICAgICAgIHJlc29sdmVyOiByZXNvbHZlcixcbiAgICAgICAgZnJhZ21lbnRNYXRjaGVyOiBmcmFnbWVudE1hdGNoZXIsXG4gICAgfTtcbiAgICByZXR1cm4gZXhlY3V0ZVNlbGVjdGlvblNldChtYWluRGVmaW5pdGlvbi5zZWxlY3Rpb25TZXQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpO1xufVxuZnVuY3Rpb24gZXhlY3V0ZVNlbGVjdGlvblNldChzZWxlY3Rpb25TZXQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpIHtcbiAgICB2YXIgZnJhZ21lbnRNYXAgPSBleGVjQ29udGV4dC5mcmFnbWVudE1hcCwgY29udGV4dFZhbHVlID0gZXhlY0NvbnRleHQuY29udGV4dFZhbHVlLCB2YXJpYWJsZXMgPSBleGVjQ29udGV4dC52YXJpYWJsZVZhbHVlcztcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmICghc2hvdWxkSW5jbHVkZShzZWxlY3Rpb24sIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRSZXN1bHQgPSBleGVjdXRlRmllbGQoc2VsZWN0aW9uLCByb290VmFsdWUsIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgIHZhciByZXN1bHRGaWVsZEtleSA9IHJlc3VsdEtleU5hbWVGcm9tRmllbGQoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIGlmIChmaWVsZFJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtyZXN1bHRGaWVsZEtleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbcmVzdWx0RmllbGRLZXldID0gZmllbGRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXJnZShyZXN1bHRbcmVzdWx0RmllbGRLZXldLCBmaWVsZFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGlzSW5saW5lRnJhZ21lbnQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gc2VsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQgPSBmcmFnbWVudE1hcFtzZWxlY3Rpb24ubmFtZS52YWx1ZV07XG4gICAgICAgICAgICAgICAgaWYgKCFmcmFnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBmcmFnbWVudCBuYW1lZCBcIiArIHNlbGVjdGlvbi5uYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHlwZUNvbmRpdGlvbiA9IGZyYWdtZW50LnR5cGVDb25kaXRpb24ubmFtZS52YWx1ZTtcbiAgICAgICAgICAgIGlmIChleGVjQ29udGV4dC5mcmFnbWVudE1hdGNoZXIocm9vdFZhbHVlLCB0eXBlQ29uZGl0aW9uLCBjb250ZXh0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50UmVzdWx0ID0gZXhlY3V0ZVNlbGVjdGlvblNldChmcmFnbWVudC5zZWxlY3Rpb25TZXQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgICAgIG1lcmdlKHJlc3VsdCwgZnJhZ21lbnRSZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGV4ZWNDb250ZXh0LnJlc3VsdE1hcHBlcikge1xuICAgICAgICByZXR1cm4gZXhlY0NvbnRleHQucmVzdWx0TWFwcGVyKHJlc3VsdCwgcm9vdFZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVGaWVsZChmaWVsZCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkge1xuICAgIHZhciB2YXJpYWJsZXMgPSBleGVjQ29udGV4dC52YXJpYWJsZVZhbHVlcywgY29udGV4dFZhbHVlID0gZXhlY0NvbnRleHQuY29udGV4dFZhbHVlLCByZXNvbHZlciA9IGV4ZWNDb250ZXh0LnJlc29sdmVyO1xuICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZC5uYW1lLnZhbHVlO1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKGZpZWxkLCB2YXJpYWJsZXMpO1xuICAgIHZhciBpbmZvID0ge1xuICAgICAgICBpc0xlYWY6ICFmaWVsZC5zZWxlY3Rpb25TZXQsXG4gICAgICAgIHJlc3VsdEtleTogcmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCksXG4gICAgICAgIGRpcmVjdGl2ZXM6IGdldERpcmVjdGl2ZUluZm9Gcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcyksXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gcmVzb2x2ZXIoZmllbGROYW1lLCByb290VmFsdWUsIGFyZ3MsIGNvbnRleHRWYWx1ZSwgaW5mbyk7XG4gICAgaWYgKCFmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dGVTdWJTZWxlY3RlZEFycmF5KGZpZWxkLCByZXN1bHQsIGV4ZWNDb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIGV4ZWN1dGVTZWxlY3Rpb25TZXQoZmllbGQuc2VsZWN0aW9uU2V0LCByZXN1bHQsIGV4ZWNDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVTdWJTZWxlY3RlZEFycmF5KGZpZWxkLCByZXN1bHQsIGV4ZWNDb250ZXh0KSB7XG4gICAgcmV0dXJuIHJlc3VsdC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhlY3V0ZVN1YlNlbGVjdGVkQXJyYXkoZmllbGQsIGl0ZW0sIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhlY3V0ZVNlbGVjdGlvblNldChmaWVsZC5zZWxlY3Rpb25TZXQsIGl0ZW0sIGV4ZWNDb250ZXh0KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShkZXN0LCBzcmMpIHtcbiAgICBpZiAoc3JjID09PSBudWxsIHx8IHR5cGVvZiBzcmMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBzcmM7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGRlc3QpLmZvckVhY2goZnVuY3Rpb24gKGRlc3RLZXkpIHtcbiAgICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShkZXN0S2V5KSkge1xuICAgICAgICAgICAgbWVyZ2UoZGVzdFtkZXN0S2V5XSwgc3JjW2Rlc3RLZXldKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaChmdW5jdGlvbiAoc3JjS2V5KSB7XG4gICAgICAgIGlmICghZGVzdC5oYXNPd25Qcm9wZXJ0eShzcmNLZXkpKSB7XG4gICAgICAgICAgICBkZXN0W3NyY0tleV0gPSBzcmNbc3JjS2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JhcGhxbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ncmFwaHFsLWFueXdoZXJlL2xpYi9ncmFwaHFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2NzFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgUmVjb3JkaW5nQ2FjaGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlY29yZGluZ0NhY2hlKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCkgeyBkYXRhID0ge307IH1cbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5yZWNvcmRlZERhdGEgPSB7fTtcbiAgICB9XG4gICAgUmVjb3JkaW5nQ2FjaGUucHJvdG90eXBlLnJlY29yZCA9IGZ1bmN0aW9uICh0cmFuc2FjdGlvbikge1xuICAgICAgICB0cmFuc2FjdGlvbih0aGlzKTtcbiAgICAgICAgdmFyIHJlY29yZGVkRGF0YSA9IHRoaXMucmVjb3JkZWREYXRhO1xuICAgICAgICB0aGlzLnJlY29yZGVkRGF0YSA9IHt9O1xuICAgICAgICByZXR1cm4gcmVjb3JkZWREYXRhO1xuICAgIH07XG4gICAgUmVjb3JkaW5nQ2FjaGUucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIHRoaXMuZGF0YSwgdGhpcy5yZWNvcmRlZERhdGEpO1xuICAgIH07XG4gICAgUmVjb3JkaW5nQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVjb3JkZWREYXRhLmhhc093blByb3BlcnR5KGRhdGFJZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY29yZGVkRGF0YVtkYXRhSWRdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbZGF0YUlkXTtcbiAgICB9O1xuICAgIFJlY29yZGluZ0NhY2hlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoZGF0YUlkLCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5nZXQoZGF0YUlkKSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkZWREYXRhW2RhdGFJZF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVjb3JkaW5nQ2FjaGUucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRlZERhdGFbZGF0YUlkXSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFJlY29yZGluZ0NhY2hlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhSWQpIHsgcmV0dXJuIF90aGlzLmRlbGV0ZShkYXRhSWQpOyB9KTtcbiAgICAgICAgdGhpcy5yZWNvcmRlZERhdGEgPSB7fTtcbiAgICB9O1xuICAgIFJlY29yZGluZ0NhY2hlLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG5ld0RhdGEpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlY29yZGVkRGF0YSA9IF9fYXNzaWduKHt9LCBuZXdEYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBSZWNvcmRpbmdDYWNoZTtcbn0oKSk7XG5leHBvcnQgeyBSZWNvcmRpbmdDYWNoZSB9O1xuZXhwb3J0IGZ1bmN0aW9uIHJlY29yZChzdGFydGluZ1N0YXRlLCB0cmFuc2FjdGlvbikge1xuICAgIHZhciByZWNvcmRpbmdDYWNoZSA9IG5ldyBSZWNvcmRpbmdDYWNoZShzdGFydGluZ1N0YXRlKTtcbiAgICByZXR1cm4gcmVjb3JkaW5nQ2FjaGUucmVjb3JkKHRyYW5zYWN0aW9uKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY29yZGluZ0NhY2hlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Fwb2xsby1jYWNoZS1pbm1lbW9yeS9saWIvcmVjb3JkaW5nQ2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDY3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnQgKiBmcm9tICcuL2h0dHBMaW5rJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Fwb2xsby1saW5rLWh0dHAvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2NzNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgQXBvbGxvTGluaywgT2JzZXJ2YWJsZSB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IHByaW50IH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZS9wcmludGVyJztcbnZhciB0aHJvd1NlcnZlckVycm9yID0gZnVuY3Rpb24gKHJlc3BvbnNlLCByZXN1bHQsIG1lc3NhZ2UpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICBlcnJvci5zdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgIGVycm9yLnJlc3VsdCA9IHJlc3VsdDtcbiAgICB0aHJvdyBlcnJvcjtcbn07XG52YXIgcGFyc2VBbmRDaGVja1Jlc3BvbnNlID0gZnVuY3Rpb24gKHJlcXVlc3QpIHsgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICAudGV4dCgpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChib2R5VGV4dCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYm9keVRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHZhciBwYXJzZUVycm9yID0gZXJyO1xuICAgICAgICAgICAgcGFyc2VFcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgcGFyc2VFcnJvci5zdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICAgICAgcGFyc2VFcnJvci5ib2R5VGV4dCA9IGJvZHlUZXh0O1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHBhcnNlRXJyb3IpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgICAgdGhyb3dTZXJ2ZXJFcnJvcihyZXNwb25zZSwgcmVzdWx0LCBcIlJlc3BvbnNlIG5vdCBzdWNjZXNzZnVsOiBSZWNlaXZlZCBzdGF0dXMgY29kZSBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSAmJiAhcmVzdWx0Lmhhc093blByb3BlcnR5KCdlcnJvcnMnKSkge1xuICAgICAgICAgICAgdGhyb3dTZXJ2ZXJFcnJvcihyZXNwb25zZSwgcmVzdWx0LCBcIlNlcnZlciByZXNwb25zZSB3YXMgbWlzc2luZyBmb3IgcXVlcnkgJ1wiICsgcmVxdWVzdC5vcGVyYXRpb25OYW1lICsgXCInLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufTsgfTtcbnZhciBjaGVja0ZldGNoZXIgPSBmdW5jdGlvbiAoZmV0Y2hlcikge1xuICAgIGlmIChmZXRjaGVyLnVzZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICBJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyBhcG9sbG8tZmV0Y2ghIEFwb2xsbyBMaW5rIG5vdyB1c2VzIG5hdGl2ZSBmZXRjaFxcbiAgICAgIGltcGxlbWVudGF0aW9uLCBzbyBhcG9sbG8tZmV0Y2ggaXMgbm90IG5lZWRlZC4gSWYgeW91IHdhbnQgdG8gdXNlIHlvdXIgZXhpc3RpbmdcXG4gICAgICBhcG9sbG8tZmV0Y2ggbWlkZGxld2FyZSwgcGxlYXNlIGNoZWNrIHRoaXMgZ3VpZGUgdG8gdXBncmFkZTpcXG4gICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hcG9sbG9ncmFwaHFsL2Fwb2xsby1saW5rL2Jsb2IvbWFzdGVyL2RvY3MvaW1wbGVtZW50YXRpb24ubWRcXG4gICAgXCIpO1xuICAgIH1cbn07XG52YXIgd2FybklmTm9GZXRjaCA9IGZ1bmN0aW9uIChmZXRjaGVyKSB7XG4gICAgaWYgKCFmZXRjaGVyICYmIHR5cGVvZiBmZXRjaCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGxpYnJhcnkgPSAndW5mZXRjaCc7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIGxpYnJhcnkgPSAnbm9kZS1mZXRjaCc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImZldGNoIGlzIG5vdCBmb3VuZCBnbG9iYWxseSBhbmQgbm8gZmV0Y2hlciBwYXNzZWQsIHRvIGZpeCBwYXNzIGEgZmV0Y2ggZm9yXFxuICAgICAgeW91ciBlbnZpcm9ubWVudCBsaWtlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL1wiICsgbGlicmFyeSArIFwiLlxcblxcbiAgICAgIEZvciBleGFtcGxlOlxcbiAgICAgICAgaW1wb3J0IGZldGNoIGZyb20gJ1wiICsgbGlicmFyeSArIFwiJztcXG4gICAgICAgIGltcG9ydCB7IGNyZWF0ZUh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XFxuXFxuICAgICAgICBjb25zdCBsaW5rID0gY3JlYXRlSHR0cExpbmsoeyB1cmk6ICcvZ3JhcGhxbCcsIGZldGNoOiBmZXRjaCB9KTtcXG4gICAgICBcIik7XG4gICAgfVxufTtcbnZhciBjcmVhdGVTaWduYWxJZlN1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIEFib3J0Q29udHJvbGxlciA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybiB7IGNvbnRyb2xsZXI6IGZhbHNlLCBzaWduYWw6IGZhbHNlIH07XG4gICAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgdmFyIHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsO1xuICAgIHJldHVybiB7IGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsIHNpZ25hbDogc2lnbmFsIH07XG59O1xudmFyIGRlZmF1bHRIdHRwT3B0aW9ucyA9IHtcbiAgICBpbmNsdWRlUXVlcnk6IHRydWUsXG4gICAgaW5jbHVkZUV4dGVuc2lvbnM6IGZhbHNlLFxufTtcbmV4cG9ydCB2YXIgY3JlYXRlSHR0cExpbmsgPSBmdW5jdGlvbiAobGlua09wdGlvbnMpIHtcbiAgICBpZiAobGlua09wdGlvbnMgPT09IHZvaWQgMCkgeyBsaW5rT3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHVyaSA9IGxpbmtPcHRpb25zLnVyaSwgZmV0Y2hlciA9IGxpbmtPcHRpb25zLmZldGNoLCBpbmNsdWRlRXh0ZW5zaW9ucyA9IGxpbmtPcHRpb25zLmluY2x1ZGVFeHRlbnNpb25zLCByZXF1ZXN0T3B0aW9ucyA9IF9fcmVzdChsaW5rT3B0aW9ucywgW1widXJpXCIsIFwiZmV0Y2hcIiwgXCJpbmNsdWRlRXh0ZW5zaW9uc1wiXSk7XG4gICAgd2FybklmTm9GZXRjaChmZXRjaGVyKTtcbiAgICBpZiAoZmV0Y2hlcilcbiAgICAgICAgY2hlY2tGZXRjaGVyKGZldGNoZXIpO1xuICAgIGlmICghZmV0Y2hlcilcbiAgICAgICAgZmV0Y2hlciA9IGZldGNoO1xuICAgIGlmICghdXJpKVxuICAgICAgICB1cmkgPSAnL2dyYXBocWwnO1xuICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IG9wZXJhdGlvbi5nZXRDb250ZXh0KCksIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBjcmVkZW50aWFscyA9IF9hLmNyZWRlbnRpYWxzLCBfYiA9IF9hLmZldGNoT3B0aW9ucywgZmV0Y2hPcHRpb25zID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2IsIGNvbnRleHRVUkkgPSBfYS51cmksIF9jID0gX2EuaHR0cCwgaHR0cE9wdGlvbnMgPSBfYyA9PT0gdm9pZCAwID8ge30gOiBfYztcbiAgICAgICAgICAgIHZhciBvcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUsIGV4dGVuc2lvbnMgPSBvcGVyYXRpb24uZXh0ZW5zaW9ucywgdmFyaWFibGVzID0gb3BlcmF0aW9uLnZhcmlhYmxlcywgcXVlcnkgPSBvcGVyYXRpb24ucXVlcnk7XG4gICAgICAgICAgICB2YXIgaHR0cCA9IF9fYXNzaWduKHt9LCBkZWZhdWx0SHR0cE9wdGlvbnMsIGh0dHBPcHRpb25zKTtcbiAgICAgICAgICAgIHZhciBib2R5ID0geyBvcGVyYXRpb25OYW1lOiBvcGVyYXRpb25OYW1lLCB2YXJpYWJsZXM6IHZhcmlhYmxlcyB9O1xuICAgICAgICAgICAgaWYgKGluY2x1ZGVFeHRlbnNpb25zIHx8IGh0dHAuaW5jbHVkZUV4dGVuc2lvbnMpXG4gICAgICAgICAgICAgICAgYm9keS5leHRlbnNpb25zID0gZXh0ZW5zaW9ucztcbiAgICAgICAgICAgIGlmIChodHRwLmluY2x1ZGVRdWVyeSlcbiAgICAgICAgICAgICAgICBib2R5LnF1ZXJ5ID0gcHJpbnQocXVlcnkpO1xuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWRCb2R5O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkQm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VFcnJvciA9IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVxdWVzdCBmYWlsZWQuIFBheWxvYWQgaXMgbm90IHNlcmlhbGl6YWJsZTogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHBhcnNlRXJyb3IucGFyc2VFcnJvciA9IGU7XG4gICAgICAgICAgICAgICAgdGhyb3cgcGFyc2VFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gZmV0Y2hPcHRpb25zO1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RPcHRpb25zLmZldGNoT3B0aW9ucylcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oe30sIHJlcXVlc3RPcHRpb25zLmZldGNoT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgICAgICB2YXIgZmV0Y2hlck9wdGlvbnMgPSBfX2Fzc2lnbih7IG1ldGhvZDogJ1BPU1QnIH0sIG9wdGlvbnMsIHsgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ6ICcqLyonLFxuICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sIGJvZHk6IHNlcmlhbGl6ZWRCb2R5IH0pO1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RPcHRpb25zLmNyZWRlbnRpYWxzKVxuICAgICAgICAgICAgICAgIGZldGNoZXJPcHRpb25zLmNyZWRlbnRpYWxzID0gcmVxdWVzdE9wdGlvbnMuY3JlZGVudGlhbHM7XG4gICAgICAgICAgICBpZiAoY3JlZGVudGlhbHMpXG4gICAgICAgICAgICAgICAgZmV0Y2hlck9wdGlvbnMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0T3B0aW9ucy5oZWFkZXJzKVxuICAgICAgICAgICAgICAgIGZldGNoZXJPcHRpb25zLmhlYWRlcnMgPSBfX2Fzc2lnbih7fSwgZmV0Y2hlck9wdGlvbnMuaGVhZGVycywgcmVxdWVzdE9wdGlvbnMuaGVhZGVycyk7XG4gICAgICAgICAgICBpZiAoaGVhZGVycylcbiAgICAgICAgICAgICAgICBmZXRjaGVyT3B0aW9ucy5oZWFkZXJzID0gX19hc3NpZ24oe30sIGZldGNoZXJPcHRpb25zLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICAgICAgdmFyIF9kID0gY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQoKSwgY29udHJvbGxlciA9IF9kLmNvbnRyb2xsZXIsIHNpZ25hbCA9IF9kLnNpZ25hbDtcbiAgICAgICAgICAgIGlmIChjb250cm9sbGVyKVxuICAgICAgICAgICAgICAgIGZldGNoZXJPcHRpb25zLnNpZ25hbCA9IHNpZ25hbDtcbiAgICAgICAgICAgIGZldGNoZXIoY29udGV4dFVSSSB8fCB1cmksIGZldGNoZXJPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KHsgcmVzcG9uc2U6IHJlc3BvbnNlIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocGFyc2VBbmRDaGVja1Jlc3BvbnNlKG9wZXJhdGlvbikpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyKVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG52YXIgSHR0cExpbmsgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIdHRwTGluaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIdHRwTGluayhvcHRzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBjcmVhdGVIdHRwTGluayhvcHRzKS5yZXF1ZXN0KSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSHR0cExpbms7XG59KEFwb2xsb0xpbmspKTtcbmV4cG9ydCB7IEh0dHBMaW5rIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwTGluay5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tbGluay1odHRwL2xpYi9odHRwTGluay5qc1xuLy8gbW9kdWxlIGlkID0gNjc0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydCAqIGZyb20gJy4vbGluayc7XG5leHBvcnQgeyBjcmVhdGVPcGVyYXRpb24sIG1ha2VQcm9taXNlLCB0b1Byb21pc2UsIGZyb21Qcm9taXNlIH0gZnJvbSAnLi9saW5rVXRpbHMnO1xuaW1wb3J0ICogYXMgT2JzZXJ2YWJsZSBmcm9tICd6ZW4tb2JzZXJ2YWJsZSc7XG5leHBvcnQgeyBPYnNlcnZhYmxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tbGluay9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgKiBhcyBPYnNlcnZhYmxlIGZyb20gJ3plbi1vYnNlcnZhYmxlJztcbmltcG9ydCB7IHZhbGlkYXRlT3BlcmF0aW9uLCBpc1Rlcm1pbmF0aW5nLCBMaW5rRXJyb3IsIHRyYW5zZm9ybU9wZXJhdGlvbiwgY3JlYXRlT3BlcmF0aW9uLCB9IGZyb20gJy4vbGlua1V0aWxzJztcbnZhciBwYXNzdGhyb3VnaCA9IGZ1bmN0aW9uIChvcCwgZm9yd2FyZCkgeyByZXR1cm4gKGZvcndhcmQgPyBmb3J3YXJkKG9wKSA6IE9ic2VydmFibGUub2YoKSk7IH07XG52YXIgdG9MaW5rID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicgPyBuZXcgQXBvbGxvTGluayhoYW5kbGVyKSA6IGhhbmRsZXI7XG59O1xuZXhwb3J0IHZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wLCBmb3J3YXJkKSB7IHJldHVybiBPYnNlcnZhYmxlLm9mKCk7IH0pO1xufTtcbmV4cG9ydCB2YXIgZnJvbSA9IGZ1bmN0aW9uIChsaW5rcykge1xuICAgIGlmIChsaW5rcy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiBlbXB0eSgpO1xuICAgIHJldHVybiBsaW5rcy5tYXAodG9MaW5rKS5yZWR1Y2UoZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIHguY29uY2F0KHkpOyB9KTtcbn07XG5leHBvcnQgdmFyIHNwbGl0ID0gZnVuY3Rpb24gKHRlc3QsIGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKHJpZ2h0ID09PSB2b2lkIDApIHsgcmlnaHQgPSBuZXcgQXBvbGxvTGluayhwYXNzdGhyb3VnaCk7IH1cbiAgICB2YXIgbGVmdExpbmsgPSB0b0xpbmsobGVmdCk7XG4gICAgdmFyIHJpZ2h0TGluayA9IHRvTGluayhyaWdodCk7XG4gICAgaWYgKGlzVGVybWluYXRpbmcobGVmdExpbmspICYmIGlzVGVybWluYXRpbmcocmlnaHRMaW5rKSkge1xuICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRlc3Qob3BlcmF0aW9uKVxuICAgICAgICAgICAgICAgID8gbGVmdExpbmsucmVxdWVzdChvcGVyYXRpb24pIHx8IE9ic2VydmFibGUub2YoKVxuICAgICAgICAgICAgICAgIDogcmlnaHRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uKSB8fCBPYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0KG9wZXJhdGlvbilcbiAgICAgICAgICAgICAgICA/IGxlZnRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmb3J3YXJkKSB8fCBPYnNlcnZhYmxlLm9mKClcbiAgICAgICAgICAgICAgICA6IHJpZ2h0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZm9yd2FyZCkgfHwgT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IHZhciBjb25jYXQgPSBmdW5jdGlvbiAoZmlyc3QsIHNlY29uZCkge1xuICAgIHZhciBmaXJzdExpbmsgPSB0b0xpbmsoZmlyc3QpO1xuICAgIGlmIChpc1Rlcm1pbmF0aW5nKGZpcnN0TGluaykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKG5ldyBMaW5rRXJyb3IoXCJZb3UgYXJlIGNhbGxpbmcgY29uY2F0IG9uIGEgdGVybWluYXRpbmcgbGluaywgd2hpY2ggd2lsbCBoYXZlIG5vIGVmZmVjdFwiLCBmaXJzdExpbmspKTtcbiAgICAgICAgcmV0dXJuIGZpcnN0TGluaztcbiAgICB9XG4gICAgdmFyIG5leHRMaW5rID0gdG9MaW5rKHNlY29uZCk7XG4gICAgaWYgKGlzVGVybWluYXRpbmcobmV4dExpbmspKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmdW5jdGlvbiAob3ApIHsgcmV0dXJuIG5leHRMaW5rLnJlcXVlc3Qob3ApIHx8IE9ic2VydmFibGUub2YoKTsgfSkgfHwgT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uLCBmb3J3YXJkKSB7XG4gICAgICAgICAgICByZXR1cm4gKGZpcnN0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZnVuY3Rpb24gKG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRMaW5rLnJlcXVlc3Qob3AsIGZvcndhcmQpIHx8IE9ic2VydmFibGUub2YoKTtcbiAgICAgICAgICAgIH0pIHx8IE9ic2VydmFibGUub2YoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG52YXIgQXBvbGxvTGluayA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBvbGxvTGluayhyZXF1ZXN0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0KVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICB9XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUuc3BsaXQgPSBmdW5jdGlvbiAodGVzdCwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgaWYgKHJpZ2h0ID09PSB2b2lkIDApIHsgcmlnaHQgPSBuZXcgQXBvbGxvTGluayhwYXNzdGhyb3VnaCk7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uY2F0KHNwbGl0KHRlc3QsIGxlZnQsIHJpZ2h0KSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICByZXR1cm4gY29uY2F0KHRoaXMsIG5leHQpO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXF1ZXN0IGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5lbXB0eSA9IGVtcHR5O1xuICAgIEFwb2xsb0xpbmsuZnJvbSA9IGZyb207XG4gICAgQXBvbGxvTGluay5zcGxpdCA9IHNwbGl0O1xuICAgIHJldHVybiBBcG9sbG9MaW5rO1xufSgpKTtcbmV4cG9ydCB7IEFwb2xsb0xpbmsgfTtcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlKGxpbmssIG9wZXJhdGlvbikge1xuICAgIHJldHVybiAobGluay5yZXF1ZXN0KGNyZWF0ZU9wZXJhdGlvbihvcGVyYXRpb24uY29udGV4dCwgdHJhbnNmb3JtT3BlcmF0aW9uKHZhbGlkYXRlT3BlcmF0aW9uKG9wZXJhdGlvbikpKSkgfHwgT2JzZXJ2YWJsZS5vZigpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXBvbGxvLWxpbmsvbGliL2xpbmsuanNcbi8vIG1vZHVsZSBpZCA9IDY3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7IChmdW5jdGlvbihmbiwgbmFtZSkgeyBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHsgZm4oZXhwb3J0cywgbW9kdWxlKTsgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikgeyB2YXIgZSA9IG5hbWUgPT09IFwiKlwiID8gc2VsZiA6IChuYW1lID8gc2VsZltuYW1lXSA9IHt9IDoge30pOyBmbihlLCB7IGV4cG9ydHM6IGUgfSk7IH0gfSkoZnVuY3Rpb24oZXhwb3J0cywgbW9kdWxlKSB7IC8vID09PSBTeW1ib2wgU3VwcG9ydCA9PT1cblxuZnVuY3Rpb24gaGFzU3ltYm9sKG5hbWUpIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBCb29sZWFuKFN5bWJvbFtuYW1lXSk7XG59XG5cbmZ1bmN0aW9uIGdldFN5bWJvbChuYW1lKSB7XG4gIHJldHVybiBoYXNTeW1ib2wobmFtZSkgPyBTeW1ib2xbbmFtZV0gOiBcIkBAXCIgKyBuYW1lO1xufVxuXG4vLyBQb255ZmlsbCBTeW1ib2wub2JzZXJ2YWJsZSBmb3IgaW50ZXJvcGVyYWJpbGl0eSB3aXRoIG90aGVyIGxpYnJhcmllc1xuaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAhU3ltYm9sLm9ic2VydmFibGUpIHtcbiAgU3ltYm9sLm9ic2VydmFibGUgPSBTeW1ib2woXCJvYnNlcnZhYmxlXCIpO1xufVxuXG4vLyA9PT0gQWJzdHJhY3QgT3BlcmF0aW9ucyA9PT1cblxuZnVuY3Rpb24gZ2V0TWV0aG9kKG9iaiwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuXG4gIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IodmFsdWUgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFNwZWNpZXMob2JqKSB7XG4gIHZhciBjdG9yID0gb2JqLmNvbnN0cnVjdG9yO1xuICBpZiAoY3RvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3RvciA9IGN0b3JbZ2V0U3ltYm9sKFwic3BlY2llc1wiKV07XG4gICAgaWYgKGN0b3IgPT09IG51bGwpIHtcbiAgICAgIGN0b3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBjdG9yICE9PSB1bmRlZmluZWQgPyBjdG9yIDogT2JzZXJ2YWJsZTtcbn1cblxuZnVuY3Rpb24gYWRkTWV0aG9kcyh0YXJnZXQsIG1ldGhvZHMpIHtcbiAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG1ldGhvZHMsIGspO1xuICAgIGRlc2MuZW51bWVyYWJsZSA9IGZhbHNlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGssIGRlc2MpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgLy8gQXNzZXJ0OiAgb2JzZXJ2ZXIuX29ic2VydmVyIGlzIHVuZGVmaW5lZFxuXG4gIHZhciBjbGVhbnVwID0gc3Vic2NyaXB0aW9uLl9jbGVhbnVwO1xuXG4gIGlmICghY2xlYW51cClcbiAgICByZXR1cm47XG5cbiAgLy8gRHJvcCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBjbGVhbnVwIGZ1bmN0aW9uIHNvIHRoYXQgd2Ugd29uJ3QgY2FsbCBpdFxuICAvLyBtb3JlIHRoYW4gb25jZVxuICBzdWJzY3JpcHRpb24uX2NsZWFudXAgPSB1bmRlZmluZWQ7XG5cbiAgLy8gQ2FsbCB0aGUgY2xlYW51cCBmdW5jdGlvblxuICBjbGVhbnVwKCk7XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHN1YnNjcmlwdGlvbi5fb2JzZXJ2ZXIgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gY2xvc2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gIGlmIChzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSlcbiAgICByZXR1cm47XG5cbiAgc3Vic2NyaXB0aW9uLl9vYnNlcnZlciA9IHVuZGVmaW5lZDtcbiAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xufVxuXG5mdW5jdGlvbiBjbGVhbnVwRnJvbVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkgeyBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSB9O1xufVxuXG5mdW5jdGlvbiBTdWJzY3JpcHRpb24ob2JzZXJ2ZXIsIHN1YnNjcmliZXIpIHtcbiAgLy8gQXNzZXJ0OiBzdWJzY3JpYmVyIGlzIGNhbGxhYmxlXG5cbiAgLy8gVGhlIG9ic2VydmVyIG11c3QgYmUgYW4gb2JqZWN0XG4gIGlmIChPYmplY3Qob2JzZXJ2ZXIpICE9PSBvYnNlcnZlcilcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JzZXJ2ZXIgbXVzdCBiZSBhbiBvYmplY3RcIik7XG5cbiAgdGhpcy5fY2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcjtcblxuICB2YXIgc3RhcnQgPSBnZXRNZXRob2Qob2JzZXJ2ZXIsIFwic3RhcnRcIik7XG5cbiAgaWYgKHN0YXJ0KVxuICAgIHN0YXJ0LmNhbGwob2JzZXJ2ZXIsIHRoaXMpO1xuXG4gIGlmIChzdWJzY3JpcHRpb25DbG9zZWQodGhpcykpXG4gICAgcmV0dXJuO1xuXG4gIG9ic2VydmVyID0gbmV3IFN1YnNjcmlwdGlvbk9ic2VydmVyKHRoaXMpO1xuXG4gIHRyeSB7XG4gICAgLy8gQ2FsbCB0aGUgc3Vic2NyaWJlciBmdW5jdGlvblxuICAgIHZhciBjbGVhbnVwJDAgPSBzdWJzY3JpYmVyLmNhbGwodW5kZWZpbmVkLCBvYnNlcnZlcik7XG5cbiAgICAvLyBUaGUgcmV0dXJuIHZhbHVlIG11c3QgYmUgdW5kZWZpbmVkLCBudWxsLCBhIHN1YnNjcmlwdGlvbiBvYmplY3QsIG9yIGEgZnVuY3Rpb25cbiAgICBpZiAoY2xlYW51cCQwICE9IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgY2xlYW51cCQwLnVuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGNsZWFudXAkMCA9IGNsZWFudXBGcm9tU3Vic2NyaXB0aW9uKGNsZWFudXAkMCk7XG4gICAgICBlbHNlIGlmICh0eXBlb2YgY2xlYW51cCQwICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2xlYW51cCQwICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG5cbiAgICAgIHRoaXMuX2NsZWFudXAgPSBjbGVhbnVwJDA7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSWYgYW4gZXJyb3Igb2NjdXJzIGR1cmluZyBzdGFydHVwLCB0aGVuIGF0dGVtcHQgdG8gc2VuZCB0aGUgZXJyb3JcbiAgICAvLyB0byB0aGUgb2JzZXJ2ZXJcbiAgICBvYnNlcnZlci5lcnJvcihlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiB0aGUgc3RyZWFtIGlzIGFscmVhZHkgZmluaXNoZWQsIHRoZW4gcGVyZm9ybSBjbGVhbnVwXG4gIGlmIChzdWJzY3JpcHRpb25DbG9zZWQodGhpcykpXG4gICAgY2xlYW51cFN1YnNjcmlwdGlvbih0aGlzKTtcbn1cblxuYWRkTWV0aG9kcyhTdWJzY3JpcHRpb24ucHJvdG90eXBlID0ge30sIHtcbiAgZ2V0IGNsb3NlZCgpIHsgcmV0dXJuIHN1YnNjcmlwdGlvbkNsb3NlZCh0aGlzKSB9LFxuICB1bnN1YnNjcmliZTogZnVuY3Rpb24oKSB7IGNsb3NlU3Vic2NyaXB0aW9uKHRoaXMpIH0sXG59KTtcblxuZnVuY3Rpb24gU3Vic2NyaXB0aW9uT2JzZXJ2ZXIoc3Vic2NyaXB0aW9uKSB7XG4gIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHN1YnNjcmlwdGlvbjtcbn1cblxuYWRkTWV0aG9kcyhTdWJzY3JpcHRpb25PYnNlcnZlci5wcm90b3R5cGUgPSB7fSwge1xuXG4gIGdldCBjbG9zZWQoKSB7IHJldHVybiBzdWJzY3JpcHRpb25DbG9zZWQodGhpcy5fc3Vic2NyaXB0aW9uKSB9LFxuXG4gIG5leHQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3N1YnNjcmlwdGlvbjtcblxuICAgIC8vIElmIHRoZSBzdHJlYW0gaXMgY2xvc2VkLCB0aGVuIHJldHVybiB1bmRlZmluZWRcbiAgICBpZiAoc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vYnNlcnZlcjtcbiAgICB2YXIgbSA9IGdldE1ldGhvZChvYnNlcnZlciwgXCJuZXh0XCIpO1xuXG4gICAgLy8gSWYgdGhlIG9ic2VydmVyIGRvZXNuJ3Qgc3VwcG9ydCBcIm5leHRcIiwgdGhlbiByZXR1cm4gdW5kZWZpbmVkXG4gICAgaWYgKCFtKVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIC8vIFNlbmQgdGhlIG5leHQgdmFsdWUgdG8gdGhlIHNpbmtcbiAgICByZXR1cm4gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSk7XG4gIH0sXG5cbiAgZXJyb3I6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3N1YnNjcmlwdGlvbjtcblxuICAgIC8vIElmIHRoZSBzdHJlYW0gaXMgY2xvc2VkLCB0aHJvdyB0aGUgZXJyb3IgdG8gdGhlIGNhbGxlclxuICAgIGlmIChzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSlcbiAgICAgIHRocm93IHZhbHVlO1xuXG4gICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vYnNlcnZlcjtcbiAgICBzdWJzY3JpcHRpb24uX29ic2VydmVyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBtJDAgPSBnZXRNZXRob2Qob2JzZXJ2ZXIsIFwiZXJyb3JcIik7XG5cbiAgICAgIC8vIElmIHRoZSBzaW5rIGRvZXMgbm90IHN1cHBvcnQgXCJlcnJvclwiLCB0aGVuIHRocm93IHRoZSBlcnJvciB0byB0aGUgY2FsbGVyXG4gICAgICBpZiAoIW0kMClcbiAgICAgICAgdGhyb3cgdmFsdWU7XG5cbiAgICAgIHZhbHVlID0gbSQwLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0cnkgeyBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikgfVxuICAgICAgZmluYWxseSB7IHRocm93IGUgfVxuICAgIH1cblxuICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgY29tcGxldGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3N1YnNjcmlwdGlvbjtcblxuICAgIC8vIElmIHRoZSBzdHJlYW0gaXMgY2xvc2VkLCB0aGVuIHJldHVybiB1bmRlZmluZWRcbiAgICBpZiAoc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vYnNlcnZlcjtcbiAgICBzdWJzY3JpcHRpb24uX29ic2VydmVyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBtJDEgPSBnZXRNZXRob2Qob2JzZXJ2ZXIsIFwiY29tcGxldGVcIik7XG5cbiAgICAgIC8vIElmIHRoZSBzaW5rIGRvZXMgbm90IHN1cHBvcnQgXCJjb21wbGV0ZVwiLCB0aGVuIHJldHVybiB1bmRlZmluZWRcbiAgICAgIHZhbHVlID0gbSQxID8gbSQxLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0cnkgeyBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikgfVxuICAgICAgZmluYWxseSB7IHRocm93IGUgfVxuICAgIH1cblxuICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbn0pO1xuXG5mdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZXIpIHtcbiAgLy8gVGhlIHN0cmVhbSBzdWJzY3JpYmVyIG11c3QgYmUgYSBmdW5jdGlvblxuICBpZiAodHlwZW9mIHN1YnNjcmliZXIgIT09IFwiZnVuY3Rpb25cIilcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JzZXJ2YWJsZSBpbml0aWFsaXplciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG5cbiAgdGhpcy5fc3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG59XG5cbmFkZE1ldGhvZHMoT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcblxuICBzdWJzY3JpYmU6IGZ1bmN0aW9uKG9ic2VydmVyKSB7IGZvciAodmFyIGFyZ3MgPSBbXSwgX18kMCA9IDE7IF9fJDAgPCBhcmd1bWVudHMubGVuZ3RoOyArK19fJDApIGFyZ3MucHVzaChhcmd1bWVudHNbX18kMF0pOyBcbiAgICBpZiAodHlwZW9mIG9ic2VydmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvYnNlcnZlciA9IHtcbiAgICAgICAgbmV4dDogb2JzZXJ2ZXIsXG4gICAgICAgIGVycm9yOiBhcmdzWzBdLFxuICAgICAgICBjb21wbGV0ZTogYXJnc1sxXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24ob2JzZXJ2ZXIsIHRoaXMuX3N1YnNjcmliZXIpO1xuICB9LFxuXG4gIGZvckVhY2g6IGZ1bmN0aW9uKGZuKSB7IHZhciBfX3RoaXMgPSB0aGlzOyBcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKGZuICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIikpO1xuXG4gICAgICBfX3RoaXMuc3Vic2NyaWJlKHtcbiAgICAgICAgX3N1YnNjcmlwdGlvbjogbnVsbCxcblxuICAgICAgICBzdGFydDogZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgaWYgKE9iamVjdChzdWJzY3JpcHRpb24pICE9PSBzdWJzY3JpcHRpb24pXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHN1YnNjcmlwdGlvbiArIFwiIGlzIG5vdCBhbiBvYmplY3RcIik7XG5cbiAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBzdWJzY3JpcHRpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgbmV4dDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fc3Vic2NyaXB0aW9uO1xuXG4gICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbi5jbG9zZWQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGZuKHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgIGNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgbWFwOiBmdW5jdGlvbihmbikgeyB2YXIgX190aGlzID0gdGhpczsgXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihmbiArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuXG4gICAgdmFyIEMgPSBnZXRTcGVjaWVzKHRoaXMpO1xuXG4gICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uKG9ic2VydmVyKSB7IHJldHVybiBfX3RoaXMuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmIChvYnNlcnZlci5jbG9zZWQpXG4gICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRyeSB7IHZhbHVlID0gZm4odmFsdWUpIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgcmV0dXJuIG9ic2VydmVyLmVycm9yKGUpIH1cblxuICAgICAgICByZXR1cm4gb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICB9LFxuXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZSkgeyByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IoZSkgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbih4KSB7IHJldHVybiBvYnNlcnZlci5jb21wbGV0ZSh4KSB9LFxuICAgIH0pOyB9KTtcbiAgfSxcblxuICBmaWx0ZXI6IGZ1bmN0aW9uKGZuKSB7IHZhciBfX3RoaXMgPSB0aGlzOyBcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGZuICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG5cbiAgICB2YXIgQyA9IGdldFNwZWNpZXModGhpcyk7XG5cbiAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24ob2JzZXJ2ZXIpIHsgcmV0dXJuIF9fdGhpcy5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKG9ic2VydmVyLmNsb3NlZClcbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdHJ5IHsgaWYgKCFmbih2YWx1ZSkpIHJldHVybiB1bmRlZmluZWQgfVxuICAgICAgICBjYXRjaCAoZSkgeyByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IoZSkgfVxuXG4gICAgICAgIHJldHVybiBvYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgIH0sXG5cbiAgICAgIGVycm9yOiBmdW5jdGlvbihlKSB7IHJldHVybiBvYnNlcnZlci5lcnJvcihlKSB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gb2JzZXJ2ZXIuY29tcGxldGUoKSB9LFxuICAgIH0pOyB9KTtcbiAgfSxcblxuICByZWR1Y2U6IGZ1bmN0aW9uKGZuKSB7IHZhciBfX3RoaXMgPSB0aGlzOyBcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGZuICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG5cbiAgICB2YXIgQyA9IGdldFNwZWNpZXModGhpcyk7XG4gICAgdmFyIGhhc1NlZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMTtcbiAgICB2YXIgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICB2YXIgc2VlZCA9IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgYWNjID0gc2VlZDtcblxuICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbihvYnNlcnZlcikgeyByZXR1cm4gX190aGlzLnN1YnNjcmliZSh7XG5cbiAgICAgIG5leHQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmIChvYnNlcnZlci5jbG9zZWQpXG4gICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHZhciBmaXJzdCA9ICFoYXNWYWx1ZTtcbiAgICAgICAgaGFzVmFsdWUgPSB0cnVlO1xuXG4gICAgICAgIGlmICghZmlyc3QgfHwgaGFzU2VlZCkge1xuICAgICAgICAgIHRyeSB7IGFjYyA9IGZuKGFjYywgdmFsdWUpIH1cbiAgICAgICAgICBjYXRjaCAoZSkgeyByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IoZSkgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjYyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZSkgeyBvYnNlcnZlci5lcnJvcihlKSB9LFxuXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghaGFzVmFsdWUgJiYgIWhhc1NlZWQpIHtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlZHVjZSBhbiBlbXB0eSBzZXF1ZW5jZVwiKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChhY2MpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSxcblxuICAgIH0pOyB9KTtcbiAgfSxcblxuICBmbGF0TWFwOiBmdW5jdGlvbihmbikgeyB2YXIgX190aGlzID0gdGhpczsgXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihmbiArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuXG4gICAgdmFyIEMgPSBnZXRTcGVjaWVzKHRoaXMpO1xuXG4gICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIG91dGVyIE9ic2VydmFibGVcbiAgICAgIHZhciBvdXRlciA9IF9fdGhpcy5zdWJzY3JpYmUoe1xuXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YWx1ZSA9IGZuKHZhbHVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoeCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIGlubmVyIE9ic2VydmFibGVcbiAgICAgICAgICBPYnNlcnZhYmxlLmZyb20odmFsdWUpLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBfc3Vic2NyaXB0aW9uOiBudWxsLFxuXG4gICAgICAgICAgICBzdGFydDogZnVuY3Rpb24ocykgeyBzdWJzY3JpcHRpb25zLnB1c2godGhpcy5fc3Vic2NyaXB0aW9uID0gcykgfSxcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uKHZhbHVlKSB7IG9ic2VydmVyLm5leHQodmFsdWUpIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZSkgeyBvYnNlcnZlci5lcnJvcihlKSB9LFxuXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBpID0gc3Vic2NyaXB0aW9ucy5pbmRleE9mKHRoaXMuX3N1YnNjcmlwdGlvbik7XG5cbiAgICAgICAgICAgICAgaWYgKGkgPj0gMClcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25zLnNwbGljZShpLCAxKTtcblxuICAgICAgICAgICAgICBjbG9zZUlmRG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmVycm9yKGUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIGNsb3NlSWZEb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBjbG9zZUlmRG9uZSgpIHtcbiAgICAgICAgaWYgKGNvbXBsZXRlZCAmJiBzdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzKSB7IHJldHVybiBzLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgICAgICBvdXRlci51bnN1YnNjcmliZSgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSxcblxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYnNlcnZhYmxlLnByb3RvdHlwZSwgZ2V0U3ltYm9sKFwib2JzZXJ2YWJsZVwiKSwge1xuICB2YWx1ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0sXG4gIHdyaXRhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWUsXG59KTtcblxuYWRkTWV0aG9kcyhPYnNlcnZhYmxlLCB7XG5cbiAgZnJvbTogZnVuY3Rpb24oeCkge1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT09IFwiZnVuY3Rpb25cIiA/IHRoaXMgOiBPYnNlcnZhYmxlO1xuXG4gICAgaWYgKHggPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoeCArIFwiIGlzIG5vdCBhbiBvYmplY3RcIik7XG5cbiAgICB2YXIgbWV0aG9kID0gZ2V0TWV0aG9kKHgsIGdldFN5bWJvbChcIm9ic2VydmFibGVcIikpO1xuXG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgdmFyIG9ic2VydmFibGUkMCA9IG1ldGhvZC5jYWxsKHgpO1xuXG4gICAgICBpZiAoT2JqZWN0KG9ic2VydmFibGUkMCkgIT09IG9ic2VydmFibGUkMClcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihvYnNlcnZhYmxlJDAgKyBcIiBpcyBub3QgYW4gb2JqZWN0XCIpO1xuXG4gICAgICBpZiAob2JzZXJ2YWJsZSQwLmNvbnN0cnVjdG9yID09PSBDKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZSQwO1xuXG4gICAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24ob2JzZXJ2ZXIpIHsgcmV0dXJuIG9ic2VydmFibGUkMC5zdWJzY3JpYmUob2JzZXJ2ZXIpOyB9KTtcbiAgICB9XG5cbiAgICBpZiAoaGFzU3ltYm9sKFwiaXRlcmF0b3JcIikgJiYgKG1ldGhvZCA9IGdldE1ldGhvZCh4LCBnZXRTeW1ib2woXCJpdGVyYXRvclwiKSkpKSB7XG4gICAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24ob2JzZXJ2ZXIpIHtcbiAgICAgICAgZm9yICh2YXIgX18kMCA9IChtZXRob2QuY2FsbCh4KSlbU3ltYm9sLml0ZXJhdG9yXSgpLCBfXyQxOyBfXyQxID0gX18kMC5uZXh0KCksICFfXyQxLmRvbmU7KSB7IHZhciBpdGVtJDAgPSBfXyQxLnZhbHVlOyBcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0ZW0kMCk7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLmNsb3NlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICAgIGZvciAodmFyIGkkMCA9IDA7IGkkMCA8IHgubGVuZ3RoOyArK2kkMCkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQoeFtpJDBdKTtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIuY2xvc2VkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoeCArIFwiIGlzIG5vdCBvYnNlcnZhYmxlXCIpO1xuICB9LFxuXG4gIG9mOiBmdW5jdGlvbigpIHsgZm9yICh2YXIgaXRlbXMgPSBbXSwgX18kMCA9IDA7IF9fJDAgPCBhcmd1bWVudHMubGVuZ3RoOyArK19fJDApIGl0ZW1zLnB1c2goYXJndW1lbnRzW19fJDBdKTsgXG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PT0gXCJmdW5jdGlvblwiID8gdGhpcyA6IE9ic2VydmFibGU7XG5cbiAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24ob2JzZXJ2ZXIpIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGl0ZW1zLmxlbmd0aDsgKytpJDEpIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChpdGVtc1tpJDFdKTtcbiAgICAgICAgaWYgKG9ic2VydmVyLmNsb3NlZClcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH0sXG5cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZSwgZ2V0U3ltYm9sKFwic3BlY2llc1wiKSwge1xuICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9LFxuICBjb25maWd1cmFibGU6IHRydWUsXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGUsIFwib2JzZXJ2YWJsZVN5bWJvbFwiLCB7XG4gIHZhbHVlOiBnZXRTeW1ib2woXCJvYnNlcnZhYmxlXCIpLFxufSk7XG5cbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU7XG5cblxufSwgXCIqXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3plbi1vYnNlcnZhYmxlL3plbi1vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2Nzdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IHsgYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkIH0gZnJvbSAnLi9zdG9yZVV0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiBnZXREaXJlY3RpdmVJbmZvRnJvbUZpZWxkKGZpZWxkLCB2YXJpYWJsZXMpIHtcbiAgICBpZiAoZmllbGQuZGlyZWN0aXZlcyAmJiBmaWVsZC5kaXJlY3RpdmVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgZGlyZWN0aXZlT2JqXzEgPSB7fTtcbiAgICAgICAgZmllbGQuZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZU9ial8xW2RpcmVjdGl2ZS5uYW1lLnZhbHVlXSA9IGFyZ3VtZW50c09iamVjdEZyb21GaWVsZChkaXJlY3RpdmUsIHZhcmlhYmxlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlT2JqXzE7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCB2YXJpYWJsZXMpIHtcbiAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0ge307IH1cbiAgICBpZiAoIXNlbGVjdGlvbi5kaXJlY3RpdmVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgcmVzID0gdHJ1ZTtcbiAgICBzZWxlY3Rpb24uZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgaWYgKGRpcmVjdGl2ZS5uYW1lLnZhbHVlICE9PSAnc2tpcCcgJiYgZGlyZWN0aXZlLm5hbWUudmFsdWUgIT09ICdpbmNsdWRlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaXJlY3RpdmVBcmd1bWVudHMgPSBkaXJlY3RpdmUuYXJndW1lbnRzIHx8IFtdO1xuICAgICAgICB2YXIgZGlyZWN0aXZlTmFtZSA9IGRpcmVjdGl2ZS5uYW1lLnZhbHVlO1xuICAgICAgICBpZiAoZGlyZWN0aXZlQXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IG51bWJlciBvZiBhcmd1bWVudHMgZm9yIHRoZSBAXCIgKyBkaXJlY3RpdmVOYW1lICsgXCIgZGlyZWN0aXZlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaWZBcmd1bWVudCA9IGRpcmVjdGl2ZUFyZ3VtZW50c1swXTtcbiAgICAgICAgaWYgKCFpZkFyZ3VtZW50Lm5hbWUgfHwgaWZBcmd1bWVudC5uYW1lLnZhbHVlICE9PSAnaWYnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50IGZvciB0aGUgQFwiICsgZGlyZWN0aXZlTmFtZSArIFwiIGRpcmVjdGl2ZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlmVmFsdWUgPSBkaXJlY3RpdmVBcmd1bWVudHNbMF0udmFsdWU7XG4gICAgICAgIHZhciBldmFsZWRWYWx1ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIWlmVmFsdWUgfHwgaWZWYWx1ZS5raW5kICE9PSAnQm9vbGVhblZhbHVlJykge1xuICAgICAgICAgICAgaWYgKGlmVmFsdWUua2luZCAhPT0gJ1ZhcmlhYmxlJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IGZvciB0aGUgQFwiICsgZGlyZWN0aXZlTmFtZSArIFwiIGRpcmVjdGl2ZSBtdXN0IGJlIGEgdmFyaWFibGUgb3IgYSBib29sIGVhbiB2YWx1ZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmFsZWRWYWx1ZSA9IHZhcmlhYmxlc1tpZlZhbHVlLm5hbWUudmFsdWVdO1xuICAgICAgICAgICAgICAgIGlmIChldmFsZWRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFyaWFibGUgcmVmZXJlbmNlZCBpbiBAXCIgKyBkaXJlY3RpdmVOYW1lICsgXCIgZGlyZWN0aXZlLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmFsZWRWYWx1ZSA9IGlmVmFsdWUudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGl2ZU5hbWUgPT09ICdza2lwJykge1xuICAgICAgICAgICAgZXZhbGVkVmFsdWUgPSAhZXZhbGVkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFldmFsZWRWYWx1ZSkge1xuICAgICAgICAgICAgcmVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5TZWxlY3Rpb25zKHNlbGVjdGlvbikge1xuICAgIGlmICghc2VsZWN0aW9uLnNlbGVjdGlvblNldCB8fFxuICAgICAgICAhKHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5sZW5ndGggPiAwKSlcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rpb25dO1xuICAgIHJldHVybiBbc2VsZWN0aW9uXS5jb25jYXQoc2VsZWN0aW9uLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rpb25Ob2RlXS5jb25jYXQoZmxhdHRlblNlbGVjdGlvbnMoc2VsZWN0aW9uTm9kZSkpO1xuICAgIH0pXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHNlbGVjdGlvbnMsIHNlbGVjdGVkKSB7IHJldHVybiBzZWxlY3Rpb25zLmNvbmNhdChzZWxlY3RlZCk7IH0sIFtdKSk7XG59XG52YXIgYWRkZWQgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0aXZlTmFtZXMoZG9jKSB7XG4gICAgdmFyIGNhY2hlZCA9IGFkZGVkLmdldChkb2MpO1xuICAgIGlmIChjYWNoZWQpXG4gICAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBkb2MuZGVmaW5pdGlvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbi5zZWxlY3Rpb25TZXQgJiYgZGVmaW5pdGlvbi5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucztcbiAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBmbGF0dGVuU2VsZWN0aW9ucyh4KTsgfSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoc2VsZWN0aW9ucywgc2VsZWN0ZWQpIHsgcmV0dXJuIHNlbGVjdGlvbnMuY29uY2F0KHNlbGVjdGVkKTsgfSwgW10pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gc2VsZWN0aW9uLmRpcmVjdGl2ZXMgJiYgc2VsZWN0aW9uLmRpcmVjdGl2ZXMubGVuZ3RoID4gMDtcbiAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHsgcmV0dXJuIHNlbGVjdGlvbi5kaXJlY3RpdmVzOyB9KVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChkaXJlY3RpdmVzLCBkaXJlY3RpdmUpIHsgcmV0dXJuIGRpcmVjdGl2ZXMuY29uY2F0KGRpcmVjdGl2ZSk7IH0sIFtdKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHsgcmV0dXJuIGRpcmVjdGl2ZS5uYW1lLnZhbHVlOyB9KTtcbiAgICBhZGRlZC5zZXQoZG9jLCBkaXJlY3RpdmVzKTtcbiAgICByZXR1cm4gZGlyZWN0aXZlcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNEaXJlY3RpdmVzKG5hbWVzLCBkb2MpIHtcbiAgICByZXR1cm4gZ2V0RGlyZWN0aXZlTmFtZXMoZG9jKS5zb21lKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBuYW1lcy5pbmRleE9mKG5hbWUpID4gLTE7IH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlcy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi9kaXJlY3RpdmVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50KGRvY3VtZW50LCBmcmFnbWVudE5hbWUpIHtcbiAgICB2YXIgYWN0dWFsRnJhZ21lbnROYW1lID0gZnJhZ21lbnROYW1lO1xuICAgIHZhciBmcmFnbWVudHMgPSBbXTtcbiAgICBkb2N1bWVudC5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRm91bmQgYSBcIiArIGRlZmluaXRpb24ub3BlcmF0aW9uICsgXCIgb3BlcmF0aW9uXCIgKyAoZGVmaW5pdGlvbi5uYW1lID8gXCIgbmFtZWQgJ1wiICsgZGVmaW5pdGlvbi5uYW1lLnZhbHVlICsgXCInXCIgOiAnJykgKyBcIi4gXCIgK1xuICAgICAgICAgICAgICAgICdObyBvcGVyYXRpb25zIGFyZSBhbGxvd2VkIHdoZW4gdXNpbmcgYSBmcmFnbWVudCBhcyBhIHF1ZXJ5LiBPbmx5IGZyYWdtZW50cyBhcmUgYWxsb3dlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJykge1xuICAgICAgICAgICAgZnJhZ21lbnRzLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGFjdHVhbEZyYWdtZW50TmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKGZyYWdtZW50cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZvdW5kIFwiICsgZnJhZ21lbnRzLmxlbmd0aCArIFwiIGZyYWdtZW50cy4gYGZyYWdtZW50TmFtZWAgbXVzdCBiZSBwcm92aWRlZCB3aGVuIHRoZXJlIGlzIG5vdCBleGFjdGx5IDEgZnJhZ21lbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGFjdHVhbEZyYWdtZW50TmFtZSA9IGZyYWdtZW50c1swXS5uYW1lLnZhbHVlO1xuICAgIH1cbiAgICB2YXIgcXVlcnkgPSBfX2Fzc2lnbih7fSwgZG9jdW1lbnQsIHsgZGVmaW5pdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBraW5kOiAnT3BlcmF0aW9uRGVmaW5pdGlvbicsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiAncXVlcnknLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGcmFnbWVudFNwcmVhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhY3R1YWxGcmFnbWVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXS5jb25jYXQoZG9jdW1lbnQuZGVmaW5pdGlvbnMpIH0pO1xuICAgIHJldHVybiBxdWVyeTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyYWdtZW50cy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi9mcmFnbWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDY3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICcuL3V0aWwvY2xvbmVEZWVwJztcbmltcG9ydCB7IGNoZWNrRG9jdW1lbnQsIGdldE9wZXJhdGlvbkRlZmluaXRpb25PckRpZSwgZ2V0RnJhZ21lbnREZWZpbml0aW9ucywgY3JlYXRlRnJhZ21lbnRNYXAsIH0gZnJvbSAnLi9nZXRGcm9tQVNUJztcbnZhciBUWVBFTkFNRV9GSUVMRCA9IHtcbiAgICBraW5kOiAnRmllbGQnLFxuICAgIG5hbWU6IHtcbiAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICB2YWx1ZTogJ19fdHlwZW5hbWUnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gYWRkVHlwZW5hbWVUb1NlbGVjdGlvblNldChzZWxlY3Rpb25TZXQsIGlzUm9vdCkge1xuICAgIGlmIChpc1Jvb3QgPT09IHZvaWQgMCkgeyBpc1Jvb3QgPSBmYWxzZTsgfVxuICAgIGlmIChzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucykge1xuICAgICAgICBpZiAoIWlzUm9vdCkge1xuICAgICAgICAgICAgdmFyIGFscmVhZHlIYXNUaGlzRmllbGQgPSBzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5zb21lKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNlbGVjdGlvbi5raW5kID09PSAnRmllbGQnICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5uYW1lLnZhbHVlID09PSAnX190eXBlbmFtZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFscmVhZHlIYXNUaGlzRmllbGQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5wdXNoKFRZUEVOQU1FX0ZJRUxEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ua2luZCA9PT0gJ0ZpZWxkJykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubmFtZS52YWx1ZS5sYXN0SW5kZXhPZignX18nLCAwKSAhPT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFR5cGVuYW1lVG9TZWxlY3Rpb25TZXQoc2VsZWN0aW9uLnNlbGVjdGlvblNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0aW9uLmtpbmQgPT09ICdJbmxpbmVGcmFnbWVudCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRUeXBlbmFtZVRvU2VsZWN0aW9uU2V0KHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlRGlyZWN0aXZlc0Zyb21TZWxlY3Rpb25TZXQoZGlyZWN0aXZlcywgc2VsZWN0aW9uU2V0KSB7XG4gICAgaWYgKCFzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucylcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvblNldDtcbiAgICB2YXIgYWdyZXNzaXZlUmVtb3ZlID0gZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uIChkaXIpIHsgcmV0dXJuIGRpci5yZW1vdmU7IH0pO1xuICAgIHNlbGVjdGlvblNldC5zZWxlY3Rpb25zID0gc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnNcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzZWxlY3Rpb24ua2luZCAhPT0gJ0ZpZWxkJyB8fFxuICAgICAgICAgICAgIXNlbGVjdGlvbiB8fFxuICAgICAgICAgICAgIXNlbGVjdGlvbi5kaXJlY3RpdmVzKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgICAgICAgdmFyIHJlbW92ZTtcbiAgICAgICAgc2VsZWN0aW9uLmRpcmVjdGl2ZXMgPSBzZWxlY3Rpb24uZGlyZWN0aXZlcy5maWx0ZXIoZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdmFyIHNob3VsZEtlZXAgPSAhZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlyLm5hbWUgJiYgZGlyLm5hbWUgPT09IGRpcmVjdGl2ZS5uYW1lLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZGlyLnRlc3QgJiYgZGlyLnRlc3QoZGlyZWN0aXZlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlbW92ZSAmJiAhc2hvdWxkS2VlcCAmJiBhZ3Jlc3NpdmVSZW1vdmUpXG4gICAgICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBzaG91bGRLZWVwO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlbW92ZSA/IG51bGwgOiBzZWxlY3Rpb247XG4gICAgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4gISF4OyB9KTtcbiAgICBzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKChzZWxlY3Rpb24ua2luZCA9PT0gJ0ZpZWxkJyB8fCBzZWxlY3Rpb24ua2luZCA9PT0gJ0lubGluZUZyYWdtZW50JykgJiZcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgIHJlbW92ZURpcmVjdGl2ZXNGcm9tU2VsZWN0aW9uU2V0KGRpcmVjdGl2ZXMsIHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdGlvblNldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50KGRpcmVjdGl2ZXMsIGRvYykge1xuICAgIHZhciBkb2NDbG9uZSA9IGNsb25lRGVlcChkb2MpO1xuICAgIGRvY0Nsb25lLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgcmVtb3ZlRGlyZWN0aXZlc0Zyb21TZWxlY3Rpb25TZXQoZGlyZWN0aXZlcywgZGVmaW5pdGlvbi5zZWxlY3Rpb25TZXQpO1xuICAgIH0pO1xuICAgIHZhciBvcGVyYXRpb24gPSBnZXRPcGVyYXRpb25EZWZpbml0aW9uT3JEaWUoZG9jQ2xvbmUpO1xuICAgIHZhciBmcmFnbWVudHMgPSBjcmVhdGVGcmFnbWVudE1hcChnZXRGcmFnbWVudERlZmluaXRpb25zKGRvY0Nsb25lKSk7XG4gICAgdmFyIGlzTm90RW1wdHkgPSBmdW5jdGlvbiAob3ApIHtcbiAgICAgICAgcmV0dXJuIG9wLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZpbHRlcihmdW5jdGlvbiAoc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gIShzZWxlY3Rpb25TZXQgJiZcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQua2luZCA9PT0gJ0ZyYWdtZW50U3ByZWFkJyAmJlxuICAgICAgICAgICAgICAgICFpc05vdEVtcHR5KGZyYWdtZW50c1tzZWxlY3Rpb25TZXQubmFtZS52YWx1ZV0pKTtcbiAgICAgICAgfSkubGVuZ3RoID4gMDtcbiAgICB9O1xuICAgIHJldHVybiBpc05vdEVtcHR5KG9wZXJhdGlvbikgPyBkb2NDbG9uZSA6IG51bGw7XG59XG52YXIgYWRkZWQgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gYWRkVHlwZW5hbWVUb0RvY3VtZW50KGRvYykge1xuICAgIGNoZWNrRG9jdW1lbnQoZG9jKTtcbiAgICB2YXIgY2FjaGVkID0gYWRkZWQuZ2V0KGRvYyk7XG4gICAgaWYgKGNhY2hlZClcbiAgICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICB2YXIgZG9jQ2xvbmUgPSBjbG9uZURlZXAoZG9jKTtcbiAgICBkb2NDbG9uZS5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIHZhciBpc1Jvb3QgPSBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJztcbiAgICAgICAgYWRkVHlwZW5hbWVUb1NlbGVjdGlvblNldChkZWZpbml0aW9uLnNlbGVjdGlvblNldCwgaXNSb290KTtcbiAgICB9KTtcbiAgICBhZGRlZC5zZXQoZG9jLCBkb2NDbG9uZSk7XG4gICAgcmV0dXJuIGRvY0Nsb25lO1xufVxudmFyIGNvbm5lY3Rpb25SZW1vdmVDb25maWcgPSB7XG4gICAgdGVzdDogZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICB2YXIgd2lsbFJlbW92ZSA9IGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnY29ubmVjdGlvbic7XG4gICAgICAgIGlmICh3aWxsUmVtb3ZlKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGl2ZS5hcmd1bWVudHMgfHxcbiAgICAgICAgICAgICAgICAhZGlyZWN0aXZlLmFyZ3VtZW50cy5zb21lKGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGFyZy5uYW1lLnZhbHVlID09PSAna2V5JzsgfSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlbW92aW5nIGFuIEBjb25uZWN0aW9uIGRpcmVjdGl2ZSBldmVuIHRob3VnaCBpdCBkb2VzIG5vdCBoYXZlIGEga2V5LiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1lvdSBtYXkgd2FudCB0byB1c2UgdGhlIGtleSBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBhIHN0b3JlIGtleS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lsbFJlbW92ZTtcbiAgICB9LFxufTtcbnZhciByZW1vdmVkID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbm5lY3Rpb25EaXJlY3RpdmVGcm9tRG9jdW1lbnQoZG9jKSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2MpO1xuICAgIHZhciBjYWNoZWQgPSByZW1vdmVkLmdldChkb2MpO1xuICAgIGlmIChjYWNoZWQpXG4gICAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgdmFyIGRvY0Nsb25lID0gcmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudChbY29ubmVjdGlvblJlbW92ZUNvbmZpZ10sIGRvYyk7XG4gICAgcmVtb3ZlZC5zZXQoZG9jLCBkb2NDbG9uZSk7XG4gICAgcmV0dXJuIGRvY0Nsb25lO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNmb3JtLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Fwb2xsby11dGlsaXRpZXMvbGliL3RyYW5zZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNjgwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydCBmdW5jdGlvbiB0cnlGdW5jdGlvbk9yTG9nRXJyb3IoZikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdyYXBoUUxSZXN1bHRIYXNFcnJvcihyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmxlbmd0aDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ySGFuZGxpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXBvbGxvLXV0aWxpdGllcy9saWIvdXRpbC9lcnJvckhhbmRsaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IGZ1bmN0aW9uIGlzRXF1YWwoYSwgYikge1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgICB9XG4gICAgaWYgKGEgIT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgYiAhPSBudWxsICYmXG4gICAgICAgIHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghaXNFcXVhbChhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNFcXVhbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tdXRpbGl0aWVzL2xpYi91dGlsL2lzRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDY4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgeyBpc0RldmVsb3BtZW50LCBpc1Rlc3QgfSBmcm9tICcuL2Vudmlyb25tZW50JztcbmZ1bmN0aW9uIGRlZXBGcmVlemUobykge1xuICAgIE9iamVjdC5mcmVlemUobyk7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJlxuICAgICAgICAgICAgb1twcm9wXSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgKHR5cGVvZiBvW3Byb3BdID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb1twcm9wXSA9PT0gJ2Z1bmN0aW9uJykgJiZcbiAgICAgICAgICAgICFPYmplY3QuaXNGcm96ZW4ob1twcm9wXSkpIHtcbiAgICAgICAgICAgIGRlZXBGcmVlemUob1twcm9wXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbztcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXliZURlZXBGcmVlemUob2JqKSB7XG4gICAgaWYgKGlzRGV2ZWxvcG1lbnQoKSB8fCBpc1Rlc3QoKSkge1xuICAgICAgICByZXR1cm4gZGVlcEZyZWV6ZShvYmopO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF5YmVEZWVwRnJlZXplLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Fwb2xsby11dGlsaXRpZXMvbGliL3V0aWwvbWF5YmVEZWVwRnJlZXplLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IHsgaXNQcm9kdWN0aW9uLCBpc1Rlc3QgfSBmcm9tICcuL2Vudmlyb25tZW50JztcbnZhciBoYXZlV2FybmVkID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG5leHBvcnQgZnVuY3Rpb24gd2Fybk9uY2VJbkRldmVsb3BtZW50KG1zZywgdHlwZSkge1xuICAgIGlmICh0eXBlID09PSB2b2lkIDApIHsgdHlwZSA9ICd3YXJuJzsgfVxuICAgIGlmIChpc1Byb2R1Y3Rpb24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaGF2ZVdhcm5lZFttc2ddKSB7XG4gICAgICAgIGlmICghaXNUZXN0KCkpIHtcbiAgICAgICAgICAgIGhhdmVXYXJuZWRbbXNnXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4obXNnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhcm5PbmNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Fwb2xsby11dGlsaXRpZXMvbGliL3V0aWwvd2Fybk9uY2UuanNcbi8vIG1vZHVsZSBpZCA9IDY4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnZpc2l0ID0gdmlzaXQ7XG5leHBvcnRzLnZpc2l0SW5QYXJhbGxlbCA9IHZpc2l0SW5QYXJhbGxlbDtcbmV4cG9ydHMudmlzaXRXaXRoVHlwZUluZm8gPSB2aXNpdFdpdGhUeXBlSW5mbztcbmV4cG9ydHMuZ2V0VmlzaXRGbiA9IGdldFZpc2l0Rm47XG4vKipcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiAgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiAgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxudmFyIFF1ZXJ5RG9jdW1lbnRLZXlzID0gZXhwb3J0cy5RdWVyeURvY3VtZW50S2V5cyA9IHtcbiAgTmFtZTogW10sXG5cbiAgRG9jdW1lbnQ6IFsnZGVmaW5pdGlvbnMnXSxcbiAgT3BlcmF0aW9uRGVmaW5pdGlvbjogWyduYW1lJywgJ3ZhcmlhYmxlRGVmaW5pdGlvbnMnLCAnZGlyZWN0aXZlcycsICdzZWxlY3Rpb25TZXQnXSxcbiAgVmFyaWFibGVEZWZpbml0aW9uOiBbJ3ZhcmlhYmxlJywgJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJ10sXG4gIFZhcmlhYmxlOiBbJ25hbWUnXSxcbiAgU2VsZWN0aW9uU2V0OiBbJ3NlbGVjdGlvbnMnXSxcbiAgRmllbGQ6IFsnYWxpYXMnLCAnbmFtZScsICdhcmd1bWVudHMnLCAnZGlyZWN0aXZlcycsICdzZWxlY3Rpb25TZXQnXSxcbiAgQXJndW1lbnQ6IFsnbmFtZScsICd2YWx1ZSddLFxuXG4gIEZyYWdtZW50U3ByZWFkOiBbJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBJbmxpbmVGcmFnbWVudDogWyd0eXBlQ29uZGl0aW9uJywgJ2RpcmVjdGl2ZXMnLCAnc2VsZWN0aW9uU2V0J10sXG4gIEZyYWdtZW50RGVmaW5pdGlvbjogWyduYW1lJywgJ3R5cGVDb25kaXRpb24nLCAnZGlyZWN0aXZlcycsICdzZWxlY3Rpb25TZXQnXSxcblxuICBJbnRWYWx1ZTogW10sXG4gIEZsb2F0VmFsdWU6IFtdLFxuICBTdHJpbmdWYWx1ZTogW10sXG4gIEJvb2xlYW5WYWx1ZTogW10sXG4gIE51bGxWYWx1ZTogW10sXG4gIEVudW1WYWx1ZTogW10sXG4gIExpc3RWYWx1ZTogWyd2YWx1ZXMnXSxcbiAgT2JqZWN0VmFsdWU6IFsnZmllbGRzJ10sXG4gIE9iamVjdEZpZWxkOiBbJ25hbWUnLCAndmFsdWUnXSxcblxuICBEaXJlY3RpdmU6IFsnbmFtZScsICdhcmd1bWVudHMnXSxcblxuICBOYW1lZFR5cGU6IFsnbmFtZSddLFxuICBMaXN0VHlwZTogWyd0eXBlJ10sXG4gIE5vbk51bGxUeXBlOiBbJ3R5cGUnXSxcblxuICBTY2hlbWFEZWZpbml0aW9uOiBbJ2RpcmVjdGl2ZXMnLCAnb3BlcmF0aW9uVHlwZXMnXSxcbiAgT3BlcmF0aW9uVHlwZURlZmluaXRpb246IFsndHlwZSddLFxuXG4gIFNjYWxhclR5cGVEZWZpbml0aW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBPYmplY3RUeXBlRGVmaW5pdGlvbjogWyduYW1lJywgJ2ludGVyZmFjZXMnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXSxcbiAgRmllbGREZWZpbml0aW9uOiBbJ25hbWUnLCAnYXJndW1lbnRzJywgJ3R5cGUnLCAnZGlyZWN0aXZlcyddLFxuICBJbnB1dFZhbHVlRGVmaW5pdGlvbjogWyduYW1lJywgJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJywgJ2RpcmVjdGl2ZXMnXSxcbiAgSW50ZXJmYWNlVHlwZURlZmluaXRpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBVbmlvblR5cGVEZWZpbml0aW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcycsICd0eXBlcyddLFxuICBFbnVtVHlwZURlZmluaXRpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJywgJ3ZhbHVlcyddLFxuICBFbnVtVmFsdWVEZWZpbml0aW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXSxcblxuICBUeXBlRXh0ZW5zaW9uRGVmaW5pdGlvbjogWydkZWZpbml0aW9uJ10sXG5cbiAgRGlyZWN0aXZlRGVmaW5pdGlvbjogWyduYW1lJywgJ2FyZ3VtZW50cycsICdsb2NhdGlvbnMnXVxufTtcblxudmFyIEJSRUFLID0gZXhwb3J0cy5CUkVBSyA9IHt9O1xuXG4vKipcbiAqIHZpc2l0KCkgd2lsbCB3YWxrIHRocm91Z2ggYW4gQVNUIHVzaW5nIGEgZGVwdGggZmlyc3QgdHJhdmVyc2FsLCBjYWxsaW5nXG4gKiB0aGUgdmlzaXRvcidzIGVudGVyIGZ1bmN0aW9uIGF0IGVhY2ggbm9kZSBpbiB0aGUgdHJhdmVyc2FsLCBhbmQgY2FsbGluZyB0aGVcbiAqIGxlYXZlIGZ1bmN0aW9uIGFmdGVyIHZpc2l0aW5nIHRoYXQgbm9kZSBhbmQgYWxsIG9mIGl0cyBjaGlsZCBub2Rlcy5cbiAqXG4gKiBCeSByZXR1cm5pbmcgZGlmZmVyZW50IHZhbHVlcyBmcm9tIHRoZSBlbnRlciBhbmQgbGVhdmUgZnVuY3Rpb25zLCB0aGVcbiAqIGJlaGF2aW9yIG9mIHRoZSB2aXNpdG9yIGNhbiBiZSBhbHRlcmVkLCBpbmNsdWRpbmcgc2tpcHBpbmcgb3ZlciBhIHN1Yi10cmVlIG9mXG4gKiB0aGUgQVNUIChieSByZXR1cm5pbmcgZmFsc2UpLCBlZGl0aW5nIHRoZSBBU1QgYnkgcmV0dXJuaW5nIGEgdmFsdWUgb3IgbnVsbFxuICogdG8gcmVtb3ZlIHRoZSB2YWx1ZSwgb3IgdG8gc3RvcCB0aGUgd2hvbGUgdHJhdmVyc2FsIGJ5IHJldHVybmluZyBCUkVBSy5cbiAqXG4gKiBXaGVuIHVzaW5nIHZpc2l0KCkgdG8gZWRpdCBhbiBBU1QsIHRoZSBvcmlnaW5hbCBBU1Qgd2lsbCBub3QgYmUgbW9kaWZpZWQsIGFuZFxuICogYSBuZXcgdmVyc2lvbiBvZiB0aGUgQVNUIHdpdGggdGhlIGNoYW5nZXMgYXBwbGllZCB3aWxsIGJlIHJldHVybmVkIGZyb20gdGhlXG4gKiB2aXNpdCBmdW5jdGlvbi5cbiAqXG4gKiAgICAgY29uc3QgZWRpdGVkQVNUID0gdmlzaXQoYXN0LCB7XG4gKiAgICAgICBlbnRlcihub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzKSB7XG4gKiAgICAgICAgIC8vIEByZXR1cm5cbiAqICAgICAgICAgLy8gICB1bmRlZmluZWQ6IG5vIGFjdGlvblxuICogICAgICAgICAvLyAgIGZhbHNlOiBza2lwIHZpc2l0aW5nIHRoaXMgbm9kZVxuICogICAgICAgICAvLyAgIHZpc2l0b3IuQlJFQUs6IHN0b3AgdmlzaXRpbmcgYWx0b2dldGhlclxuICogICAgICAgICAvLyAgIG51bGw6IGRlbGV0ZSB0aGlzIG5vZGVcbiAqICAgICAgICAgLy8gICBhbnkgdmFsdWU6IHJlcGxhY2UgdGhpcyBub2RlIHdpdGggdGhlIHJldHVybmVkIHZhbHVlXG4gKiAgICAgICB9LFxuICogICAgICAgbGVhdmUobm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycykge1xuICogICAgICAgICAvLyBAcmV0dXJuXG4gKiAgICAgICAgIC8vICAgdW5kZWZpbmVkOiBubyBhY3Rpb25cbiAqICAgICAgICAgLy8gICBmYWxzZTogbm8gYWN0aW9uXG4gKiAgICAgICAgIC8vICAgdmlzaXRvci5CUkVBSzogc3RvcCB2aXNpdGluZyBhbHRvZ2V0aGVyXG4gKiAgICAgICAgIC8vICAgbnVsbDogZGVsZXRlIHRoaXMgbm9kZVxuICogICAgICAgICAvLyAgIGFueSB2YWx1ZTogcmVwbGFjZSB0aGlzIG5vZGUgd2l0aCB0aGUgcmV0dXJuZWQgdmFsdWVcbiAqICAgICAgIH1cbiAqICAgICB9KTtcbiAqXG4gKiBBbHRlcm5hdGl2ZWx5IHRvIHByb3ZpZGluZyBlbnRlcigpIGFuZCBsZWF2ZSgpIGZ1bmN0aW9ucywgYSB2aXNpdG9yIGNhblxuICogaW5zdGVhZCBwcm92aWRlIGZ1bmN0aW9ucyBuYW1lZCB0aGUgc2FtZSBhcyB0aGUga2luZHMgb2YgQVNUIG5vZGVzLCBvclxuICogZW50ZXIvbGVhdmUgdmlzaXRvcnMgYXQgYSBuYW1lZCBrZXksIGxlYWRpbmcgdG8gZm91ciBwZXJtdXRhdGlvbnMgb2ZcbiAqIHZpc2l0b3IgQVBJOlxuICpcbiAqIDEpIE5hbWVkIHZpc2l0b3JzIHRyaWdnZXJlZCB3aGVuIGVudGVyaW5nIGEgbm9kZSBhIHNwZWNpZmljIGtpbmQuXG4gKlxuICogICAgIHZpc2l0KGFzdCwge1xuICogICAgICAgS2luZChub2RlKSB7XG4gKiAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiAyKSBOYW1lZCB2aXNpdG9ycyB0aGF0IHRyaWdnZXIgdXBvbiBlbnRlcmluZyBhbmQgbGVhdmluZyBhIG5vZGUgb2ZcbiAqICAgIGEgc3BlY2lmaWMga2luZC5cbiAqXG4gKiAgICAgdmlzaXQoYXN0LCB7XG4gKiAgICAgICBLaW5kOiB7XG4gKiAgICAgICAgIGVudGVyKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBlbnRlciB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICAgIGxlYXZlKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBsZWF2ZSB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiAzKSBHZW5lcmljIHZpc2l0b3JzIHRoYXQgdHJpZ2dlciB1cG9uIGVudGVyaW5nIGFuZCBsZWF2aW5nIGFueSBub2RlLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyKG5vZGUpIHtcbiAqICAgICAgICAgLy8gZW50ZXIgYW55IG5vZGVcbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZShub2RlKSB7XG4gKiAgICAgICAgIC8vIGxlYXZlIGFueSBub2RlXG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiA0KSBQYXJhbGxlbCB2aXNpdG9ycyBmb3IgZW50ZXJpbmcgYW5kIGxlYXZpbmcgbm9kZXMgb2YgYSBzcGVjaWZpYyBraW5kLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyOiB7XG4gKiAgICAgICAgIEtpbmQobm9kZSkge1xuICogICAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZToge1xuICogICAgICAgICBLaW5kKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBsZWF2ZSB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqL1xuZnVuY3Rpb24gdmlzaXQocm9vdCwgdmlzaXRvciwga2V5TWFwKSB7XG4gIHZhciB2aXNpdG9yS2V5cyA9IGtleU1hcCB8fCBRdWVyeURvY3VtZW50S2V5cztcblxuICB2YXIgc3RhY2sgPSB2b2lkIDA7XG4gIHZhciBpbkFycmF5ID0gQXJyYXkuaXNBcnJheShyb290KTtcbiAgdmFyIGtleXMgPSBbcm9vdF07XG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgZWRpdHMgPSBbXTtcbiAgdmFyIHBhcmVudCA9IHZvaWQgMDtcbiAgdmFyIHBhdGggPSBbXTtcbiAgdmFyIGFuY2VzdG9ycyA9IFtdO1xuICB2YXIgbmV3Um9vdCA9IHJvb3Q7XG5cbiAgZG8ge1xuICAgIGluZGV4Kys7XG4gICAgdmFyIGlzTGVhdmluZyA9IGluZGV4ID09PSBrZXlzLmxlbmd0aDtcbiAgICB2YXIga2V5ID0gdm9pZCAwO1xuICAgIHZhciBub2RlID0gdm9pZCAwO1xuICAgIHZhciBpc0VkaXRlZCA9IGlzTGVhdmluZyAmJiBlZGl0cy5sZW5ndGggIT09IDA7XG4gICAgaWYgKGlzTGVhdmluZykge1xuICAgICAga2V5ID0gYW5jZXN0b3JzLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IHBhdGgucG9wKCk7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gYW5jZXN0b3JzLnBvcCgpO1xuICAgICAgaWYgKGlzRWRpdGVkKSB7XG4gICAgICAgIGlmIChpbkFycmF5KSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUuc2xpY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgY2xvbmUgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBrIGluIG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNsb25lW2tdID0gbm9kZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZSA9IGNsb25lO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlZGl0T2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGVkaXRzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgIHZhciBlZGl0S2V5ID0gZWRpdHNbaWldWzBdO1xuICAgICAgICAgIHZhciBlZGl0VmFsdWUgPSBlZGl0c1tpaV1bMV07XG4gICAgICAgICAgaWYgKGluQXJyYXkpIHtcbiAgICAgICAgICAgIGVkaXRLZXkgLT0gZWRpdE9mZnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluQXJyYXkgJiYgZWRpdFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnNwbGljZShlZGl0S2V5LCAxKTtcbiAgICAgICAgICAgIGVkaXRPZmZzZXQrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZVtlZGl0S2V5XSA9IGVkaXRWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGluZGV4ID0gc3RhY2suaW5kZXg7XG4gICAgICBrZXlzID0gc3RhY2sua2V5cztcbiAgICAgIGVkaXRzID0gc3RhY2suZWRpdHM7XG4gICAgICBpbkFycmF5ID0gc3RhY2suaW5BcnJheTtcbiAgICAgIHN0YWNrID0gc3RhY2sucHJldjtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gcGFyZW50ID8gaW5BcnJheSA/IGluZGV4IDoga2V5c1tpbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgICBub2RlID0gcGFyZW50ID8gcGFyZW50W2tleV0gOiBuZXdSb290O1xuICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gdm9pZCAwO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgaWYgKCFpc05vZGUobm9kZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFTVCBOb2RlOiAnICsgSlNPTi5zdHJpbmdpZnkobm9kZSkpO1xuICAgICAgfVxuICAgICAgdmFyIHZpc2l0Rm4gPSBnZXRWaXNpdEZuKHZpc2l0b3IsIG5vZGUua2luZCwgaXNMZWF2aW5nKTtcbiAgICAgIGlmICh2aXNpdEZuKSB7XG4gICAgICAgIHJlc3VsdCA9IHZpc2l0Rm4uY2FsbCh2aXNpdG9yLCBub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBCUkVBSykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAoIWlzTGVhdmluZykge1xuICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVkaXRzLnB1c2goW2tleSwgcmVzdWx0XSk7XG4gICAgICAgICAgaWYgKCFpc0xlYXZpbmcpIHtcbiAgICAgICAgICAgIGlmIChpc05vZGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICBub2RlID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkICYmIGlzRWRpdGVkKSB7XG4gICAgICBlZGl0cy5wdXNoKFtrZXksIG5vZGVdKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzTGVhdmluZykge1xuICAgICAgc3RhY2sgPSB7IGluQXJyYXk6IGluQXJyYXksIGluZGV4OiBpbmRleCwga2V5czoga2V5cywgZWRpdHM6IGVkaXRzLCBwcmV2OiBzdGFjayB9O1xuICAgICAgaW5BcnJheSA9IEFycmF5LmlzQXJyYXkobm9kZSk7XG4gICAgICBrZXlzID0gaW5BcnJheSA/IG5vZGUgOiB2aXNpdG9yS2V5c1tub2RlLmtpbmRdIHx8IFtdO1xuICAgICAgaW5kZXggPSAtMTtcbiAgICAgIGVkaXRzID0gW107XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGFuY2VzdG9ycy5wdXNoKHBhcmVudCk7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBub2RlO1xuICAgIH1cbiAgfSB3aGlsZSAoc3RhY2sgIT09IHVuZGVmaW5lZCk7XG5cbiAgaWYgKGVkaXRzLmxlbmd0aCAhPT0gMCkge1xuICAgIG5ld1Jvb3QgPSBlZGl0c1tlZGl0cy5sZW5ndGggLSAxXVsxXTtcbiAgfVxuXG4gIHJldHVybiBuZXdSb290O1xufVxuXG5mdW5jdGlvbiBpc05vZGUobWF5YmVOb2RlKSB7XG4gIHJldHVybiBtYXliZU5vZGUgJiYgdHlwZW9mIG1heWJlTm9kZS5raW5kID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZpc2l0b3IgaW5zdGFuY2Ugd2hpY2ggZGVsZWdhdGVzIHRvIG1hbnkgdmlzaXRvcnMgdG8gcnVuIGluXG4gKiBwYXJhbGxlbC4gRWFjaCB2aXNpdG9yIHdpbGwgYmUgdmlzaXRlZCBmb3IgZWFjaCBub2RlIGJlZm9yZSBtb3Zpbmcgb24uXG4gKlxuICogSWYgYSBwcmlvciB2aXNpdG9yIGVkaXRzIGEgbm9kZSwgbm8gZm9sbG93aW5nIHZpc2l0b3JzIHdpbGwgc2VlIHRoYXQgbm9kZS5cbiAqL1xuZnVuY3Rpb24gdmlzaXRJblBhcmFsbGVsKHZpc2l0b3JzKSB7XG4gIHZhciBza2lwcGluZyA9IG5ldyBBcnJheSh2aXNpdG9ycy5sZW5ndGgpO1xuXG4gIHJldHVybiB7XG4gICAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlzaXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFza2lwcGluZ1tpXSkge1xuICAgICAgICAgIHZhciBmbiA9IGdldFZpc2l0Rm4odmlzaXRvcnNbaV0sIG5vZGUua2luZCwgLyogaXNMZWF2aW5nICovZmFsc2UpO1xuICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZuLmFwcGx5KHZpc2l0b3JzW2ldLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgc2tpcHBpbmdbaV0gPSBub2RlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IEJSRUFLKSB7XG4gICAgICAgICAgICAgIHNraXBwaW5nW2ldID0gQlJFQUs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsZWF2ZTogZnVuY3Rpb24gbGVhdmUobm9kZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aXNpdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXNraXBwaW5nW2ldKSB7XG4gICAgICAgICAgdmFyIGZuID0gZ2V0VmlzaXRGbih2aXNpdG9yc1tpXSwgbm9kZS5raW5kLCAvKiBpc0xlYXZpbmcgKi90cnVlKTtcbiAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh2aXNpdG9yc1tpXSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IEJSRUFLKSB7XG4gICAgICAgICAgICAgIHNraXBwaW5nW2ldID0gQlJFQUs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2tpcHBpbmdbaV0gPT09IG5vZGUpIHtcbiAgICAgICAgICBza2lwcGluZ1tpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2aXNpdG9yIGluc3RhbmNlIHdoaWNoIG1haW50YWlucyBhIHByb3ZpZGVkIFR5cGVJbmZvIGluc3RhbmNlXG4gKiBhbG9uZyB3aXRoIHZpc2l0aW5nIHZpc2l0b3IuXG4gKi9cbmZ1bmN0aW9uIHZpc2l0V2l0aFR5cGVJbmZvKHR5cGVJbmZvLCB2aXNpdG9yKSB7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICAgIHR5cGVJbmZvLmVudGVyKG5vZGUpO1xuICAgICAgdmFyIGZuID0gZ2V0VmlzaXRGbih2aXNpdG9yLCBub2RlLmtpbmQsIC8qIGlzTGVhdmluZyAqL2ZhbHNlKTtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkodmlzaXRvciwgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdHlwZUluZm8ubGVhdmUobm9kZSk7XG4gICAgICAgICAgaWYgKGlzTm9kZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0eXBlSW5mby5lbnRlcihyZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0sXG4gICAgbGVhdmU6IGZ1bmN0aW9uIGxlYXZlKG5vZGUpIHtcbiAgICAgIHZhciBmbiA9IGdldFZpc2l0Rm4odmlzaXRvciwgbm9kZS5raW5kLCAvKiBpc0xlYXZpbmcgKi90cnVlKTtcbiAgICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgcmVzdWx0ID0gZm4uYXBwbHkodmlzaXRvciwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHR5cGVJbmZvLmxlYXZlKG5vZGUpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogR2l2ZW4gYSB2aXNpdG9yIGluc3RhbmNlLCBpZiBpdCBpcyBsZWF2aW5nIG9yIG5vdCwgYW5kIGEgbm9kZSBraW5kLCByZXR1cm5cbiAqIHRoZSBmdW5jdGlvbiB0aGUgdmlzaXRvciBydW50aW1lIHNob3VsZCBjYWxsLlxuICovXG5mdW5jdGlvbiBnZXRWaXNpdEZuKHZpc2l0b3IsIGtpbmQsIGlzTGVhdmluZykge1xuICB2YXIga2luZFZpc2l0b3IgPSB2aXNpdG9yW2tpbmRdO1xuICBpZiAoa2luZFZpc2l0b3IpIHtcbiAgICBpZiAoIWlzTGVhdmluZyAmJiB0eXBlb2Yga2luZFZpc2l0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIHsgS2luZCgpIHt9IH1cbiAgICAgIHJldHVybiBraW5kVmlzaXRvcjtcbiAgICB9XG4gICAgdmFyIGtpbmRTcGVjaWZpY1Zpc2l0b3IgPSBpc0xlYXZpbmcgPyBraW5kVmlzaXRvci5sZWF2ZSA6IGtpbmRWaXNpdG9yLmVudGVyO1xuICAgIGlmICh0eXBlb2Yga2luZFNwZWNpZmljVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8geyBLaW5kOiB7IGVudGVyKCkge30sIGxlYXZlKCkge30gfSB9XG4gICAgICByZXR1cm4ga2luZFNwZWNpZmljVmlzaXRvcjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNwZWNpZmljVmlzaXRvciA9IGlzTGVhdmluZyA/IHZpc2l0b3IubGVhdmUgOiB2aXNpdG9yLmVudGVyO1xuICAgIGlmIChzcGVjaWZpY1Zpc2l0b3IpIHtcbiAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWNWaXNpdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIHsgZW50ZXIoKSB7fSwgbGVhdmUoKSB7fSB9XG4gICAgICAgIHJldHVybiBzcGVjaWZpY1Zpc2l0b3I7XG4gICAgICB9XG4gICAgICB2YXIgc3BlY2lmaWNLaW5kVmlzaXRvciA9IHNwZWNpZmljVmlzaXRvcltraW5kXTtcbiAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWNLaW5kVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyB7IGVudGVyOiB7IEtpbmQoKSB7fSB9LCBsZWF2ZTogeyBLaW5kKCkge30gfSB9XG4gICAgICAgIHJldHVybiBzcGVjaWZpY0tpbmRWaXNpdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvdmlzaXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNjg1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydCB7IEluTWVtb3J5Q2FjaGUsIGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0IH0gZnJvbSAnLi9pbk1lbW9yeUNhY2hlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVhZEZyb21TdG9yZSc7XG5leHBvcnQgKiBmcm9tICcuL3dyaXRlVG9TdG9yZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZyYWdtZW50TWF0Y2hlcic7XG5leHBvcnQgKiBmcm9tICcuL29iamVjdENhY2hlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVjb3JkaW5nQ2FjaGUnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXBvbGxvLWNhY2hlLWlubWVtb3J5L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjg2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyBBcG9sbG9DYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZSc7XG5pbXBvcnQgeyBnZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQsIGFkZFR5cGVuYW1lVG9Eb2N1bWVudCwgfSBmcm9tICdhcG9sbG8tdXRpbGl0aWVzJztcbmltcG9ydCB7IEhldXJpc3RpY0ZyYWdtZW50TWF0Y2hlciB9IGZyb20gJy4vZnJhZ21lbnRNYXRjaGVyJztcbmltcG9ydCB7IHdyaXRlUmVzdWx0VG9TdG9yZSB9IGZyb20gJy4vd3JpdGVUb1N0b3JlJztcbmltcG9ydCB7IHJlYWRRdWVyeUZyb21TdG9yZSwgZGlmZlF1ZXJ5QWdhaW5zdFN0b3JlIH0gZnJvbSAnLi9yZWFkRnJvbVN0b3JlJztcbmltcG9ydCB7IGRlZmF1bHROb3JtYWxpemVkQ2FjaGVGYWN0b3J5IH0gZnJvbSAnLi9vYmplY3RDYWNoZSc7XG5pbXBvcnQgeyByZWNvcmQgfSBmcm9tICcuL3JlY29yZGluZ0NhY2hlJztcbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICAgIGZyYWdtZW50TWF0Y2hlcjogbmV3IEhldXJpc3RpY0ZyYWdtZW50TWF0Y2hlcigpLFxuICAgIGRhdGFJZEZyb21PYmplY3Q6IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0LFxuICAgIGFkZFR5cGVuYW1lOiB0cnVlLFxuICAgIHN0b3JlRmFjdG9yeTogZGVmYXVsdE5vcm1hbGl6ZWRDYWNoZUZhY3RvcnksXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0KHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQuX190eXBlbmFtZSkge1xuICAgICAgICBpZiAocmVzdWx0LmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuX190eXBlbmFtZSArIFwiOlwiICsgcmVzdWx0LmlkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuX2lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuX190eXBlbmFtZSArIFwiOlwiICsgcmVzdWx0Ll9pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbnZhciBJbk1lbW9yeUNhY2hlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW5NZW1vcnlDYWNoZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeUNhY2hlKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub3B0aW1pc3RpYyA9IFtdO1xuICAgICAgICBfdGhpcy53YXRjaGVzID0gW107XG4gICAgICAgIF90aGlzLnNpbGVuY2VCcm9hZGNhc3QgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuY29uZmlnID0gX19hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG4gICAgICAgIGlmIChfdGhpcy5jb25maWcuY3VzdG9tUmVzb2x2ZXJzKVxuICAgICAgICAgICAgX3RoaXMuY29uZmlnLmNhY2hlUmVzb2x2ZXJzID0gX3RoaXMuY29uZmlnLmN1c3RvbVJlc29sdmVycztcbiAgICAgICAgX3RoaXMuYWRkVHlwZW5hbWUgPSBfdGhpcy5jb25maWcuYWRkVHlwZW5hbWUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIF90aGlzLmRhdGEgPSBfdGhpcy5jb25maWcuc3RvcmVGYWN0b3J5KCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVzdG9yZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhKVxuICAgICAgICAgICAgdGhpcy5kYXRhLnJlcGxhY2UoZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uIChvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChvcHRpbWlzdGljICYmIHRoaXMub3B0aW1pc3RpYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgcGF0Y2hlcyA9IHRoaXMub3B0aW1pc3RpYy5tYXAoZnVuY3Rpb24gKG9wdCkgeyByZXR1cm4gb3B0LmRhdGE7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkoT2JqZWN0LCBbe30sIHRoaXMuZGF0YS50b09iamVjdCgpXS5jb25jYXQocGF0Y2hlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEudG9PYmplY3QoKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgaWYgKHF1ZXJ5LnJvb3RJZCAmJiB0aGlzLmRhdGEuZ2V0KHF1ZXJ5LnJvb3RJZCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWRRdWVyeUZyb21TdG9yZSh7XG4gICAgICAgICAgICBzdG9yZTogdGhpcy5jb25maWcuc3RvcmVGYWN0b3J5KHRoaXMuZXh0cmFjdChxdWVyeS5vcHRpbWlzdGljKSksXG4gICAgICAgICAgICBxdWVyeTogdGhpcy50cmFuc2Zvcm1Eb2N1bWVudChxdWVyeS5xdWVyeSksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHF1ZXJ5LnZhcmlhYmxlcyxcbiAgICAgICAgICAgIHJvb3RJZDogcXVlcnkucm9vdElkLFxuICAgICAgICAgICAgZnJhZ21lbnRNYXRjaGVyRnVuY3Rpb246IHRoaXMuY29uZmlnLmZyYWdtZW50TWF0Y2hlci5tYXRjaCxcbiAgICAgICAgICAgIHByZXZpb3VzUmVzdWx0OiBxdWVyeS5wcmV2aW91c1Jlc3VsdCxcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAod3JpdGUpIHtcbiAgICAgICAgd3JpdGVSZXN1bHRUb1N0b3JlKHtcbiAgICAgICAgICAgIGRhdGFJZDogd3JpdGUuZGF0YUlkLFxuICAgICAgICAgICAgcmVzdWx0OiB3cml0ZS5yZXN1bHQsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHdyaXRlLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIGRvY3VtZW50OiB0aGlzLnRyYW5zZm9ybURvY3VtZW50KHdyaXRlLnF1ZXJ5KSxcbiAgICAgICAgICAgIHN0b3JlOiB0aGlzLmRhdGEsXG4gICAgICAgICAgICBkYXRhSWRGcm9tT2JqZWN0OiB0aGlzLmNvbmZpZy5kYXRhSWRGcm9tT2JqZWN0LFxuICAgICAgICAgICAgZnJhZ21lbnRNYXRjaGVyRnVuY3Rpb246IHRoaXMuY29uZmlnLmZyYWdtZW50TWF0Y2hlci5tYXRjaCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZGlmZiA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICByZXR1cm4gZGlmZlF1ZXJ5QWdhaW5zdFN0b3JlKHtcbiAgICAgICAgICAgIHN0b3JlOiB0aGlzLmNvbmZpZy5zdG9yZUZhY3RvcnkodGhpcy5leHRyYWN0KHF1ZXJ5Lm9wdGltaXN0aWMpKSxcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnRyYW5zZm9ybURvY3VtZW50KHF1ZXJ5LnF1ZXJ5KSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogcXVlcnkudmFyaWFibGVzLFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHF1ZXJ5LnJldHVyblBhcnRpYWxEYXRhLFxuICAgICAgICAgICAgcHJldmlvdXNSZXN1bHQ6IHF1ZXJ5LnByZXZpb3VzUmVzdWx0LFxuICAgICAgICAgICAgZnJhZ21lbnRNYXRjaGVyRnVuY3Rpb246IHRoaXMuY29uZmlnLmZyYWdtZW50TWF0Y2hlci5tYXRjaCxcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiAod2F0Y2gpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy53YXRjaGVzLnB1c2god2F0Y2gpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMud2F0Y2hlcyA9IF90aGlzLndhdGNoZXMuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSB3YXRjaDsgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5ldmljdCA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJldmljdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgb24gSW5NZW1vcnkgQ2FjaGVcIik7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kYXRhLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZW1vdmVPcHRpbWlzdGljID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB0b1BlcmZvcm0gPSB0aGlzLm9wdGltaXN0aWMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlkICE9PSBpZDsgfSk7XG4gICAgICAgIHRoaXMub3B0aW1pc3RpYyA9IFtdO1xuICAgICAgICB0b1BlcmZvcm0uZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWNvcmRPcHRpbWlzdGljVHJhbnNhY3Rpb24oY2hhbmdlLnRyYW5zYWN0aW9uLCBjaGFuZ2UuaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5wZXJmb3JtVHJhbnNhY3Rpb24gPSBmdW5jdGlvbiAodHJhbnNhY3Rpb24pIHtcbiAgICAgICAgdmFyIGFscmVhZHlTaWxlbmNlZCA9IHRoaXMuc2lsZW5jZUJyb2FkY2FzdDtcbiAgICAgICAgdGhpcy5zaWxlbmNlQnJvYWRjYXN0ID0gdHJ1ZTtcbiAgICAgICAgdHJhbnNhY3Rpb24odGhpcyk7XG4gICAgICAgIGlmICghYWxyZWFkeVNpbGVuY2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNpbGVuY2VCcm9hZGNhc3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlY29yZE9wdGltaXN0aWNUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uICh0cmFuc2FjdGlvbiwgaWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zaWxlbmNlQnJvYWRjYXN0ID0gdHJ1ZTtcbiAgICAgICAgdmFyIHBhdGNoID0gcmVjb3JkKHRoaXMuZXh0cmFjdCh0cnVlKSwgZnVuY3Rpb24gKHJlY29yZGluZ0NhY2hlKSB7XG4gICAgICAgICAgICB2YXIgZGF0YUNhY2hlID0gX3RoaXMuZGF0YTtcbiAgICAgICAgICAgIF90aGlzLmRhdGEgPSByZWNvcmRpbmdDYWNoZTtcbiAgICAgICAgICAgIF90aGlzLnBlcmZvcm1UcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICBfdGhpcy5kYXRhID0gZGF0YUNhY2hlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vcHRpbWlzdGljLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb246IHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgZGF0YTogcGF0Y2gsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNpbGVuY2VCcm9hZGNhc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS50cmFuc2Zvcm1Eb2N1bWVudCA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICBpZiAodGhpcy5hZGRUeXBlbmFtZSlcbiAgICAgICAgICAgIHJldHVybiBhZGRUeXBlbmFtZVRvRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZWFkUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucywgb3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBvcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IG9wdGltaXN0aWMsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVhZEZyYWdtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZCh7XG4gICAgICAgICAgICBxdWVyeTogdGhpcy50cmFuc2Zvcm1Eb2N1bWVudChnZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQob3B0aW9ucy5mcmFnbWVudCwgb3B0aW9ucy5mcmFnbWVudE5hbWUpKSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICByb290SWQ6IG9wdGlvbnMuaWQsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiBvcHRpbWlzdGljLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLndyaXRlUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLndyaXRlKHtcbiAgICAgICAgICAgIGRhdGFJZDogJ1JPT1RfUVVFUlknLFxuICAgICAgICAgICAgcmVzdWx0OiBvcHRpb25zLmRhdGEsXG4gICAgICAgICAgICBxdWVyeTogdGhpcy50cmFuc2Zvcm1Eb2N1bWVudChvcHRpb25zLnF1ZXJ5KSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUud3JpdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMud3JpdGUoe1xuICAgICAgICAgICAgZGF0YUlkOiBvcHRpb25zLmlkLFxuICAgICAgICAgICAgcmVzdWx0OiBvcHRpb25zLmRhdGEsXG4gICAgICAgICAgICBxdWVyeTogdGhpcy50cmFuc2Zvcm1Eb2N1bWVudChnZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQob3B0aW9ucy5mcmFnbWVudCwgb3B0aW9ucy5mcmFnbWVudE5hbWUpKSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuYnJvYWRjYXN0V2F0Y2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc2lsZW5jZUJyb2FkY2FzdClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy53YXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciBuZXdEYXRhID0gX3RoaXMuZGlmZih7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGMucXVlcnksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBwcmV2aW91c1Jlc3VsdDogYy5wcmV2aW91c1Jlc3VsdCAmJiBjLnByZXZpb3VzUmVzdWx0KCksXG4gICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogYy5vcHRpbWlzdGljLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjLmNhbGxiYWNrKG5ld0RhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBJbk1lbW9yeUNhY2hlO1xufShBcG9sbG9DYWNoZSkpO1xuZXhwb3J0IHsgSW5NZW1vcnlDYWNoZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5NZW1vcnlDYWNoZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUtaW5tZW1vcnkvbGliL2luTWVtb3J5Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDY4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnQgKiBmcm9tICcuL2NhY2hlJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXBvbGxvLWNhY2hlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7IGdldEZyYWdtZW50UXVlcnlEb2N1bWVudCB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xudmFyIEFwb2xsb0NhY2hlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcG9sbG9DYWNoZSgpIHtcbiAgICB9XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnRyYW5zZm9ybURvY3VtZW50ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS50cmFuc2Zvcm1Gb3JMaW5rID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5yZWFkUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucywgb3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBvcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IG9wdGltaXN0aWMsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnJlYWRGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQoe1xuICAgICAgICAgICAgcXVlcnk6IGdldEZyYWdtZW50UXVlcnlEb2N1bWVudChvcHRpb25zLmZyYWdtZW50LCBvcHRpb25zLmZyYWdtZW50TmFtZSksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgcm9vdElkOiBvcHRpb25zLmlkLFxuICAgICAgICAgICAgb3B0aW1pc3RpYzogb3B0aW1pc3RpYyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUud3JpdGVRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMud3JpdGUoe1xuICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9RVUVSWScsXG4gICAgICAgICAgICByZXN1bHQ6IG9wdGlvbnMuZGF0YSxcbiAgICAgICAgICAgIHF1ZXJ5OiBvcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUud3JpdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMud3JpdGUoe1xuICAgICAgICAgICAgZGF0YUlkOiBvcHRpb25zLmlkLFxuICAgICAgICAgICAgcmVzdWx0OiBvcHRpb25zLmRhdGEsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgcXVlcnk6IGdldEZyYWdtZW50UXVlcnlEb2N1bWVudChvcHRpb25zLmZyYWdtZW50LCBvcHRpb25zLmZyYWdtZW50TmFtZSksXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFwb2xsb0NhY2hlO1xufSgpKTtcbmV4cG9ydCB7IEFwb2xsb0NhY2hlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWNoZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUvbGliL2NhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0ICogZnJvbSAnLi9DYWNoZSc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUvbGliL3R5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IHZhciBDYWNoZTtcbihmdW5jdGlvbiAoQ2FjaGUpIHtcbn0pKENhY2hlIHx8IChDYWNoZSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DYWNoZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hcG9sbG8tY2FjaGUvbGliL3R5cGVzL0NhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OTFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IHsgZmlsdGVyLCBjaGVjaywgcHJvcFR5cGUgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAnLi9ncmFwaHFsJztcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ncmFwaHFsLWFueXdoZXJlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjkyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tICcuL2dyYXBocWwnO1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihkb2MsIGRhdGEpIHtcbiAgICB2YXIgcmVzb2x2ZXIgPSBmdW5jdGlvbiAoZmllbGROYW1lLCByb290LCBhcmdzLCBjb250ZXh0LCBpbmZvKSB7XG4gICAgICAgIHJldHVybiByb290W2luZm8ucmVzdWx0S2V5XTtcbiAgICB9O1xuICAgIHJldHVybiBncmFwaHFsKHJlc29sdmVyLCBkb2MsIGRhdGEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrKGRvYywgZGF0YSkge1xuICAgIHZhciByZXNvbHZlciA9IGZ1bmN0aW9uIChmaWVsZE5hbWUsIHJvb3QsIGFyZ3MsIGNvbnRleHQsIGluZm8pIHtcbiAgICAgICAgaWYgKCF7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJvb3QsIGluZm8ucmVzdWx0S2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGluZm8ucmVzdWx0S2V5ICsgXCIgbWlzc2luZyBvbiBcIiArIHJvb3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290W2luZm8ucmVzdWx0S2V5XTtcbiAgICB9O1xuICAgIGdyYXBocWwocmVzb2x2ZXIsIGRvYywgZGF0YSwge30sIHt9LCB7XG4gICAgICAgIGZyYWdtZW50TWF0Y2hlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgfSk7XG59XG52YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG59XG5Qcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcbnZhciByZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcyA9IHtcbiAgICBwcm9wOiAncHJvcCcsXG4gICAgY29udGV4dDogJ2NvbnRleHQnLFxuICAgIGNoaWxkQ29udGV4dDogJ2NoaWxkIGNvbnRleHQnLFxufTtcbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb25OYW1lID0gcmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dO1xuICAgICAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIlRoZSBcIiArIGxvY2F0aW9uTmFtZSArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKFwiaW4gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiVGhlIFwiICsgbG9jYXRpb25OYW1lICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiBcIiArXG4gICAgICAgICAgICAgICAgICAgIChcImBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvcFR5cGUoZG9jKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUpIHtcbiAgICAgICAgdmFyIHByb3AgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGVjayhkb2MsIHByb3ApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsaXRpZXMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC1hbnl3aGVyZS9saWIvdXRpbGl0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2OTNcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBWUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFNQTtBQWJBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6UkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeFNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeElBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25LQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcmZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdFlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=