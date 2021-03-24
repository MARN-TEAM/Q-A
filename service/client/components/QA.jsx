import React, { Component } from 'react'

export class QA extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                         <h3>Q: Who what which when where why whether how?</h3>
                    </div>
                       <div className='date-question col-4'>
                         <div className='one-Question-Helpful-answer'>
                                   Helpful?
                                    <button type="button" className="btn btn-link Yes-button-one-Question">
                                    Yes
                                        <p className='Count-Helpful-Yes'>(10)</p>
                                    </button>
                                    <div className="Vertical-Line">
                                    </div>
                                    <button type="button" className="btn btn-link report-button-one-Question">Add Answer</button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                    <h3>A:</h3>
                    <h6 className="ansewer">Icing macaroon bear claw jelly beans chocolate cake. Cokie oat cake
                chocolate halvah jelly cake cotton candy soufflé topping. Jujubes topping cake gummies lomon drops.</h6>
                                               <div className='col' className='one-Question-Helpful'>
                                by User1234,January 1,2019  <div className="Vertical-Line"></div>  Helpful?
                                    <button type="button" className="btn btn-link Yes-button-one-Question">
                                    Yes
                                        <p className='Count-Helpful-Yes'>(10)</p>
                                    </button>
                                    <div className="Vertical-Line">
                                    </div>
                                    <button type="button" className="btn btn-link report-button-one-Question">Report</button>
                        </div>
                        </div>
                </div>
                
               <div className='row'>
                    <div className='col-8'>
                         <h3>Q: Who what which when where why whether how?</h3>
                    </div>
                    <div className='date-question col-4'>
                         <div className='one-Question-Helpful-answer'>
                                   Helpful?
                                    <button type="button" className="btn btn-link Yes-button-one-Question">
                                    Yes
                                        <p className='Count-Helpful-Yes'>(10)</p>
                                    </button>
                                    <div className="Vertical-Line">
                                    </div>
                                    <button type="button" className="btn btn-link report-button-one-Question">Add Answer</button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                    <h3>A:</h3>
                    <h6 className="ansewer">Icing macaroon bear claw jelly beans chocolate cake. Cokie oat cake
                chocolate halvah jelly cake cotton candy soufflé topping. Jujubes topping cake gummies lomon drops.</h6>
                        <div className='col' className='one-Question-Helpful'>
                                by User1234,January 1,2019  <div className="Vertical-Line"></div>  Helpful?
                                    <button type="button" className="btn btn-link Yes-button-one-Question">
                                    Yes
                                        <p className='Count-Helpful-Yes'>(10)</p>
                                    </button>
                                    <div className="Vertical-Line">
                                    </div>
                                    <button type="button" className="btn btn-link report-button-one-Question">Report</button>
                        </div>

                        </div>
                </div>      
             </div>
        )
    }
}

export default QA
