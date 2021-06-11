import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/header/header.component";

import './App.css';

function App() {
    return (
        <div>
            <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUp}/>
                </Switch>
        </div>
    );
}

export default App;
