"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = void 0;
var Routes_1 = __importDefault(require("./Routes"));
var react_1 = require("react");
var RouteContext = react_1.createContext(Routes_1.default);
var useRouter = function () {
    return react_1.useContext(RouteContext);
};
exports.useRouter = useRouter;
exports.default = Routes_1.default;
//# sourceMappingURL=index.js.map