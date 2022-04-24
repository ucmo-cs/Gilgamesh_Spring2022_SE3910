import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';


const TitleSection = styled.div`
    .main_title{
        margin-top: 3em;
    }
    .secondary_title{
        margin-top: 2em;
        color: #006F51;
    }
    a{
        text-decoration: none;
    }
    .signup_link{
        font-size: 12px;
        
    }
    @media(max-width: 856px){
        .main_div{
            display: flex;
            align-items: center;
            justify-content: center;            
        }
    }
`

function Title() {
    const history = useHistory();

    const redirect = () => {
        history.push('/signup')
}
    return(
        
        <TitleSection>
            <div className='main_div'>
            <div style ={{paddingLeft: 310}}>
                <h4 className='main_title'>Sign In</h4>
                </div>
                <div className='secondary_title'>
                <div style ={{paddingLeft: 220}}>
                    <h5>Welcome to Commerce Bank</h5>
                </div>
                <div style ={{paddingLeft: 247}}>
                    <h5>Open Source Tracking</h5>
                </div>
                </div>
                <div className='signup_link'>
                <div style ={{paddingLeft: 260}}>
                    <p>Don't have an account? <Link to = '/signup' >Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </TitleSection>
    );
};

export default Title;