import React from 'react';

const Common_001_partial_002_title = ({props}) => {

    let title = props?.title as string;

    return (
        <div className="contact-title">
            <p className="text-white">{title ? title : 'Başlık'}</p>
        </div>
    );
}
export default Common_001_partial_002_title;