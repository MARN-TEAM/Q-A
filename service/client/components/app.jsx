import React from 'react';
import axios from 'axios'

import SearchBar from './SearchBar.jsx';
import Buttons from './Buttons.jsx'
import QA from './QA.jsx';
import Photo from './Photo.jsx';

class App extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               data: []
          }
          this.fetchData = this.fetchData.bind(this);
     }
     
     fetchData() {
          axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions')
               .then((res) => {
                    this.setstate({ data: res.data })
                    console.log(res);
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
                    <QA data={this.state.data}/>
                    <Photo data={this.state.data}/>                        
                    <Buttons data={this.state.data}/>
               </div>
          )
     }
}
export default App;
    

    
     
    


