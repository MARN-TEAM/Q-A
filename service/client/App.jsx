import React from 'react';
import axios from 'axios'

import SearchBar from './components/SearchBar.jsx';
import QuA from './components/QuA.jsx';
import Photo from './components/Photo.jsx';

import {token} from '../config.js'

class App extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               data: [],
               filtredData:[],
               id: "11501"
          }
          this.fetchData = this.fetchData.bind(this);
          this.SearchQa = this.SearchQa.bind(this);
     }
    
     
     fetchData() {
          axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=' + this.state.id , {
               headers: {
               Authorization: token
               }
          })
          .then((res) => {
               this.setState({
                    data: res.data
               })
               this.setState({
                    filtredData: res.data
               })
               console.log("this is my data ==> ", this.state.data);
          })
     }
     SearchQa(word) {
          console.log(word)
          var Mydata = this.state.data
          var storage = {results:[]}
          if (word.length > 2) {
               for (var i = 0; i < Mydata.results.length; i++) {
                    if (Mydata.results[i].question_body.toLowerCase().includes(word.toLowerCase())) {
                         storage.results.push(Mydata.results[i])
                    }
               }
               this.setState({ filtredData: storage })
          } else {
               this.setState({ filtredData: this.state.data })
          }
          
     }
     componentDidMount() {
          this.fetchData()
     }

     render() {
          return (
               <div>
                    <SearchBar SearchQa={this.SearchQa}/>
                    <QuA data={this.state.filtredData} />
                    
               </div>
          )
     }
}
export default App;
    

    
     
    


