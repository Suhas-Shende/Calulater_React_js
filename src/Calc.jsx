import React from "react";
function add(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}
function sub(a, b) {
  return a - b;
}
function div(a, b) {
  let value = a / b;
  return value.toFixed(2);
}
export { add, sub, div, multi };
