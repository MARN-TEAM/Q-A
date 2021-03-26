import React from 'react';
import moment from 'moment';


class QAPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yes: this.props.data.question_helpfulness,
            yesA: this.props.data.answers[Object.keys(this.props.data.answers)[0]].helpfulness,
            addq:'hidden',
            addA: 'hidden',
            name: "",
            answer: "",
            email: "",
        }
        this.addAnswer = this.addAnswer.bind(this);
        this.handleChange  = this.handleChange.bind(this);
    }
  
      handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    addAnswer() {
        this.setState({ addA:'shown'})
    }
    render() {
        const { data } = this.props
        console.log('yesA',this.state.yesA);
    return (
    <div >
                <div className='row'>
                    <div className='col-8'>
                                <h3>Q:{data.question_body}</h3>
                    </div>
                       <div className='date-question col-4'>
                         <div className='one-Question-Helpful-answer'>
                                   Helpful?
                                    <button type="button" className="btn btn-link Yes-button-one-Question" onClick={()=>{this.setState({yes: this.state.yes+1})}}>
                                    Yes 
                                        <p className='Count-Helpful-Yes'>({data.question_helpfulness ,this.state.yes})</p>
                                    </button>
                                    <div className="Vertical-Line">
                                    </div>
                                    <button type="button" className="btn btn-link report-button-one-Question" onClick={this.addAnswer}>Add Answer</button>
                        {this.state.addA === 'show' && 
                                    <div>
                            <h3>Add Your Answer</h3>
                            <input type="text" name="answer" onChange={this.handleChange}></input>
                            <br/>
                                <input type="text" name="name" placeholder="Example: jackson11!" onChange={this.handleChange}></input>
                            <h3>For privacy reasons, do not use your full name or email address</h3>
                                <input type="email" name="email" placeholder="Example: jack@email.com" onChange={this.handleChange}></input>
                            <h3>For authentication reasons, you will not be emailed</h3>
                            <button onClick={() => { this.handleClick }}>Submit Answer</button>
                            
                            You must enter the following
                            </div>}
                    </div>
                    </div>
                    
                </div>
                <div className='row'>
                                    <div className='col-8'>      
                        <h3>A:</h3>
                            <h6 className="ansewer">{data.answers[Object.keys(data.answers)[0]].body }</h6>
                                <div className='col' className='one-Question-Helpful'>
                                by {data.answers[Object.keys(data.answers)[0]].answerer_name},{moment(data.answers[Object.keys(data.answers)[0]].date).format('LL')}  <div className="Vertical-Line"></div>  Helpful?
                                    <button className="btn btn-link Yes-button-one-Question" onClick={()=>{this.setState({yesA: this.state.yesA+1})}}>
                                    Yes
                                        <p className='Count-Helpful-Yes'>({data.answers[Object.keys(data.answers)[0]].helpfulness, this.state.yesA})</p>
                                    </button>
                                    <div className="Vertical-Line">
                                    </div>
                        <button className="btn btn-link report-button-one-Question">Report</button>
                        
                        </div>
                                            </div>
                </div>
                
               </div>
)}
}


export default QAPart
