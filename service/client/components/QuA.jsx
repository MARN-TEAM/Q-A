import React, { Component } from 'react';

import QAPart from './QAPart.jsx'
import Photo from './Photo.jsx';

export class QuA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantityQa:2
        }
        this.addQ = this.addQ.bind(this);

    }

    addQ() {
        
    }
    render() {
        console.log("props", this.props.data.results);
        const add =
            <div>
                <input type="text" name="body"></input>
                <input type="text" name="name"></input>
                <input type="text" name="email"></input>
                <input type="text" name="photos"></input>
                <button>Add </button>
            </div>
        return (
            <div className='container'>
                
                {this.props.data.results && this.props.data.results.map((element, index) => {
                    return (
                        
         ((index < this.state.quantityQa) ? <QAPart key={index} data={element} />   : '')
                    // ((element.answers[Object.keys(element.answers)[0]].photos.length > 0) ?<Photo data={element.answers[Object.keys(element.answers)[0]].photos} /> : '')           
     )                  
 }
    )}             
                <div>
                <h5 style={{marginTop:"25px"}}>LOAD MORE ANSWERS</h5>
                <button type="button-add" className="MoreAnswerdQuestions" onClick={()=>this.setState({quantityQa:this.state.quantityQa+2})}>MORE ANSWERED QUESTIONS</button>
                <div className="btn-add" onClick={this.addQ}>
                    <button className="AddQuestions">
                        ADD A QUESTION
                        <i id="adding" className="plus icon"></i>
                    </button>
                </div>
            </div>
             </div>
        )
    }
}

export default QuA;
