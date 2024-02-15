import React from 'react';

const Common_001_partial_002_title = ({props}) => {

    let title = props?.title as string;

    return (
        <div className="flex justify-center w-full">
        <p className="text-black text-lg font-bold">{title ? title : 'Başlık'}</p>
        </div>
    );
}
export default Common_001_partial_002_title;