{
  data: {},
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  request: {}
}

data: is the response that was provided by the server

status: is the HTTP status code from the server response

statusText: is the HTTP status message from the server response

headers: the HTTP headers that the server responded with. All header names are lower cased and can be accessed using the bracket notation.Example: response.headers['content-type']

config: is the config that was provided to axios for the request

request: is the request that generated this response. It is the last ClientRequest instance in node.js (in redirects) and an XMLHttpRequest instance in the browser