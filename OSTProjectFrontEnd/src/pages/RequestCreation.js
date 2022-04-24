import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RequestForm from './RequestForm';


const RequestCreation = () => {
    return (
        <div>
            <RequestForm/>
        </div>
    );
};
export default RequestCreation;