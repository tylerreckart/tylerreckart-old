'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0 auto;\n  max-width: 650px;\n'], ['\n  margin: 0 auto;\n  max-width: 650px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
  posts: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.number,
    created: _react.PropTypes.string,
    public: _react.PropTypes.bool,
    title: _react.PropTypes.string,
    content: _react.PropTypes.string,
    url: _react.PropTypes.string
  }))
};

exports.default = Feed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0ZlZWQvaW5kZXguanMiXSwibmFtZXMiOlsiUmVjdCIsImRpdiIsIkZlZWQiLCJwcm9wcyIsImRpc3BhdGNoIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaWQiLCJjcmVhdGVkIiwiY29udGVudCIsImxlbmd0aCIsInRpdGxlIiwidXJsIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwibnVtYmVyIiwic3RyaW5nIiwicHVibGljIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sT0FBTywyQkFBUCxBQUFjLElBQXBCOztBQUtBLElBQU0sT0FBTyxTQUFQLEFBQU8sS0FBQSxBQUFDLE9BQVU7TUFBQSxBQUVwQixXQUZvQixBQUlsQixNQUprQixBQUVwQjtNQUZvQixBQUdwQixRQUhvQixBQUlsQixNQUprQixBQUdwQixBQUdGOztNQUFBLEFBQUksT0FBTyxBQUNUOzJCQUNHLGNBQUQsTUFDRyxZQUFBLEFBQU0sSUFBSSxnQkFBQTs7dUJBRU0sS0FEZixBQUNvQixBQUNsQjtpQkFBUyxLQUZYLEFBRWdCLEFBQ2Q7aUJBQVMsS0FIWCxBQUdnQixBQUNkO2tCQUpGLEFBSVksQUFDVjtpQkFBUyxNQUFBLEFBQU0sU0FMakIsQUFLMEIsQUFDeEI7ZUFBTyxLQU5ULEFBTWMsQUFDWjthQUFLLEtBUkUsQUFDVCxBQU9ZO0FBTlYsT0FERjtBQUhOLEFBQ0UsQUFDRyxBQWFOLE1BZEc7QUFnQko7O1NBQUEsQUFBTyxBQUNSO0FBekJEOztBQTJCQSxLQUFBLEFBQUs7U0FBTCxBQUFvQixBQUNYO0FBRFcsQUFDbEI7O0FBR0YsS0FBQSxBQUFLOzBCQUNJLEFBQVUseUJBQVEsQUFBVTtRQUM3QixpQkFEbUMsQUFDekIsQUFDZDthQUFTLGlCQUY4QixBQUVwQixBQUNuQjtZQUFRLGlCQUgrQixBQUdyQixBQUNsQjtXQUFPLGlCQUpnQyxBQUl0QixBQUNqQjthQUFTLGlCQUw4QixBQUtwQixBQUNuQjtTQUFLLGlCQVBULEFBQWlCLEFBQ1IsQUFBa0IsQUFBZ0IsQUFNeEI7QUFOd0IsQUFDdkMsR0FEdUIsQ0FBbEI7QUFEUSxBQUNmOztrQkFVYSxBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmVja2FydC9Db2RlL3R5bGVycmVja2FydC5jb20ifQ==