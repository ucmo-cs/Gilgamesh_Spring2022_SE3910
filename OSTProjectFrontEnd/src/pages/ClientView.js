import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from "react-native";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory , useParams} from 'react-router-dom';
 


function  ClientView(){

    const history = useHistory();

    const {id} = useParams();
 
    console.log("projct id  "+ id);

    const redirect = () => {
      history.push('/cside');
    }



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


    const [license, setProject] = useState(
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



    const deleteProject=()=>{


       fetch("http://localhost:8080/license/" + id, {
        method:'DELETE',
       })
       .then(res=>res.text())
       .then(res=>{

        console.log("ok !!!!"+ res); 
           if(res==='ok'){

            history.push('/cside');

           }else{
               alert("fail");
           } 
       });
           

    }


    const updateProject=()=>{


        fetch("http://localhost:8080/license/" + id, {
         method:'PUT',
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
 




    useEffect(()=>{
        fetch("http://localhost:8080/license/" + id, {method:"GET"})
        .then(res=>res.json())
        .then(res=>{setPrj(res);})
      },[])


    return (
        <div>
        <h4 style={{textAlign: 'center',position: 'relative',padding: 30}}>View Request</h4>
            <Form style={ {textAlign: 'center', position: 'relative',width: 1900, padding: 60}}>
            <   Form.Group>
                    <Form.Label>Name of Program:</Form.Label>
                    <Form.Control type="text" value={prj.projectName} onChange={changeValue} name="projectName"/>
                </Form.Group>
                <Form.Group> 
                    <Form.Label>Version of Program:</Form.Label>
                    <Form.Control type="text" value={prj.version} onChange={changeValue} name="version"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Link to Program:</Form.Label>
                    <Form.Control type="text" value={prj.url} onChange={changeValue} name="url"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description of Program:</Form.Label>
                    <Form.Control type="text" as="textarea" row={3} value={prj.description} onChange={changeValue} name="description"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Reason for Program:</Form.Label>
                    <Form.Control type="text" value={prj.reason} onChange={changeValue} name = "reason"/>
                </Form.Group>
                <Form.Group>
                    <Button onClick={()=>updateProject()} style={{margin: 30}} variant="outline-secondary">Update Request</Button>
                    <Button onClick={()=>deleteProject()} style={{margin: 30}} variant="outline-secondary" > Cancel Request </Button>
                </Form.Group>
            </Form>
        </div>



 

    );
};


const styles = StyleSheet.create({
    titleText: {
        position: 'relative',
        fontSize: 20,
        borderWidth: 0,
        borderColor: 'black',


    },
    bodyText: {
        position: 'relative',
        fontSize: 15,
        width: '10%',
        left: '5%',

    },
    webstyle: {
        position: 'relative',
        
    }

})

export default ClientView;