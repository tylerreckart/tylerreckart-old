'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  query {\n    allPosts(orderBy: ID_ASC) {\n      nodes {\n        title\n        created\n        content\n        url\n      }\n    }\n  }\n'], ['\n  query {\n    allPosts(orderBy: ID_ASC) {\n      nodes {\n        title\n        created\n        content\n        url\n      }\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  @media (max-width: 700px) {\n    display: block;\n    padding: 0 1em;\n  }\n'], ['\n  display: block;\n  @media (max-width: 700px) {\n    display: block;\n    padding: 0 1em;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = require('react-apollo');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _apollo = require('../lib/apollo');

var _apollo2 = _interopRequireDefault(_apollo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
// import Feed from '../components/Feed';


var QUERY = (0, _reactApollo.gql)(_templateObject);

var Rect = _styledComponents2.default.div(_templateObject2);

exports.default = (0, _apollo2.default)(function (props) {
  var posts = [];
  if (props.data && props.data.allPosts) {
    posts = props.data.allPosts.nodes;
  }

  // const node = (
  //   <Rect>
  //     <Feed {...props} posts={posts} />
  //   </Rect>
  // );

  return _react2.default.createElement(Rect, null, _react2.default.createElement(_Header2.default, props), _react2.default.createElement(_Footer2.default, null));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlFVRVJZIiwiUmVjdCIsImRpdiIsInBvc3RzIiwicHJvcHMiLCJkYXRhIiwiYWxsUG9zdHMiLCJub2RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUhBOzs7QUFLQSxJQUFNLDhCQUFOOztBQWFBLElBQU0sT0FBTywyQkFBUCxBQUFjLElBQXBCOzt3Q0FRd0IsaUJBQVMsQUFDL0I7TUFBSSxRQUFKLEFBQVksQUFDWjtNQUFJLE1BQUEsQUFBTSxRQUFRLE1BQUEsQUFBTSxLQUF4QixBQUE2QixVQUFVLEFBQ3JDO1lBQVEsTUFBQSxBQUFNLEtBQU4sQUFBVyxTQUFuQixBQUE0QixBQUM3QjtBQUVEOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O1NBQ0UsZ0JBQUMsY0FBRCxNQUNFLHNEQURGLEFBQ0UsQUFBWSxBQUVaLHdEQUpKLEFBQ0UsQUFNSDtBQW5CYyxBLENBQUE7O0FBcUJmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJlY2thcnQvQ29kZS90eWxlcnJlY2thcnQuY29tIn0=