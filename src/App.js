import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from "./pages/homepage/homepage.component";


const HatsPage = () => (
    <div>
        <h1>Hats page</h1>
    </div>
);

function App() {
  return (
    <div>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop/hats' component={HatsPage}/>

    </div>
  );
}

export default App;
