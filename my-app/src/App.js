import React, { Component, Fragment } from 'react';

import CardCollab from './components/CardCollab';

//const texto = 'Hello World'
//{texto} indica JavaScript em um JSX
//JSX 
//Stateful
class App extends Component {   
  /*constructor(props) {
    super(props);
    this.state = {};
  } Ou */
  state = {
    courses: [
      {
        name: "Curso React",
        price: 180,
        description: "Curso básico de React utilizando styled-components ao vivo"
      },
      {
        name: "Curso VueJs",
        price:230,
        description:"Curso do VueJs",
      },
      {       
        price:100,
        description:"Curso básico de Ember",
      }
    ]
  };
  render(){
    return (    
      <Fragment>   
        {this.state.courses.map(({name = "indisponivel" ,price, description}) => {
            //destructing
            //const {name ,price, description} = course;            
            return(
              <CardCollab
              name={name}
              price={price}
              description={description}
              />     
            );
        })}
        
      </Fragment> 
      )
  }
}

export default App;