'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0 auto;\n  max-width: 650px;\n'], ['\n  margin: 0 auto;\n  max-width: 650px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Post = require('../Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Rect = _styledComponents2.default.div(_templateObject);

var Feed = function Feed(props) {
  var dispatch = props.dispatch,
      posts = props.posts;

  if (posts) {
    return _react2.default.createElement(Rect, null, posts.map(function (post) {
      return _react2.default.createElement(_Post2.default, {
        key: 'post-' + post.id,
        created: post.created,
        content: post.content,
        dispatch: dispatch,
        summary: posts.length > 1,
        title: post.title,
        url: post.url
      });
    }));
  }

  return null;
};

Feed.defaultProps = {
  posts: []
};

Feed.propTypes = {
  posts: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number,
    created: _propTypes2.default.string,
    public: _propTypes2.default.bool,
    title: _propTypes2.default.string,
    content: _propTypes2.default.string,
    url: _propTypes2.default.string
  }))
};

exports.default = Feed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmVlZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWN0IiwiZGl2IiwiRmVlZCIsInByb3BzIiwiZGlzcGF0Y2giLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJpZCIsImNyZWF0ZWQiLCJjb250ZW50IiwibGVuZ3RoIiwidGl0bGUiLCJ1cmwiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJudW1iZXIiLCJzdHJpbmciLCJwdWJsaWMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sMkJBQVAsQUFBYyxJQUFwQjs7QUFLQSxJQUFNLE9BQU8sU0FBUCxBQUFPLEtBQUEsQUFBQyxPQUFVO01BQUEsQUFFcEIsV0FGb0IsQUFJbEIsTUFKa0IsQUFFcEI7TUFGb0IsQUFHcEIsUUFIb0IsQUFJbEIsTUFKa0IsQUFHcEIsQUFHRjs7TUFBQSxBQUFJLE9BQU8sQUFDVDsyQkFDRyxjQUFELE1BQ0csWUFBQSxBQUFNLElBQUksZ0JBQUE7O3VCQUVNLEtBRGYsQUFDb0IsQUFDbEI7aUJBQVMsS0FGWCxBQUVnQixBQUNkO2lCQUFTLEtBSFgsQUFHZ0IsQUFDZDtrQkFKRixBQUlZLEFBQ1Y7aUJBQVMsTUFBQSxBQUFNLFNBTGpCLEFBSzBCLEFBQ3hCO2VBQU8sS0FOVCxBQU1jLEFBQ1o7YUFBSyxLQVJFLEFBQ1QsQUFPWTtBQU5WLE9BREY7QUFITixBQUNFLEFBQ0csQUFhTixNQWRHO0FBZ0JKOztTQUFBLEFBQU8sQUFDUjtBQXpCRDs7QUEyQkEsS0FBQSxBQUFLO1NBQUwsQUFBb0IsQUFDWDtBQURXLEFBQ2xCOztBQUdGLEtBQUEsQUFBSzs2QkFDSSxBQUFVLDRCQUFRLEFBQVU7UUFDN0Isb0JBRG1DLEFBQ3pCLEFBQ2Q7YUFBUyxvQkFGOEIsQUFFcEIsQUFDbkI7WUFBUSxvQkFIK0IsQUFHckIsQUFDbEI7V0FBTyxvQkFKZ0MsQUFJdEIsQUFDakI7YUFBUyxvQkFMOEIsQUFLcEIsQUFDbkI7U0FBSyxvQkFQVCxBQUFpQixBQUNSLEFBQWtCLEFBQWdCLEFBTXhCO0FBTndCLEFBQ3ZDLEdBRHVCLENBQWxCO0FBRFEsQUFDZjs7a0JBVWEsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJlY2thcnQvQ29kZS90eWxlcnJlY2thcnQuY29tIn0=