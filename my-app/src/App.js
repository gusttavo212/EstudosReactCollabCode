import React, { Component, Fragment } from 'react';
import api from '../src/services/api'

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
    courses: [],   
  };

  componentDidMount() {//Metodo executado quando o componente é exibido
   this.loadCards();
  }

  loadCards = async () =>{
    const response = await api.get('/cards');
    const courses = {courses: response.data.docs};//Pegas os dados do curso que estão em docs
    this.setState(courses); // Pegando todo o json de courses novamente e atualizando o estado cm ele
  }
  render(){
    return (    
      <Fragment>   
        {this.state.courses.map(course => (
            //destructing           
              <CardCollab
              {...course}
              key={course._id}
              />     
            
        ))};
        
      </Fragment> 
      )
  }
}

export default App;