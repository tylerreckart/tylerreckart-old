webpackHotUpdate(5,{

/***/ 389:
false,

/***/ 464:
false,

/***/ 465:
false,

/***/ 466:
false,

/***/ 467:
false,

/***/ 468:
false,

/***/ 469:
false,

/***/ 470:
false,

/***/ 471:
false,

/***/ 472:
false,

/***/ 473:
false,

/***/ 474:
false,

/***/ 475:
false,

/***/ 476:
false,

/***/ 477:
false,

/***/ 478:
false,

/***/ 479:
false,

/***/ 480:
false,

/***/ 481:
false,

/***/ 482:
false,

/***/ 483:
false,

/***/ 484:
false,

/***/ 485:
false,

/***/ 486:
false,

/***/ 487:
false,

/***/ 488:
false,

/***/ 489:
false,

/***/ 490:
false,

/***/ 491:
false,

/***/ 492:
false,

/***/ 493:
false,

/***/ 494:
false,

/***/ 495:
false,

/***/ 496:
false,

/***/ 497:
false,

/***/ 498:
false,

/***/ 499:
false,

/***/ 500:
false,

/***/ 501:
false,

/***/ 502:
false,

/***/ 503:
false,

/***/ 504:
false,

/***/ 505:
false,

/***/ 506:
false,

/***/ 507:
false,

/***/ 508:
false,

/***/ 509:
false,

/***/ 510:
false,

/***/ 511:
false,

/***/ 512:
false,

/***/ 513:
false,

/***/ 514:
false,

/***/ 515:
false,

/***/ 516:
false,

/***/ 517:
false,

/***/ 518:
false,

/***/ 519:
false,

/***/ 520:
false,

/***/ 521:
false,

/***/ 522:
false,

/***/ 523:
false,

/***/ 524:
false,

/***/ 525:
false,

/***/ 526:
false,

/***/ 527:
false,

/***/ 528:
false,

/***/ 529:
false,

/***/ 530:
false,

/***/ 531:
false,

/***/ 532:
false,

/***/ 533:
false,

/***/ 534:
false,

/***/ 535:
false,

/***/ 536:
false,

/***/ 537:
false,

/***/ 538:
false,

/***/ 539:
false,

/***/ 540:
false,

/***/ 541:
false,

/***/ 542:
false,

/***/ 543:
false,

/***/ 544:
false,

/***/ 545:
false,

/***/ 546:
false,

/***/ 547:
false,

/***/ 548:
false,

/***/ 549:
false,

/***/ 550:
false,

/***/ 551:
false,

/***/ 552:
false,

/***/ 553:
false,

/***/ 554:
false,

/***/ 555:
false,

/***/ 556:
false,

/***/ 557:
false,

/***/ 558:
false,

/***/ 559:
false,

/***/ 560:
false,

/***/ 561:
false,

/***/ 562:
false,

/***/ 563:
false,

/***/ 564:
false,

/***/ 565:
false,

/***/ 566:
false,

/***/ 567:
false,

/***/ 568:
false,

/***/ 569:
false,

/***/ 570:
false,

/***/ 571:
false,

/***/ 572:
false,

/***/ 573:
false,

/***/ 574:
false,

/***/ 575:
false,

/***/ 576:
false,

/***/ 577:
false,

/***/ 578:
false,

/***/ 579:
false,

/***/ 580:
false,

/***/ 581:
false,

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  query {\n    allPosts(orderBy: ID_ASC) {\n      nodes {\n        title\n        created\n        content\n        url\n      }\n    }\n  }\n'], ['\n  query {\n    allPosts(orderBy: ID_ASC) {\n      nodes {\n        title\n        created\n        content\n        url\n      }\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  @media (max-width: 700px) {\n    display: block;\n    padding: 0 1em;\n  }\n'], ['\n  display: block;\n  @media (max-width: 700px) {\n    display: block;\n    padding: 0 1em;\n  }\n']);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(63);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(608);

var _styledComponents = __webpack_require__(409);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Footer = __webpack_require__(684);

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = __webpack_require__(685);

var _Header2 = _interopRequireDefault(_Header);

var _apollo = __webpack_require__(686);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/treckart/Code/tylerreckart.com/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/treckart/Code/tylerreckart.com/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(59)
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

/***/ 655:
false,

/***/ 656:
false,

/***/ 681:
false,

/***/ 682:
false,

/***/ 683:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xN2QwZWRjOTUzNTY0NGQyYjI5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/Mjc2ZjAzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIGltcG9ydCBGZWVkIGZyb20gJy4uL2NvbXBvbmVudHMvRmVlZCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi9hcG9sbG8nO1xuXG5jb25zdCBRVUVSWSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIGFsbFBvc3RzKG9yZGVyQnk6IElEX0FTQykge1xuICAgICAgbm9kZXMge1xuICAgICAgICB0aXRsZVxuICAgICAgICBjcmVhdGVkXG4gICAgICAgIGNvbnRlbnRcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBSZWN0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAgMWVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShwcm9wcyA9PiB7XG4gIGxldCBwb3N0cyA9IFtdO1xuICBpZiAocHJvcHMuZGF0YSAmJiBwcm9wcy5kYXRhLmFsbFBvc3RzKSB7XG4gICAgcG9zdHMgPSBwcm9wcy5kYXRhLmFsbFBvc3RzLm5vZGVzO1xuICB9XG5cbiAgLy8gY29uc3Qgbm9kZSA9IChcbiAgLy8gICA8UmVjdD5cbiAgLy8gICAgIDxGZWVkIHsuLi5wcm9wc30gcG9zdHM9e3Bvc3RzfSAvPlxuICAvLyAgIDwvUmVjdD5cbiAgLy8gKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWN0PlxuICAgICAgPEhlYWRlciB7Li4ucHJvcHN9IC8+XG4gICAgICB7Lyoge3Bvc3RzLmxlbmd0aCA+IDAgPyBub2RlIDogbnVsbH0gKi99XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9SZWN0PlxuICApOyAgXG59KTtcblxuLy8gSG9tZS5kZWZhdWx0UHJvcHMgPSB7XG4vLyAgIHBvc3RzOiBbXSxcbi8vIH07XG5cbi8vIEhvbWUucHJvcFR5cGVzID0ge1xuLy8gICBwb3N0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbi8vICAgICBpZDogUHJvcFR5cGVzLm51bWJlcmQsXG4vLyAgICAgY3JlYXRlZDogUHJvcFR5cGVzLm51bWJlcixcbi8vICAgICBwdWJsaWM6IFByb3BUeXBlcy5ib29sLFxuLy8gICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuLy8gICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4vLyAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nXG4vLyAgIH0pKSxcbi8vIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFKQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBWUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBYkE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=