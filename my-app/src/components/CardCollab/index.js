import React from "react";
import Card from './styles'

import Name from '../../objects/Name';
import Price from '../../objects/Price';
import Description from '../../objects/Description';

import ButtonCollab from '../ButtonCollab/';

const CardCollab = () => (
     <Card>
         <Name>Curso SAM</Name>
        <Price>Free</Price>
        <Description>Curso de fazer memens avançados sa SAM.</Description>
        <ButtonCollab primary>Buy</ButtonCollab>
     </Card>
);

export default CardCollab;