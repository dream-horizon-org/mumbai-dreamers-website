// Polyfill for react/compiler-runtime — allows Sanity Studio (which uses the
// React Compiler) to build alongside a React 18 host app.
// Components lose compiled memoization but work correctly at runtime.
"use strict";

const SENTINEL = Symbol.for("react.memo_cache_sentinel");

exports.c = function c(size) {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) arr[i] = SENTINEL;
  return arr;
};
