import React from "react";
import Card from './styles'

import Name from '../../objects/Name';
import Price from '../../objects/Price';
import Description from '../../objects/Description';

import ButtonCollab from '../ButtonCollab/';

const CardCollab = (props) => (
     <Card>
         <Name>{props.name}</Name>
        <Price>
             <small>$</small>
             {props.price}
        </Price>
        <Description>{props.description}</Description>
        <ButtonCollab primary>Buy</ButtonCollab>
     </Card>
);

export default CardCollab;