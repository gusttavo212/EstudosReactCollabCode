import React from 'react';

import CardCollab from './components/CardCollab';

//const texto = 'Hello World'
//{texto} indica JavaScript em um JSX
//JSX
const App = () => (
  <CardCollab 
  name="Curso React"
   price="35" 
   description="Curso básico de React utilizando styled-components ao vivo" />
);

export default App;