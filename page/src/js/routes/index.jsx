import React from "react";
import {HashRouter,Route,Link} from "react-router-dom";
import {App,UserDetailApp,UserListApp} from "../components/text";
const routers = (
    <HashRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/detail" component={UserDetailApp}/>
            <Route path="/list" component={UserListApp}/>
        </div>
    </HashRouter>
    )
export default routers;

