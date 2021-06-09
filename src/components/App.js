import React from 'react';
import {Route, Router, Switch} from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import {StreamShow} from "./streams/StreamShow";
import {Header} from "./header";
import history from "../history";

export const App = () => {
    return (
        <div className="ui container">
            {/*BrowserRouter - actual react Component. Was used before, when we were not required to make our own "history" obj*/}
            <Router history={history}>
                <div>
                    <Header/>
                    {/*
                    react router WON'T show only 1-st matching route. It'll show all of them, 1 by 1
                    In order to show only 1-st match - we need to use <Switch>
                    */}
                    <Switch>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" component={StreamCreate}/>
                        <Route path="/streams/edit/:id" component={StreamEdit}/>
                        <Route path="/streams/delete/:id" component={StreamDelete}/>
                        <Route path="/streams/:id" component={StreamShow}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
