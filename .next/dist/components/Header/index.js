'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: #222232;\n  margin: 0 0 2em 0;\n  padding: 1em 0;\n\n  @media (max-width: 700px) {\n    padding: 1em;\n  }\n'], ['\n  background: #222232;\n  margin: 0 0 2em 0;\n  padding: 1em 0;\n\n  @media (max-width: 700px) {\n    padding: 1em;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: #ffffff;\n  line-height: 1.75em;\n  margin: 0 auto;\n  width: 650px;\n\n  a {\n    color: #ABCDFD;\n\n    &:hover {\n      border-bottom: 1px dotted #ABCDFD;\n    }\n  }\n\n  p {\n    margin: 0 0 1em 0;\n    max-width: 325px;\n  }\n\n  strong {\n    font-weight: 600;\n  }\n'], ['\n  color: #ffffff;\n  line-height: 1.75em;\n  margin: 0 auto;\n  width: 650px;\n\n  a {\n    color: #ABCDFD;\n\n    &:hover {\n      border-bottom: 1px dotted #ABCDFD;\n    }\n  }\n\n  p {\n    margin: 0 0 1em 0;\n    max-width: 325px;\n  }\n\n  strong {\n    font-weight: 600;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin: 0;\n  overflow: auto;\n  padding: 0;\n\n  li {\n    list-style: none;\n    float: left;\n    margin-right: 1em;\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n'], ['\n  margin: 0;\n  overflow: auto;\n  padding: 0;\n\n  li {\n    list-style: none;\n    float: left;\n    margin-right: 1em;\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Wrapper = _styledComponents2.default.div(_templateObject);

var Rect = _styledComponents2.default.div(_templateObject2);

var Navigation = _styledComponents2.default.ul(_templateObject3);

var Header = function Header(props) {
  var dispatchRoute = function dispatchRoute(payload) {
    var dispatch = props.dispatch,
        toggleMenu = props.toggleMenu;

    dispatch({ type: 'ROUTER_PUSH', payload: payload });
  };

  return _react2.default.createElement(Wrapper, null, _react2.default.createElement(Rect, null, _react2.default.createElement('p', null, 'I\'m ', _react2.default.createElement('strong', null, 'Tyler Reckart'), '; a ', _react2.default.createElement('a', { href: 'https://github.com/tylerreckart', target: '_blank' }, 'software developer'), ' at ', _react2.default.createElement('a', { href: 'https://boomtownroi.com', target: '_blank' }, 'BoomTown'), ' focusing on front end architecture and design.'), _react2.default.createElement('nav', null, _react2.default.createElement(Navigation, null, _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: function onClick() {
      return dispatchRoute('/');
    } }, 'Journal')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: function onClick() {
      return dispatchRoute('/about');
    } }, 'About')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'https://github.com/tylerreckart', target: '_blank' }, 'Github')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'https://twitter.com/tylerreckart', target: '_blank' }, '@tylerreckart'))))));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJkaXYiLCJSZWN0IiwiTmF2aWdhdGlvbiIsInVsIiwiSGVhZGVyIiwiZGlzcGF0Y2hSb3V0ZSIsInBheWxvYWQiLCJkaXNwYXRjaCIsInByb3BzIiwidG9nZ2xlTWVudSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVUsMkJBQU8sQUFBakIsSUFBTjs7QUFVQSxJQUFNLE9BQU8sMkJBQU8sQUFBZCxJQUFOOztBQXdCQSxJQUFNLGFBQWEsMkJBQU8sQUFBcEIsR0FBTjs7QUFlQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQVMsQUFDdEI7TUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0IsY0FBQyxBQUFELFNBQWE7UUFFL0IsQUFGK0IsV0FJN0IsQUFKNkIsTUFFL0IsQUFGK0I7UUFHL0IsQUFIK0IsYUFJN0IsQUFKNkIsTUFHL0IsQUFIK0IsQUFNakM7O2FBQVMsRUFBRSxNQUFNLEFBQVIsZUFBdUIsU0FBUyxBQUFoQyxBQUFULEFBQ0Q7QUFQRCxBQVNBOztTQUNFLGdCQUFDLGNBQUQsU0FDRSxzQkFBQyxjQUFELE1BQ0Usc0JBQUEsY0FBQSxLQUFBLE1BQU8seUJBQUEsY0FBQSxVQUFBLE1BQUEsQUFBUCxrQkFBeUMsd0JBQUEsY0FBQSxPQUFHLE1BQUssQUFBUixtQ0FBMEMsUUFBTyxBQUFqRCxZQUFBLEFBQXpDLHVCQUE2SCx3QkFBQSxjQUFBLE9BQUcsTUFBSyxBQUFSLDJCQUFrQyxRQUFPLEFBQXpDLFlBQUEsQUFBN0gsYUFBQSxBQURGLEFBR0Usb0VBQUEsY0FBQSxPQUNFLHNCQUFDLGNBQUQsWUFDRSxzQkFBQSxjQUFBLE1BQUksc0JBQUEsY0FBQSxPQUFHLE1BQUssQUFBUixzQkFBNkIsU0FBUyxtQkFBQTthQUFNLGNBQWMsQUFBZCxBQUFOO0FBQXRDLFNBQUEsQUFBSixBQURGLEFBRUUsNkJBQUEsY0FBQSxNQUFJLHNCQUFBLGNBQUEsT0FBRyxNQUFLLEFBQVIsc0JBQTZCLFNBQVMsbUJBQUE7YUFBTSxjQUFjLEFBQWQsQUFBTjtBQUF0QyxTQUFBLEFBQUosQUFGRixBQUdFLDJCQUFBLGNBQUEsTUFBSSxzQkFBQSxjQUFBLE9BQUcsTUFBSyxBQUFSLG1DQUEwQyxRQUFPLEFBQWpELFlBQUEsQUFBSixBQUhGLEFBSUUsNEJBQUEsY0FBQSxNQUFJLHNCQUFBLGNBQUEsT0FBRyxNQUFLLEFBQVIsb0NBQTJDLFFBQU8sQUFBbEQsWUFBQSxBQUFKLEFBSkYsQUFERixBQUhGLEFBREYsQUFERixBQWdCRDtBQTFCRDs7a0JBNEJlLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyZWNrYXJ0L0NvZGUvdHlsZXJyZWNrYXJ0LmNvbSJ9