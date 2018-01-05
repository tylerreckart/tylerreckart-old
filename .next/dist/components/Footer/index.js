'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Styles = _aphrodite.StyleSheet.create({
  container: {
    color: '74808E',
    borderTop: '4px solid #f7f8f9',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    lineHeight: '2em',
    fontWeight: '300',
    margin: '0 auto',
    width: '650px',
    marginBottom: '2em',
    paddingTop: '1.5em',
    '@media (max-width: 700px)': {
      display: 'block',
      margin: '0 1em 2em 1em'
    }
  }
});

var Footer = function Footer() {
  return _react2.default.createElement('div', { className: (0, _aphrodite.css)(Styles.container) }, _react2.default.createElement('span', { className: (0, _aphrodite.css)(Styles.hyperlink) }, '\xA9 2010-2017 Tyler Reckart. All Rights Reserved'));
};

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0eWxlcyIsImNyZWF0ZSIsImNvbnRhaW5lciIsImNvbG9yIiwiYm9yZGVyVG9wIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsIm1hcmdpbiIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ1RvcCIsIkZvb3RlciIsImh5cGVybGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSwrQkFBUyxBQUFXOztXQUNiLEFBQ0YsQUFDUDtlQUZTLEFBRUUsQUFDWDthQUhTLEFBR0EsQUFDVDtvQkFKUyxBQUlPLEFBQ2hCO2NBTFMsQUFLQyxBQUNWO2dCQU5TLEFBTUcsQUFDWjtnQkFQUyxBQU9HLEFBQ1o7WUFSUyxBQVFELEFBQ1I7V0FUUyxBQVNGLEFBQ1A7a0JBVlMsQUFVSyxBQUNkO2dCQVhTLEFBV0csQUFDWjs7ZUFBNkIsQUFDbEIsQUFDVDtjQWZOLEFBQWUsQUFBa0IsQUFDcEIsQUFZb0IsQUFFbkI7QUFGbUIsQUFDM0I7QUFiTyxBQUNUO0FBRjZCLEFBQy9CLENBRGE7O0FBb0JmLElBQU0sU0FBUyxTQUFULEFBQVMsU0FBQTtTQUNiLGdCQUFBLGNBQUEsU0FBSyxXQUFXLG9CQUFJLE9BQXBCLEFBQWdCLEFBQVcsQUFDekIsOEJBQUEsY0FBQSxVQUFNLFdBQVcsb0JBQUksT0FBckIsQUFBaUIsQUFBVyxjQUZqQixBQUNiLEFBQ0U7QUFGSjs7a0JBTWUsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJlY2thcnQvQ29kZS90eWxlcnJlY2thcnQuY29tIn0=