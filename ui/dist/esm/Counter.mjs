import { useState } from 'react';
import { jsxs } from 'react/jsx-runtime';

function Counter() {
  const [count, setCount] = useState(0);
  return /*#__PURE__*/jsxs("button", {
    onClick: () => setCount(count + 1),
    children: ["Clicked ", count, " times"]
  });
}

export { Counter };
