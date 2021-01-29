/**
 * define of Route class
 * @member {Array} components
 * @param path
 * @param name
 * @param component
 * @param exact
 * @constructor
 */
function Route(path,name,component,exact){
    this.path = path;
    this.name = name;
    this.component = component;
    this.exact = exact;
    this.add(this.path,this.name,this.component,this.exact)
    this.id = Route.prototype.count;
}
Route.prototype.components = []
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