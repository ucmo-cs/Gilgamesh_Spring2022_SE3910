
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import AdminSide from './pages/AdminSide';
import SignUp from './pages/SignUp';
import AdminView from './pages/AdminView';
import ClientSide from './pages/ClientSide';
import ClientView from './pages/ClientView';

import RequestCreation from './pages/RequestCreation';
import { SketchPicker } from 'react-color';
import React from "react";
import LoginHeader from './pages/LoginHeader';
import Title from './pages/Title';
import FormPage from './pages/Form';



// function setAdmin(admin){
//     sessionStorage.setItem('token',JSON.stringify(admin));
// }


function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    console.log("tokenString :"+ tokenString);

    return userToken
}

function setToken(userToken){

    console.log("signin test")
    console.log(userToken)
    sessionStorage.setItem('token',JSON.stringify(userToken));

}


function getAdmin(){

    const tokenString = sessionStorage.getItem('token');
    const userPriv = JSON.parse(tokenString);

   
    console.log("admin : "+ userPriv.admin);
    console.log("userPriv : " + userPriv.admin);

    return userPriv.admin
}


function App() {

    const token = getToken();

    var userPriv = 0;

    if(token!=null){
        userPriv = getAdmin();
        console.log("userPriv111111 "+ userPriv)
    }

    if(!token){

    return (
        
        <><div>
            <Header />
            <LoginHeader></LoginHeader>
            <Title></Title>
            <FormPage setToken={setToken}></FormPage>
            <Footer />
        </div><div>
                <Route exact path='/signup' component={withRouter(SignUp)}></Route> 
            </div></>
        );
    }

  
    if(userPriv===1){

        return (
        
            <div>  
                <Header />
                <Switch>
                    <Route exact path='/home' component={withRouter(Home)}></Route>
                    <Route exact path='/aside' component={withRouter(AdminSide)}></Route>
                    <Route exact path='/cside' component={withRouter(ClientSide)}></Route>
                    <Route exact path='/rcreate' component={withRouter(RequestCreation)}></Route>
                    <Route exact path='/cview' component={withRouter(ClientView)}></Route>
                    <Route exact path='/aview/:id' component={withRouter(AdminView)}></Route>
                    <Route exact path='/signup' component={withRouter(SignUp)}></Route>
                </Switch>
                <Footer/>
                </div>
        );

    }

    return (
        
        <div>  
            <Header />
            <Switch>
                <Route exact path='/home' component={withRouter(Home)}></Route>
                <Route exact path='/cside' component={withRouter(ClientSide)}></Route>
                <Route exact path='/rcreate' component={withRouter(RequestCreation)}></Route>
                <Route exact path='/cview/:id' component={withRouter(ClientView)}></Route>
                <Route exact path='/signup' component={withRouter(SignUp)}></Route>
            </Switch>
            <Footer/>
            </div>
        


    );
}
// const body = document.body;
// body.style.background = "lightgreen";

export default App;