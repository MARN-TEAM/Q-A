import React from 'react';
import moment from 'moment';
import { Button, Form, TextArea } from 'semantic-ui-react';
import axios from 'axios';
import { token } from '../../config'
import e from 'cors';


class QAPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yes: this.props.data.question_helpfulness,
            yesA: this.props.data.answers[Object.keys(this.props.data.answers)[0]].helpfulness,
            addq: 'hidden',
            addA: 'hidden',
            name: "",
            answer: "",
            email: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    updateYes(id,e) {

        axios.put('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/' + id + '/helpful', {}, {
            headers: {
                Authorization: token
            }
        })
        e.target.disabled = true;
    }
    updateRepportAnswers(id, e) {

        axios.put('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/answers/' + id + '/report', {}, {
            headers: {
                Authorization: token
            }
        })
        e.target.disabled = true;
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit() {
        axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions', {
            body: this.state.body,
            name: this.state.name,
            email: this.state.email,
            product_id: 11501
        }, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                console.log("res",res);
            })
    }
    render() {
        console.log(this.state.addA)
        const { data } = this.props

        return (
            <div >
                <div className='row'>
                    <div className='col-8-md'>
                        <h3>Q:{data.question_body}</h3>
                    </div>
                    <div className='date-question col-4-md'>
                        <div className='one-Question-Helpful-answer'>
                            Helpful?
                                    <button type="button" className="btn btn-link Yes-button-one-Question" onClick={(e) => { this.updateYes(data.question_id,e); this.setState({ yes: this.state.yes + 1 }) }}>
                                Yes
                                        <p className='Count-Helpful-Yes'>({data.question_helpfulness, this.state.yes})</p>
                            </button>
                            <div className="Vertical-Line">
                                {/* ////////////////////////Add Answer////////////////////////// */}
                                <div className="container">
                                    <button type="button" className="btn btn-link report-button-one-Question" data-toggle="modal" data-target="#myModal">Add Answer</button>
                                    <div className="modal fade" id="myModal" role="dialog">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <Form>
                                                        <div>
                                                            <label forhtml="w3review">Add Your Answer:</label>
                                                            <br />
                                                            <TextArea type="text" name="body" rows={2} onChange={this.handleChange} />
                                                            <br />
                                                            <label forhtml="w3review">For privacy reasons, do not use your full name or email address:</label>
                                                            <br />
                                                            <input type="text" name="name" placeholder="Example: jackson11!" onChange={this.handleChange}></input>
                                                            <br />
                                                            <label forhtml="w3review">For authentication reasons, you will not be emailed:</label>
                                                            <br />
                                                            <input type="email" name="email" placeholder="Why did you like the product or not?" onChange={this.handleChange}></input>
                                                            <br />
                                                            <label forhtml="w3review">You must enter the following:</label>
                                                            <br />
                                                            <Button onClick={() => { this.handleSubmit() }}>Submit Answer</Button>
                                                        </div>
                                                    </Form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-8-md'>
                        <h3>A:</h3>
                        <h6 className="ansewer">{data.answers[Object.keys(data.answers)[0]].body}</h6>
                        <div className='col-md' className='one-Question-Helpful'>
                            by {data.answers[Object.keys(data.answers)[0]].answerer_name},{moment(data.answers[Object.keys(data.answers)[0]].date).format('LL')}  <div className="Vertical-Line"></div>  Helpful?
                                    <button className="btn btn-link Yes-button-one-Question" onClick={() => { this.setState({ yesA: this.state.yesA + 1 }) }}>
                                Yes
                                        <p className='Count-Helpful-Yes'>({data.answers[Object.keys(data.answers)[0]].helpfulness, this.state.yesA})</p>
                            </button>
                            <div className="Vertical-Line">
                            </div>
                            <button className="btn btn-link report-button-one-Question" onClick={(e) => this.updateRepportAnswers(data.answers[Object.keys(data.answers)[0]].id ,e) }>Report</button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default QAPart
