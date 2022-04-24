import React from 'react';
import styled from 'styled-components';
import head from '../img/commerce_bank.jpg';

console.log(head);
const HeaderList = styled.div`
    .header-img{
        height: 35vh;
        width: 100%;
    }
`;


const LoginHeader = () => {
    return(
        <HeaderList>
            <img className='header-img' src={head}></img>
        </HeaderList>
    );
};

export default LoginHeader;