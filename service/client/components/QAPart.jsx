import React from 'react';
import moment from 'moment';


class QAPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yes: this.props.data.question_helpfulness,
            addq:'hidden'
        }
        this.addQustion=this.addQustion.bind(this)
    }
    addQustion() {
        this.setState({ addq:'shown'})
    }
    render() {
    const {data} = this.props
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
                                    <button type="button" className="btn btn-link report-button-one-Question" >Add Answer</button>
                        </div>
                    </div>
                    
                </div>
                <div className='row'>
                                    <div className='col-8'>
                                      
                        <h3>A:</h3>
                            <h6 className="ansewer">{data.answers[Object.keys(data.answers)[0]].body }</h6>
                                <div className='col' className='one-Question-Helpful'>
                                by {data.answers[Object.keys(data.answers)[0]].answerer_name},{moment(data.answers[Object.keys(data.answers)[0]].date).format('LL')}  <div className="Vertical-Line"></div>  Helpful?
                                    <button type="button" className="btn btn-link Yes-button-one-Question">
                                    Yes
                                        <p className='Count-Helpful-Yes'>({data.answers[Object.keys(data.answers)[0]].helpfulness})</p>
                                    </button>
                                    <div className="Vertical-Line">
                                    </div>
                                    <button type="button" className="btn btn-link report-button-one-Question">Report</button>
                        </div>
                                            </div>
                </div>
                
               </div>
)}
}


export default QAPart
