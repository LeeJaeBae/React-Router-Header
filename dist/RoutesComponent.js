"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesComponent = void 0;
var RoutesComponent = /** @class */ (function () {
    function RoutesComponent(Component, path, name, exact) {
        this.name = name;
        this.path = path;
        this.components = Component;
        this.exact = exact;
    }
    return RoutesComponent;
}());
exports.RoutesComponent = RoutesComponent;
//# sourceMappingURL=RoutesComponent.js.map