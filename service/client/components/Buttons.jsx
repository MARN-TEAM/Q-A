import React, { Component } from 'react'

class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.addQ = this.addQ.bind(this);
    }
    addQ() {
        
    }

    render() {
        const add =
            <div>
                <input type="text" name="body"></input>
                <input type="text" name="name"></input>
                <input type="text" name="email"></input>
                <input type="text" name="photos"></input>
                <button>Add </button>
            </div>
        return (
            <div>
                <h5>LOAD MORE ANSWERS</h5>
                <button type="button-add" className="MoreAnswerdQuestions">MORE ANSWERED QUESTIONS</button>
                <div className="btn-add" onClick={this.addQ}>
                    <button className="AddQuestions">
                        ADD A QUESTION
                        <i id="adding" className="plus icon"></i>
                    </button>
                </div>
            </div>
        )
    }
}
export default Buttons;
