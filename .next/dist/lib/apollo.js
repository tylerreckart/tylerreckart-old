'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloClient = require('apollo-client');

var _apolloClient2 = _interopRequireDefault(_apolloClient);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = new _apolloClient2.default({
  networkInterface: (0, _apolloClient.createNetworkInterface)({
    uri: 'http://localhost:8080/graphql',
    fetch: _nodeFetch2.default,
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hcG9sbG8uanMiXSwibmFtZXMiOlsibmV0d29ya0ludGVyZmFjZSIsInVyaSIsImZldGNoIiwib3B0cyIsImNyZWRlbnRpYWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O1NBRzJDLEFBQ2xDLEFBQ0w7dUJBRnVDLEFBR3ZDOzttQkFBTSxBQUNTLGNBTEosQUFBaUIsQUFDWixBQUF1QixBQUdqQyxBQUN3QixBO0FBRHhCLEFBQ0o7QUFKcUMsQUFDdkMsR0FEZ0I7QUFEWSxBQUM5QixDQURhIiwiZmlsZSI6ImFwb2xsby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJlY2thcnQvQ29kZS90eWxlcnJlY2thcnQuY29tIn0=