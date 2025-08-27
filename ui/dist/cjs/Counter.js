'use strict';

var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function Counter() {
  const [count, setCount] = react.useState(0);
  return /*#__PURE__*/jsxRuntime.jsxs("button", {
    onClick: () => setCount(count + 1),
    children: ["Clicked ", count, " times"]
  });
}

exports.Counter = Counter;
