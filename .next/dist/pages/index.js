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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _templateObject = _taggedTemplateLiteral(['\n  query {\n    allPosts(orderBy: ID_ASC) {\n      nodes {\n        title\n        created\n        content\n        url\n      }\n    }\n  }\n'], ['\n  query {\n    allPosts(orderBy: ID_ASC) {\n      nodes {\n        title\n        created\n        content\n        url\n      }\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  @media (max-width: 700px) {\n    display: block;\n    padding: 0 1em;\n  }\n'], ['\n  display: block;\n  @media (max-width: 700px) {\n    display: block;\n    padding: 0 1em;\n  }\n']);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = require("react-apollo");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Feed = require('../components/Feed');

var _Feed2 = _interopRequireDefault(_Feed);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _apollo = require('../lib/apollo');

var _apollo2 = _interopRequireDefault(_apollo);

require("isomorphic-fetch");

require("babel-polyfill");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var query = (0, _reactApollo.gql)(_templateObject);

var Rect = _styledComponents2.default.div(_templateObject2);

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var posts = [];
      if (this.props.data && this.props.data.allPosts) {
        posts = this.props.data.allPosts.nodes;
      }
      var node = _react2.default.createElement(Rect, null, _react2.default.createElement(_Feed2.default, _extends({}, this.props, { posts: posts })));

      return _react2.default.createElement(Rect, null, _react2.default.createElement(_Header2.default, this.props), posts.length > 0 ? node : null, _react2.default.createElement(_Footer2.default, null));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var req = _ref2.req;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _apollo2.default.query({
                  query: query
                });

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

Home.defaultProps = {
  posts: []
};

Home.propTypes = {
  posts: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.numberd,
    created: _propTypes2.default.number,
    public: _propTypes2.default.bool,
    title: _propTypes2.default.string,
    content: _propTypes2.default.string,
    url: _propTypes2.default.string
  }))
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInF1ZXJ5IiwiUmVjdCIsImRpdiIsIkhvbWUiLCJwb3N0cyIsInByb3BzIiwiZGF0YSIsImFsbFBvc3RzIiwibm9kZXMiLCJub2RlIiwibGVuZ3RoIiwicmVxIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwiaWQiLCJudW1iZXJkIiwiY3JlYXRlZCIsIm51bWJlciIsInB1YmxpYyIsImJvb2wiLCJ0aXRsZSIsInN0cmluZyIsImNvbnRlbnQiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLDhCQUFOOztBQWFBLElBQU0sT0FBTywyQkFBUCxBQUFjLElBQXBCOztJLEFBUXFCOzs7Ozs7Ozs7Ozs2QkFPVixBQUNQO1VBQUksUUFBSixBQUFZLEFBQ1o7VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFsQyxBQUF1QyxVQUFVLEFBQy9DO2dCQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixTQUF4QixBQUFpQyxBQUNsQztBQUNEO1VBQU0sT0FDSixnQkFBQyxjQUFELE1BQ0UsaUVBQVUsS0FBVixBQUFlLFNBQU8sT0FGMUIsQUFDRSxBQUNFLEFBQTZCLEFBSWpDOzthQUNFLGdCQUFDLGNBQUQsTUFDRSxzREFBWSxLQURkLEFBQ0UsQUFBaUIsQUFDaEIsY0FBQSxBQUFNLFNBQU4sQUFBZSxJQUFmLEFBQW1CLE9BRnRCLEFBRTZCLEFBQzNCLHNEQUpKLEFBQ0UsQUFNSDs7Ozs7O1ksQUF4QjhCLFlBQUEsQTs7Ozs7O3dDQUNoQixBQUFPO3lCQUFQLEFBQWEsQTtBQUFBLEFBQ3hCLGlCQURXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRkksQTs7QUE0QnJCLEtBQUEsQUFBSztTQUFMLEFBQW9CLEFBQ1g7QUFEVyxBQUNsQjs7QUFHRixLQUFBLEFBQUs7NkJBQ0ksQUFBVSw0QkFBUSxBQUFVO1FBQzdCLG9CQURtQyxBQUN6QixBQUNkO2FBQVMsb0JBRjhCLEFBRXBCLEFBQ25CO1lBQVEsb0JBSCtCLEFBR3JCLEFBQ2xCO1dBQU8sb0JBSmdDLEFBSXRCLEFBQ2pCO2FBQVMsb0JBTDhCLEFBS3BCLEFBQ25CO1NBQUssb0JBUFQsQUFBaUIsQUFDUixBQUFrQixBQUFnQixBQU14QjtBQU53QixBQUN2QyxHQUR1QixDQUFsQjtBQURRLEFBQ2YiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyZWNrYXJ0L0NvZGUvdHlsZXJyZWNrYXJ0LmNvbSJ9