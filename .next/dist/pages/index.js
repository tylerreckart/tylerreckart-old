'use strict';

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _reactApollo = require('react-apollo');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Header = require('../src/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../src/components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Feed = require('../src/components/Feed');

var _Feed2 = _interopRequireDefault(_Feed);

var _Pagination = require('../src/components/Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _apolloClient = require('apollo-client');

var _apolloLinkHttp = require('apollo-link-http');

var _apolloCacheInmemory = require('apollo-cache-inmemory');

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