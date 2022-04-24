import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import "./AdminSide.css"
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap'; 
import { render } from '@testing-library/react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Router, browserHistory } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


function AdminSide() {

  const history = useHistory();

  const redirectView = () => {
    history.push('/aview');
  }
    //filter
    const [searchTerm, setSearchTerm] = useState('');
    //hooks
    const [opensourceProjects, setOpensourceProjects] = useState([]);

    console.log(opensourceProjects);
  
    useEffect(()=>{
      fetch("http://localhost:8080/license", {method:"GET"})
      .then(res=>res.json())
      .then(res=>{setOpensourceProjects(res);})
    },[])


return(
  <><div style={{}}>
    <div style ={{paddingLeft: 600, fontSize: 50}}>
    Open Source Tracking System
    </div>
  </div>

      <input type = "text" placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}}/>


  <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Project Name</th>
          <th>Licensing</th>
          <th>Version</th>
          <th>Status</th>
          <th>Date Checked</th>
          <th>Project URL</th>
          <th>View Request</th>
        </tr>
      </thead>
      <tbody>
      {opensourceProjects.filter((val) =>{
        if(searchTerm == ""){
          return val
        }
        if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
        if(val.projectName.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
        if(val.status.toLowerCase().includes(searchTerm.toLowerCase()))
        return val
      })
      .map( p =>
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.date}</td>
              <td>{p.projectName}</td>
              <td>{p.license}</td>
              <td>{p.version}</td>
              <td>{p.status}</td>
              <td>{p.dateChecked}</td>
              <td>{p.url}</td>
              <td><Link to={'/aview/'+p.id} ><Button  variant="secondary">View Request</Button></Link></td>
            </tr>  
        )}
      </tbody>
    </Table>
    <div style ={{paddingLeft: 1850, paddingTop: 610}}>
    <Link to = '/home'>Logout?</Link>
    </div>
  </div>
    </>
  );
}


export default AdminSide;