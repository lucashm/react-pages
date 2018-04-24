import React, { Component } from 'react';
import Header from './components/header/Header';
import { BrowserRouter as Route } from 'react-router-dom';
import Documents from './components/documents/Documents';
import Info from './components/info/Info';



class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>

                <Route exact path="/" component={Documents} />
                <Route path="/info" component={Info} />
            </div>
        );
    }
}

export default Main;
