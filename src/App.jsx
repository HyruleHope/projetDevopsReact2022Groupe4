import React from "react";
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './NotFoundPage.jsx';
class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
        )
    }
}
   
export default App;