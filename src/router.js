import React  from "react";
import { Route, BrowserRouter } from "react-router-dom";
import MainPage from "./mainpage";


function Routes (){
    return(
        
        <BrowserRouter>

    <Route exact render={props => <MainPage {...props} title="Java" channel="Canal Java"  /> }path="/"/>
    <Route  render={props => <MainPage {...props} title="Python" channel="Canal Python"  /> }path="/python"/>
    <Route render={props => <MainPage {...props} title="C" channel="Canal C"  /> } path="/c"/>
    <Route render={props => <MainPage {...props} title="Js" channel="Canal Js"  /> } path="/js"/>
    <Route render={props => <MainPage {...props} title="Ruby" channel="Canal Ruby"  />} path="/ruby"/>
    <Route render={props => <MainPage {...props} title="HTML" channel="Canal Html" />} path="/html"/>
    <Route render={props => <MainPage {...props} title="PHP" channel="Canal PHP"/>} path="/php"/>
    <Route render={props => <MainPage {...props} title="SQL" channel="Canal SQL" />} path="/sql"/>
    <Route render={props => <MainPage {...props} title="C#" channel="Canal C#"  /> } path="/c#"/>
    <Route render={props => <MainPage {...props} title="C++" channel="Canal C++"  />} path="/c++"/>
    <Route render={props => <MainPage {...props} title="Lua" channel="Canal Lua" /> } path="/lua"/>
    <Route render={props => <MainPage {...props} title="Swift" channel="Canal Swift" /> } path="/swift"/>
    <Route render={props => <MainPage {...props} title="Kotlin" channel="Canal Kotlin" />} path="/kotlin"/>

        </BrowserRouter>
    )
};
 export default Routes;