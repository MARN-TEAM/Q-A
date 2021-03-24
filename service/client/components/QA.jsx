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
                        helpful? Yes (25) | Add Answer
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                    <h3>A:</h3>
                    <h6 className="ansewer">Icing macaroon bear claw jelly beans chocolate cake. Cokie oat cake
                chocolate halvah jelly cake cotton candy soufflé topping. Jujubes topping cake gummies lomon drops.</h6>
                        <p className="user"> by User1234,January 1,2019   |   Helpful? Yes (0)  |  Report  </p>
                        </div>
                </div>
                
               <div className='row'>
                    <div className='col-8'>
                         <h3>Q: Who what which when where why whether how?</h3>
                    </div>
                    <div className='date-question col-4'>
                        helpful? Yes (2) | Add Answer
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                    <h3>A:</h3>
                    <h6 className="ansewer">Icing macaroon bear claw jelly beans chocolate cake. Cokie oat cake
                chocolate halvah jelly cake cotton candy soufflé topping. Jujubes topping cake gummies lomon drops.</h6>
                        <p className="user"> by User1337,May 1,2019   |   Helpful? Yes (0)  |  Report  </p>
                        </div>
                </div>
                 
            </div>
        )
    }
}

export default QA
