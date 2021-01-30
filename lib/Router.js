import {BrowserRouter, Switch, Route} from "react-router-dom";

class Router {

    constructor(render, add) {
        this.components = [];
        this.count = 0;
        this.render = render.bind(this);
        this.add = add.bind(this);
    }

    render = () => {
        return <BrowserRouter>
            <Switch>
                {
                    this.components.map(v => {
                        return <Route {...v} key={v.id}/>
                    })
                }
            </Switch>
        </BrowserRouter>
    }

    add = (path, name, component, exact) => {
        let validator = true;
        Route.components.map(v => {
            v.name === name ? v.path === path ? validator = false : true : true;
        })
        const _component = {
            id: this.count++,
            path,
            name,
            component,
            exact
        }

        validator ? Route.components.push(_component) : console.log(`path or name error`)
    }
}

export default Router;
