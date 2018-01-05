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

var _aphrodite = require('aphrodite');

var _showdown = require('showdown');

var _showdown2 = _interopRequireDefault(_showdown);

var _componentUtils = require('../../utils/componentUtils');

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
  className: _react.PropTypes.string,
  content: _react.PropTypes.string.isRequired,
  created: _react.PropTypes.string,
  summary: _react.PropTypes.bool,
  title: _react.PropTypes.string.isRequired,
  url: _react.PropTypes.string
};

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1Bvc3QvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGVudCIsImRpdiIsIkxpbmsiLCJhIiwiTWV0YUluZm8iLCJUaXRsZSIsImgxIiwiVm9pZCIsIlBvc3QiLCJjbGFzc05hbWUiLCJwcm9wcyIsImNvbnRlbnQiLCJjcmVhdGVkIiwiZGlzcGF0Y2giLCJzdW1tYXJ5IiwidGl0bGUiLCJ1cmwiLCJkaXNwYXRjaFJvdXRlIiwicGF5bG9hZCIsInRvZ2dsZU1lbnUiLCJ0eXBlIiwicHJldmlldyIsImNvbnZlcnROZXdMaW5lcyIsIiRzdHIiLCJzdHIiLCJyZXBsYWNlIiwiY29udmVydGVyIiwibWFrZUh0bWwiLCJtYXJrZG93biIsInJlbmRlclBvc3QiLCJfX2h0bWwiLCJ0ZXh0IiwiZm9ybWF0IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVUsMkJBQVYsQUFBaUIsSUFBdkI7O0FBMkNBLElBQU0sT0FBTywyQkFBUCxBQUFjLEVBQXBCOztBQU1BLElBQU0sV0FBVywyQkFBWCxBQUFrQixJQUF4Qjs7QUFLQSxJQUFNLFFBQVEsMkJBQVIsQUFBZSxHQUFyQjs7QUFRQSxJQUFNLE9BQU8sMkJBQVAsQUFBYyxJQUFwQjs7QUFNQSxJQUFNLE9BQU8sU0FBUCxBQUFPLFlBQVM7TUFBQSxBQUVsQixZQUZrQixBQVNoQixNQVRnQixBQUVsQjtNQUZrQixBQUdsQixVQUhrQixBQVNoQixNQVRnQixBQUdsQjtNQUhrQixBQUlsQixVQUprQixBQVNoQixNQVRnQixBQUlsQjtNQUprQixBQUtsQixXQUxrQixBQVNoQixNQVRnQixBQUtsQjtNQUxrQixBQU1sQixVQU5rQixBQVNoQixNQVRnQixBQU1sQjtNQU5rQixBQU9sQixRQVBrQixBQVNoQixNQVRnQixBQU9sQjtNQVBrQixBQVFsQixNQVJrQixBQVNoQixNQVRnQixBQVFsQixBQUdGOztNQUFNLGdCQUFnQixTQUFoQixBQUFnQixjQUFBLEFBQUMsU0FBWTtRQUFBLEFBRS9CLFdBRitCLEFBSTdCLE1BSjZCLEFBRS9CO1FBRitCLEFBRy9CLGFBSCtCLEFBSTdCLE1BSjZCLEFBRy9CLEFBR0Y7O2FBQVMsRUFBRSxNQUFGLEFBQVEsZUFBZSxTQUFoQyxBQUFTLEFBQWdDLEFBQzFDO0FBUEQsQUFTQTs7TUFBTSxVQUFVLCtCQUFoQixBQUFnQixBQUFVLEFBRTFCOztNQUFNLGtCQUFrQixTQUFsQixBQUFrQixxQkFBTyxBQUM3QjtRQUFJLE9BQUosQUFBVyxBQUNYO1dBQU8sS0FBQSxBQUFLLFFBQUwsQUFBYSxRQUFwQixBQUFPLEFBQXFCLEFBQzVCO1dBQUEsQUFBTyxBQUNSO0FBSkQsQUFNQTs7TUFBTSxZQUFZLFNBQVosQUFBWSxvQkFBQTtXQUNoQiwwQkFBQSxBQUFnQixTQUFTLGdCQURULEFBQ2hCLEFBQXlCLEFBQWdCO0FBRDNDLEFBSUE7O01BQU0sYUFBYSxTQUFiLEFBQWEsaUJBQUE7V0FDakIsdUNBQUsseUJBQXlCLEVBQUUsUUFBUSxVQUR2QixBQUNqQixBQUE4QixBQUFVLEFBQVU7QUFEcEQsQUFJQTs7U0FDRSxnQkFBQSxjQUFBLE9BQ0Usc0JBQUMsY0FBRCxPQUFPLHNCQUFDLGNBQUQsUUFBTSxNQUFOLEFBQVcsc0JBQXFCLFNBQVMsbUJBQUE7YUFBTSxjQUFOLEFBQU0sQUFBYztBQUE3RCxBQUFvRSxTQUQ3RSxBQUNFLEFBQU8sQUFDTixtQkFBVSxnQkFBQyxjQUFELFVBQVcsNEJBQUEsQUFBTyxTQUFQLEFBQWdCLE9BQXJDLEFBQVUsQUFBVyxBQUF1QixvQkFBK0IsOEJBQUEsQUFBQyxNQUYvRSxBQUdFLHVCQUFDLGNBQUQsU0FBVSxPQUFBLEFBQUMsVUFBVSxXQUFYLEFBQVcsQUFBVyxXQUFXLFdBSDdDLEFBR0UsQUFBMkMsQUFBVyxBQUNyRCxxQ0FBVyxjQUFELFFBQU0sU0FBUyxtQkFBQTthQUFNLGNBQU4sQUFBTSxBQUFjO0FBQW5DLE9BQUEsRUFBVixBQUFVLGVBTGYsQUFDRSxBQUl5RSxBQUc1RTtBQTVDRDs7QUE4Q0EsS0FBQSxBQUFLO1dBQUwsQUFBb0IsQUFDVDtBQURTLEFBQ2xCOztBQUdGLEtBQUEsQUFBSzthQUNRLGlCQURJLEFBQ00sQUFDckI7V0FBUyxpQkFBQSxBQUFVLE9BRkosQUFFVyxBQUMxQjtXQUFTLGlCQUhNLEFBR0ksQUFDbkI7V0FBUyxpQkFKTSxBQUlJLEFBQ25CO1NBQU8saUJBQUEsQUFBVSxPQUxGLEFBS1MsQUFDeEI7T0FBSyxpQkFOUCxBQUFpQixBQU1BO0FBTkEsQUFDZjs7a0JBUWEsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJlY2thcnQvQ29kZS90eWxlcnJlY2thcnQuY29tIn0=