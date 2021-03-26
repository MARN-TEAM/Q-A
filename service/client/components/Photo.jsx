import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

export class Photo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='container'>
                <p>Yes, as you can see in these photos.</p>
                {/* {this.props.data.results[Object.keys(data.answers)[0]].photos} */}
                 <div className='row'>
                    <div className='col-2'>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                    </div>
                    <div className='col-2'>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />                       
                    </div>
                    <div className='col-2'>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />                      
                    </div>
                </div>
                 <div className='col' className='one-Question-Helpful'>
                                by User1337 -Seller, May 1,2019  <div className="Vertical-Line"></div>  Helpful?
                                    <button type="button" className="btn btn-link Yes-button-one-Question">
                                    Yes
                                        <p className='Count-Helpful-Yes'>(9)</p>
                                    </button>
                                    <div className="Vertical-Line">
                                    </div>
                                    <button type="button" className="btn btn-link report-button-one-Question">Report</button>
                        </div>
            </div>
        )
    }
}

export default Photo
