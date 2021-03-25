import React, { Component } from 'react';

import QAPart from './QAPart.jsx'
import Photo from './Photo.jsx';

export class QuA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantityQa: 2,
            addqu: 'hidden',
            question: '',
            name: "",
            email: "",
        }
        this.addQ = this.addQ.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    addQ() {
        this.setState({addqu:'shown'})
        
    }
    render() {
        console.log("props", this.props.data.results);
      
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
                    <div className="btn-add" onClick={()=>{}}>
                    <button className="AddQuestions" onClick={this.addQ}>
                        ADD A QUESTION
                        <i id="adding" className="plus icon"></i>
                        </button>
                        {this.state.addqu === 'shown' &&
                            <div>
                            <h3>Ask Your Question</h3>
                            <input type="text" name="question" onChange={this.handleChange}></input>
                            <br/>
                                <input type="text" name="name" placeholder="Example: jackson11!" onChange={this.handleChange}></input>
                            <h3>For privacy reasons, do not use your full name or email address</h3>
                                <input type="email" name="email" placeholder="Why did you like the product or not?" onChange={this.handleChange}></input>
                            <h3>For authentication reasons, you will not be emailed</h3>
                            <button onClick={() => { this.handleClick }}>Submit question</button>
                            </div>
                        }
                </div>
            </div>
             </div>
        )
    }
}

export default QuA;
