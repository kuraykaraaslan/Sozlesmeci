import React from 'react';

const Common_001_partial_003_group = ({props}) => {

    let title = props?.title as string | "Başlık";
    let number = props?.number as number | 1;


    return (
        <>
        <div className="contact-group">
            <p className="contact-group-title">{number ? (number + '. ' + title) : title}</p>
        </div>
        </>
    );
}
export default Common_001_partial_003_group;