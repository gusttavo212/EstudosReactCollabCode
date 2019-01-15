import styled from 'styled-components'; 

const ButtonCollab = styled.a `    
    display: inline-block;
    width: 120px;
    height: 35px;
    line-height: 35px;
    background-color: var(--color-zero);
    color: var(--color-frist);
    border-radius: var(--radius);
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms linear;
    border: 1px solid var(--color-zero);
    
    ${props =>
         props.primary //If ternario em JS
/*True*/? ` 
        &:hover {
            background-color: var(--color-frist);
            color: var(--color-zero);
            border: 1px solid var(--color-zero);
        }`
/*False*/: `
            color: #838383;
            background-color: #ccc;`
            
    };

    /*& Referencia o proprio elemento*/   
    
`;

export default ButtonCollab;