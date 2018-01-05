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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJTdHlsZXMiLCJjcmVhdGUiLCJjb250YWluZXIiLCJjb2xvciIsImJvcmRlclRvcCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJtYXJnaW4iLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJGb290ZXIiLCJoeXBlcmxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sK0JBQVMsQUFBVzs7V0FDYixBQUNGLEFBQ1A7ZUFGUyxBQUVFLEFBQ1g7YUFIUyxBQUdBLEFBQ1Q7b0JBSlMsQUFJTyxBQUNoQjtjQUxTLEFBS0MsQUFDVjtnQkFOUyxBQU1HLEFBQ1o7Z0JBUFMsQUFPRyxBQUNaO1lBUlMsQUFRRCxBQUNSO1dBVFMsQUFTRixBQUNQO2tCQVZTLEFBVUssQUFDZDtnQkFYUyxBQVdHLEFBQ1o7O2VBQTZCLEFBQ2xCLEFBQ1Q7Y0FmTixBQUFlLEFBQWtCLEFBQ3BCLEFBWW9CLEFBRW5CO0FBRm1CLEFBQzNCO0FBYk8sQUFDVDtBQUY2QixBQUMvQixDQURhOztBQW9CZixJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQUE7U0FDYixnQkFBQSxjQUFBLFNBQUssV0FBVyxvQkFBSSxPQUFwQixBQUFnQixBQUFXLEFBQ3pCLDhCQUFBLGNBQUEsVUFBTSxXQUFXLG9CQUFJLE9BQXJCLEFBQWlCLEFBQVcsY0FGakIsQUFDYixBQUNFO0FBRko7O2tCQU1lLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyZWNrYXJ0L0NvZGUvdHlsZXJyZWNrYXJ0LmNvbSJ9