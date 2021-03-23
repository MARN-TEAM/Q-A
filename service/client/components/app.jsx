import React from 'react';
import axios from 'axios'

import Question from './Question.jsx'


class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
      axios.get('/')  
    }

    render(){
        return(
            <div>
                <h1>Test Hello</h1>
                <Question />
            </div>
        )
    }
}

export default App;