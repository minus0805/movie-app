//exact을 사용하지 않으면 path에 포함된 컴포넌트를 모두 가져옴
//Navigation안의 Link to를 사용하려면 router안에 있어야함

import React from 'react';
import { HashRouter, Route } from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App(){
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={Detail} />
        </HashRouter>
    );
}

export default App;
