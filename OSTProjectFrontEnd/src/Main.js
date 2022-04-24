import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logout from './pages/Logout';



function getAdmin(){

    const tokenString = sessionStorage.getItem('token');
    const userPriv = JSON.parse(tokenString);

   
    console.log("admin : "+ userPriv.admin);
    console.log("userPriv : " + userPriv.admin);


    return userPriv.admin
}


function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    console.log("tokenString :"+ tokenString);

    return userToken
}


const Main = () => {


    const token = getToken();

    var userPriv = 0;

    if(token!=null){
        userPriv = getAdmin();
        console.log("main "+ userPriv)
    }


    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);



    return (
       
     
            <div className='logout'>
            <Logout></Logout> 
            </div>

    );
};

export default Main;