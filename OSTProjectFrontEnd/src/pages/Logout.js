import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
 



const Logout = () => {



    const [navigate, setNavigate] = useState();
    
    const logout=()=>{

        sessionStorage.clear();
        sessionStorage.removeItem("token");
        setNavigate({navigate:true})
        window.location.href="/home"
    }


    if(navigate){
        return <Redirect to ="/home" push ={true}></Redirect>;
    }


    return (
      <Button onClick={logout}>Log out</Button>
    );
};

export default Logout;