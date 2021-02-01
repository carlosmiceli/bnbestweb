import React from 'react';
import './style.css'

const Whatsapp = () => {
    return ( 
        <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
        <a href="https://api.whatsapp.com/send?phone=+5493813040583" className="float" target="_blank" rel="noopener noreferrer">
        <i id="wsp" className="fa fa-whatsapp my-float"></i>
        </a>
        </div>
     );
}
 
export default Whatsapp;