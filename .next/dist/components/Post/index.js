'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  line-height: 1.75em;\n  max-width: 650px;\n\n  a {\n    color: #74808E;\n\n    &:hover {\n      border-bottom: 1px dotted #74808E;\n    }\n  }\n\n  img {\n    display: block;\n    margin: 1.25em 0;\n    width: 100%;\n  }\n\n  p {\n    margin: 0 0 1.25em 0;\n  }\n\n  pre {\n    background-color: rgba(240, 242, 244, .5);\n    border-radius: 3px;\n    font-weight: 300,\n    line-height: 1.75em;\n    margin: 2em 0;\n    overflow: hidden;\n    padding: 1.25em;\n\n    code {\n      font-family: Menlo, \'Roboto Mono\', monospace;\n      font-size: 12px;\n      line-height: .5em;\n    }\n  }\n\n  strong {\n    font-weight: 600;\n  }\n'], ['\n  line-height: 1.75em;\n  max-width: 650px;\n\n  a {\n    color: #74808E;\n\n    &:hover {\n      border-bottom: 1px dotted #74808E;\n    }\n  }\n\n  img {\n    display: block;\n    margin: 1.25em 0;\n    width: 100%;\n  }\n\n  p {\n    margin: 0 0 1.25em 0;\n  }\n\n  pre {\n    background-color: rgba(240, 242, 244, .5);\n    border-radius: 3px;\n    font-weight: 300,\n    line-height: 1.75em;\n    margin: 2em 0;\n    overflow: hidden;\n    padding: 1.25em;\n\n    code {\n      font-family: Menlo, \'Roboto Mono\', monospace;\n      font-size: 12px;\n      line-height: .5em;\n    }\n  }\n\n  strong {\n    font-weight: 600;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: inherit;\n  display: inline-block;\n  text-decoration: none;\n'], ['\n  color: inherit;\n  display: inline-block;\n  text-decoration: none;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: #74808E;\n  margin: 1em 0;\n'], ['\n  color: #74808E;\n  margin: 1em 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: #000000;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1.25em;\n  letter-spacing: .05em;\n'], ['\n  color: #000000;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1.25em;\n  letter-spacing: .05em;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: block;\n  height: 1em;\n  width: 100%;\n'], ['\n  display: block;\n  height: 1em;\n  width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require('aphrodite');

var _showdown = require('showdown');

var _showdown2 = _interopRequireDefault(_showdown);

var _componentUtils = require('../../lib/componentUtils');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Content = _styledComponents2.default.div(_templateObject);

var Link = _styledComponents2.default.a(_templateObject2);

var MetaInfo = _styledComponents2.default.div(_templateObject3);

var Title = _styledComponents2.default.h1(_templateObject4);

var Void = _styledComponents2.default.div(_templateObject5);

var Post = function Post(props) {
  var className = props.className,
      content = props.content,
      created = props.created,
      dispatch = props.dispatch,
      summary = props.summary,
      title = props.title,
      url = props.url;

  var dispatchRoute = function dispatchRoute(payload) {
    var dispatch = props.dispatch,
        toggleMenu = props.toggleMenu;

    dispatch({ type: 'ROUTER_PUSH', payload: payload });
  };

  var preview = (0, _componentUtils.summarize)(content);

  var convertNewLines = function convertNewLines(str) {
    var $str = str;
    $str = $str.replace(/\\n/g, '<br />');
    return $str;
  };

  var converter = function converter(markdown) {
    return new _showdown.Converter().makeHtml(convertNewLines(markdown));
  };

  var renderPost = function renderPost(text) {
    return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: converter(text) } });
  };

  return _react2.default.createElement('div', null, _react2.default.createElement(Title, null, _react2.default.createElement(Link, { href: 'javascript:void(0)', onClick: function onClick() {
      return dispatchRoute(url);
    } }, title)), created ? _react2.default.createElement(MetaInfo, null, (0, _moment2.default)(created).format("MMMM Do, YYYY")) : _react2.default.createElement(Void, null), _react2.default.createElement(Content, null, !summary ? renderPost(content) : renderPost(preview)), summary ? _react2.default.createElement(Link, { onClick: function onClick() {
      return dispatchRoute(url);
    } }, 'Read More') : null);
};

Post.defaultProps = {
  summary: true
};

