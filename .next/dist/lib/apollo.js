'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeFetch = require('node-fetch');

var _nextApollo = require('next-apollo');

var _apolloLinkHttp = require('apollo-link-http');

var config = {
  link: new _apolloLinkHttp.HttpLink({
    uri: 'http://localhost:8080/graphql',
    fetch: _nodeFetch.fetch,
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })
};

exports.default = (0, _nextApollo.withData)(config);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hcG9sbG8uanMiXSwibmFtZXMiOlsiY29uZmlnIiwibGluayIsInVyaSIsImZldGNoIiwib3B0cyIsImNyZWRlbnRpYWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNOztTQUNlLEFBQ1osQUFDTDtzQkFGaUIsQUFHakI7O21CQUFNLEFBQ1MsY0FMbkIsQUFBZSxBQUNQLEFBQWEsQUFHWCxBQUN3QjtBQUR4QixBQUNKO0FBSmUsQUFDakIsR0FESTtBQURPLEFBQ2I7O2tCQVNhLDBCQUFBLEFBQVMsQSIsImZpbGUiOiJhcG9sbG8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyZWNrYXJ0L0NvZGUvdHlsZXJyZWNrYXJ0LmNvbSJ9