"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = __importDefault(require("./Routes"));
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Header = function () {
    return (react_1.default.createElement("div", { className: 'router-header' }, Routes_1.default.Components.map(function (v) {
        return (react_1.default.createElement(react_router_dom_1.Link, { className: 'router-header-button', to: v.path }, v.name));
    })));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map