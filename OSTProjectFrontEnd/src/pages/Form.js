import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const FormGroup = styled.div`
    .main_group{
        width: 20vw;
        margin-left: 40%;
    }
    
    .submit_btn{
        background-color: #006F51;
        width: 20vw;
    }
    .login_info{
        display: flex;
        font-size: 10px;
        justify-content: space-between;
    }
    a{
        text-decoration: none;
    }
`

function FormPage({setToken}){
    const history = useHistory();

    //signin


    const[user, setUser] = useState({
        email:'',
        password:''

    });
   


    const changeValue=(e)=>{
         

        setUser({
           ...user, [e.target.name]:e.target.value

        });
        console.log(e.target.name);  
        console.log(e.target.value);  

    }


    function getAdmin(){

        const tokenString = sessionStorage.getItem('token');
        const userPriv = JSON.parse(tokenString);
    
       
        console.log("admin : "+ userPriv.admin);
        console.log("userPriv : " + userPriv.admin);
    
        return userPriv.admin
    }


    const handleSubmit=(e) =>{
        console.log(e);
        e.preventDefault();

        fetch("http://localhost:8080/jpa/signin", {method:"POST",
        headers:{
            'Content-Type' : 'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify(user)    
    }).then((res)=>{
        if(res.status ===200){
            return res.json();
        }else{
            return null;
        }
    }).then((res)=>{
        if(res!==null){
        setToken(res);
        console.log(" getAdmin() "+  getAdmin());

        if( getAdmin()===1){
            window.location.reload(history.push("/aside"));
        }else{
            window.location.reload(history.push("/cside"));
        }
        //window.location.reload(history.push("/cside"));
        }
    });


    }


    return(
        <FormGroup>
            <Form onSubmit = {handleSubmit}>
            <Form.Group className='main_group'>
                <Form.Group className='mb-3 email_group'>
                    <Form.Label className='login_label'>Email</Form.Label>
                    <Form.Control className='' type='email'   onChange={changeValue} name="email"/>
                </Form.Group>
                <Form.Group className='mb-3 password_group'>
                    <Form.Label className='login_label'>Password</Form.Label>
                    <Form.Control className='password' type='password'   onChange={changeValue} name="password"/>
                </Form.Group>
                <Form.Group className='login_info'>
                <div style ={{paddingLeft: 340}}>
                    <Link to = '/asignup'>Forgot Password?</Link>
                    </div>
                </Form.Group>
                <Form.Group className='mb-3 btn_group'>
                    <Button className='submit_btn' type="submit" >Sign In</Button>
                </Form.Group>
            </Form.Group>
            </Form>
        </FormGroup>
    );
};

export default FormPage;