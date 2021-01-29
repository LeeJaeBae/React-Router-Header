function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = ({
  route
}) => /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Switch, null, route.prototype.components.map(v => {
  return /*#__PURE__*/React.createElement(Route, _extends({}, v, {
    key: v.id
  }));
})));

export default Routes;