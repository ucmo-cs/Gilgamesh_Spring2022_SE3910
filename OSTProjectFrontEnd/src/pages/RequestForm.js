
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory , useParams} from 'react-router-dom';

const RequestForm = () => {
  const history = useHistory();
  const {id} = useParams();

  const redirect = () => {
    history.push('/cside');

  }


  useEffect(()=>{
    fetch("http://localhost:8080/license/" + id, {method:"GET"})
    .then(res=>res.json())
    .then(res=>{setPrj(res);})
  },[])


    const [prj, setPrj] = useState(
        {
            name:'',
            date:'',
            projectName:'',
            license:'',
            version:'',
            status:'',
            dateChecked:'',
            url:'',
            description:'',
            reason:''

        }
    )

    const changeValue=(e)=>{

        setPrj({
           ...prj, [e.target.name]:e.target.value    

        });

    }
    
    const requestProject=()=>{


        fetch("http://localhost:8080/create", {
         method:'POST',
         headers:{
             "Content-Type":"application/json"
         },
         body:JSON.stringify(prj)
        })
        .then(res=>{

        })
        .then(res=>{
            
            history.push('/cside');
        });
 
     }
     
  

    return (
        <div>
            <h4 style={{textAlign: 'center',position: 'relative',padding: 30}}>Create Request</h4>
                <Form style={ {textAlign: 'center', position: 'relative',width: 1900, padding: 60}}>
                <   Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" onChange={changeValue} name="name"/>
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="text" onChange={changeValue} name="date"/>
                    </Form.Group>
                    <Form.Group> 
                    <Form.Label>License of Program:</Form.Label>
                        <Form.Control type="text"  onChange={changeValue} name="license" />
                        <Form.Label>Name of Program:</Form.Label>
                        <Form.Control type="text" onChange={changeValue} name="projectName" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description of Program:</Form.Label>
                        <Form.Control type="text" as="textarea" row={3} onChange={changeValue} name="description"/>
                        <Form.Label>Reason for Program:</Form.Label>
                        <Form.Control type="text" onChange={changeValue} name="reason" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Version of Program:</Form.Label>
                        <Form.Control type="text"  onChange={changeValue} name="version" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Project URL:</Form.Label>
                        <Form.Control type="text" onChange={changeValue} name="url"/>
                    </Form.Group>
                    <Form.Group>
                        <Button onClick={redirect} style={{margin: 30}} variant="outline-secondary" >Cancel</Button>
                        <Button onClick={()=>requestProject()} style={{margin: 30}} variant="outline-secondary"> Submit Request </Button>
                    </Form.Group>
                </Form>
        </div>
    );
};


export default RequestForm;