Post.propTypes = {
  className: _propTypes2.default.string,
  content: _propTypes2.default.string.isRequired,
  created: _propTypes2.default.string,
  summary: _propTypes2.default.bool,
  title: _propTypes2.default.string.isRequired,
  url: _propTypes2.default.string
};

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb250ZW50IiwiZGl2IiwiTGluayIsImEiLCJNZXRhSW5mbyIsIlRpdGxlIiwiaDEiLCJWb2lkIiwiUG9zdCIsImNsYXNzTmFtZSIsInByb3BzIiwiY29udGVudCIsImNyZWF0ZWQiLCJkaXNwYXRjaCIsInN1bW1hcnkiLCJ0aXRsZSIsInVybCIsImRpc3BhdGNoUm91dGUiLCJwYXlsb2FkIiwidG9nZ2xlTWVudSIsInR5cGUiLCJwcmV2aWV3IiwiY29udmVydE5ld0xpbmVzIiwiJHN0ciIsInN0ciIsInJlcGxhY2UiLCJjb252ZXJ0ZXIiLCJtYWtlSHRtbCIsIm1hcmtkb3duIiwicmVuZGVyUG9zdCIsIl9faHRtbCIsInRleHQiLCJmb3JtYXQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLDJCQUFWLEFBQWlCLElBQXZCOztBQTJDQSxJQUFNLE9BQU8sMkJBQVAsQUFBYyxFQUFwQjs7QUFNQSxJQUFNLFdBQVcsMkJBQVgsQUFBa0IsSUFBeEI7O0FBS0EsSUFBTSxRQUFRLDJCQUFSLEFBQWUsR0FBckI7O0FBUUEsSUFBTSxPQUFPLDJCQUFQLEFBQWMsSUFBcEI7O0FBTUEsSUFBTSxPQUFPLFNBQVAsQUFBTyxZQUFTO01BQUEsQUFFbEIsWUFGa0IsQUFTaEIsTUFUZ0IsQUFFbEI7TUFGa0IsQUFHbEIsVUFIa0IsQUFTaEIsTUFUZ0IsQUFHbEI7TUFIa0IsQUFJbEIsVUFKa0IsQUFTaEIsTUFUZ0IsQUFJbEI7TUFKa0IsQUFLbEIsV0FMa0IsQUFTaEIsTUFUZ0IsQUFLbEI7TUFMa0IsQUFNbEIsVUFOa0IsQUFTaEIsTUFUZ0IsQUFNbEI7TUFOa0IsQUFPbEIsUUFQa0IsQUFTaEIsTUFUZ0IsQUFPbEI7TUFQa0IsQUFRbEIsTUFSa0IsQUFTaEIsTUFUZ0IsQUFRbEIsQUFHRjs7TUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0IsY0FBQSxBQUFDLFNBQVk7UUFBQSxBQUUvQixXQUYrQixBQUk3QixNQUo2QixBQUUvQjtRQUYrQixBQUcvQixhQUgrQixBQUk3QixNQUo2QixBQUcvQixBQUdGOzthQUFTLEVBQUUsTUFBRixBQUFRLGVBQWUsU0FBaEMsQUFBUyxBQUFnQyxBQUMxQztBQVBELEFBU0E7O01BQU0sVUFBVSwrQkFBaEIsQUFBZ0IsQUFBVSxBQUUxQjs7TUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IscUJBQU8sQUFDN0I7UUFBSSxPQUFKLEFBQVcsQUFDWDtXQUFPLEtBQUEsQUFBSyxRQUFMLEFBQWEsUUFBcEIsQUFBTyxBQUFxQixBQUM1QjtXQUFBLEFBQU8sQUFDUjtBQUpELEFBTUE7O01BQU0sWUFBWSxTQUFaLEFBQVksb0JBQUE7V0FDaEIsMEJBQUEsQUFBZ0IsU0FBUyxnQkFEVCxBQUNoQixBQUF5QixBQUFnQjtBQUQzQyxBQUlBOztNQUFNLGFBQWEsU0FBYixBQUFhLGlCQUFBO1dBQ2pCLHVDQUFLLHlCQUF5QixFQUFFLFFBQVEsVUFEdkIsQUFDakIsQUFBOEIsQUFBVSxBQUFVO0FBRHBELEFBSUE7O1NBQ0UsZ0JBQUEsY0FBQSxPQUNFLHNCQUFDLGNBQUQsT0FBTyxzQkFBQyxjQUFELFFBQU0sTUFBTixBQUFXLHNCQUFxQixTQUFTLG1CQUFBO2FBQU0sY0FBTixBQUFNLEFBQWM7QUFBN0QsQUFBb0UsU0FEN0UsQUFDRSxBQUFPLEFBQ04sbUJBQVUsZ0JBQUMsY0FBRCxVQUFXLDRCQUFBLEFBQU8sU0FBUCxBQUFnQixPQUFyQyxBQUFVLEFBQVcsQUFBdUIsb0JBQStCLDhCQUFBLEFBQUMsTUFGL0UsQUFHRSx1QkFBQyxjQUFELFNBQVUsT0FBQSxBQUFDLFVBQVUsV0FBWCxBQUFXLEFBQVcsV0FBVyxXQUg3QyxBQUdFLEFBQTJDLEFBQVcsQUFDckQscUNBQVcsY0FBRCxRQUFNLFNBQVMsbUJBQUE7YUFBTSxjQUFOLEFBQU0sQUFBYztBQUFuQyxPQUFBLEVBQVYsQUFBVSxlQUxmLEFBQ0UsQUFJeUUsQUFHNUU7QUE1Q0Q7O0FBOENBLEtBQUEsQUFBSztXQUFMLEFBQW9CLEFBQ1Q7QUFEUyxBQUNsQjs7QUFHRixLQUFBLEFBQUs7YUFDUSxvQkFESSxBQUNNLEFBQ3JCO1dBQVMsb0JBQUEsQUFBVSxPQUZKLEFBRVcsQUFDMUI7V0FBUyxvQkFITSxBQUdJLEFBQ25CO1dBQVMsb0JBSk0sQUFJSSxBQUNuQjtTQUFPLG9CQUFBLEFBQVUsT0FMRixBQUtTLEFBQ3hCO09BQUssb0JBTlAsQUFBaUIsQUFNQTtBQU5BLEFBQ2Y7O2tCQVFhLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyZWNrYXJ0L0NvZGUvdHlsZXJyZWNrYXJ0LmNvbSJ9