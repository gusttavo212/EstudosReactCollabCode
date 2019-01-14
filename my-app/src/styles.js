import styled from 'styled-components'; //Para Fazer CSS com JS 



export const Card = styled.article `
    font-family: 'Open Sans', sans-serif;
    text-align: center;    
    color: var(--color-zero);
    background-color: var(--color-frist);
    padding-top: 58px;
    padding-bottom: 40px;
    width: 370px;
    margin-left: auto;
    margin-right: auto;
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
    background-color: var(--color-zero);
    color: var(--color-frist);
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms linear;
    border: 1px solid var(--color-zero);

    ${props =>
         props.primary //If ternario em JS
/*True*/? ` 
        &:hover {
            background-color: var(--color-zero);
            color: var(--color-zero);
            border: 1px solid var(--color-zero);
        }`
/*False*/: `
            color: #838383;
            background-color: #ccc;`
    };

    /*& Referencia o proprio elemento*/
    
`;

