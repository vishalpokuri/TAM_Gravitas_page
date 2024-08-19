import React from 'react';
import styled from 'styled-components';

const TeamCard= styled.div`
color: #59A3FF;
font-weight: bold;
justify-content: center;
align-items: center;
text-align: center;
font-size: 1.7rem;
border-radius: 15px;
padding: 20px;
background-color: #0A0A0A;
flex-direction: column;
width: 10rem;
height: 10rem;
margin: 5px;
box-shadow: 0 0 15px rgba(0, 0, 139, 0.7);
 &:hover {
    background-color: rgba(255, 255, 255, 0.1);
cursor: pointer;
  }
`
;

export {TeamCard};