import styled from 'styled-components';

import {center} from '../../styles/tools'

const Card = styled.article `    
    text-align: center;    
    color: var(--color-zero);
    background-color: var(--color-frist);
    padding-top: 58px;
    padding-bottom: 40px;
    width: 370px;
    ${center};
    margin-bottom: var(--spacing-big);    
   
`;

export default Card;


