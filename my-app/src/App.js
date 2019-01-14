import React from 'react';

import { Card, Name, Price, Description, Button } from './styles'

//const texto = 'Hello World'
//{texto} indica JavaScript em um JSX
//JSX
const App = () => (
  <Card>
    <Name>Curso SAM</Name>
    <Price>Free</Price>
    <Description>Curso de fazer memens avançados sa SAM.</Description>
    <Button primary>Buy</Button>
  </Card>
);

export default App;