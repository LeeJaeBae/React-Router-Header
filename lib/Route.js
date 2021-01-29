/**
 * define of Route class
 * @member {Array} components
 * @param path
 * @param name
 * @param component
 * @param exact
 * @constructor
 */
function Route(){
    return false;
};
Route.prototype.components = [];
Route.prototype.count = 0;
Route.prototype.add = function(path, name, component, exact){
    Route.prototype.components.push({
        path:path,
        name:name,
        component:component,
        exact:exact
    })
    Route.prototype.count++;
}

export default Route;