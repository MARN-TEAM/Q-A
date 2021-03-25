import React from 'react';
import axios from 'axios'

import SearchBar from './components/SearchBar.jsx';
import Buttons from './components/Buttons.jsx'
import QuA from './components/QuA.jsx';
import Photo from './components/Photo.jsx';
import {token} from '../config.js'

class App extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               data: []
          }
          this.fetchData = this.fetchData.bind(this);
     }
    
     
     fetchData() {
          axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=11501', {
               headers: {
               Authorization: token
               }
          })
          .then((res) => {
               this.setState({
                    data: res.data
               })
               console.log("this is my data ==> ", this.state.data);
          })
     }

     componentDidMount() {
          this.fetchData()
     }

     render() {
          return (
               <div>
                    <SearchBar data={this.state.data}/>
                    <QuA data={this.state.data}/>
                    <Photo data={this.state.data}/>                        
                    <Buttons data={this.state.data}/>
               </div>
          )
     }
}
export default App;
    

    
     
    


