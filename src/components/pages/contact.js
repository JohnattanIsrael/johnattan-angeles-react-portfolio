import React from 'react';
import contactPicture from '../../../static/assets/images/contact/contactPicture.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
    return (
        <div className='content-page-wrapper'>
            <div
                className='left-column'
                style={{
                    background: 'url(' + contactPicture + ') no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} 
            />


            <div className='right-column'>
                <div className='contact-bullet-points'>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='mobile'/>
                        </div>
                        <div className='text'>
                            555-555-5555
                        </div>
                    </div>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='paper-plane'/>
                        </div>
                        <div className='text'>
                            j@johnangeles.com
                        </div>
                    </div>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='map-marker-alt'/>
                        </div>
                        <div className='text'>
                            Mexico, Cuautitlan Izcalli
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
