import styled from 'styled-components'; //Para Fazer CSS com JS 

const color = '#3b86ff';

export const Card = styled.article `
    font-family: 'Open Sans', sans-serif;
    text-align: center;    
    color: #fff;     
    background-color: ${color};
    padding-top: 58px;
    padding-bottom: 40px;
`;

export const Name = styled.h1`
    font-size: 28px;
    text-transform: uppercase;
    margin: 0;

`;

export const Price = styled.h2`

`;

export const Description = styled.p` 

`;

export const Button = styled.a `
    display: inline-block;
    width: 120px;
    height: 35px;
    line-height: 35px;
    background-color: #fff;
    color: ${color};
    border-radius: 4px;
    text-transform: uppercase;
`;

