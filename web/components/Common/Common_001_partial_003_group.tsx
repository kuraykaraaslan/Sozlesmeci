import React from 'react';

const Common_001_partial_003_group = ({props}) => {

    let title = props?.title as string | "Başlık";
    let number = props?.number as number | 1;


    return (
        <>
        <div className="flex justify-left w-full mb-2">
            <p className="text-black text-base font-bold">{number ? (number + '. ' + title) : title}</p>
        </div>
        </>
    );
}
export default Common_001_partial_003_group;