import React from 'react';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import "./SignUp.css"

function SignUp() {

        const history = useHistory();
      
        const redirectView = () => {
          history.push('/home');
        }

    return(
<div style ={{paddingTop: 200, paddingLeft: 750, fontSize: 20}}>
<Form>
<div style ={{color: 'darkgreen',paddingBottom: 100, fontSize: 72}}>
<Form.Label>Sign Up Here</Form.Label>
</div>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <div style ={{paddingLeft: 100, fontSize: 50}}>
  <Button onClick={redirectView} variant="primary" type="submit">  
    Submit
  </Button>
  </div>
</Form>
</div>
    );
}
export default SignUp;