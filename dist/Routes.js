import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = ({
  route
}) => /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Switch, null, route.components.map(v => {
  return /*#__PURE__*/React.createElement(Route, v);
})));

export default Routes;