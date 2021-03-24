import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

export class Photo extends Component {
    render() {
        return (
            <div>
                 <div className='row'>
                    <div className='col-8'>
                        <p>Yes, as you can see in these photos.</p>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                        <p className="user"> by User1337,May 1,2019   |   Helpful? Yes (0)  |  Report  </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Photo
