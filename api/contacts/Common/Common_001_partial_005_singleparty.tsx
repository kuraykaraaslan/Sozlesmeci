import React from 'react';

interface SinglePartyProps {
    inputs: string[][];
    title: string;
    vertical?: boolean;
}

const SingleParty: React.FC<SinglePartyProps> = ({ inputs, title , vertical = false }) => {


    return (
        <div className="contact-parties-single">
            <p className="contact-parties-single-title">{title}</p>
            <div className={vertical ? 'contact-parties-single-inputs-vertical' : 'contact-parties-single-inputs'}>
                {inputs.map((input, index) => (
                    <div key={index} className={vertical ? 'contact-parties-single-input-vertical' : 'contact-parties-single-input'}>
                        <span className="contact-parties-single-key">{input[0]} :</span> <span className="contact-parties-single-value">{input[1]}{(index < inputs.length - 1) ? ',' : '.'}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default  SingleParty  ;
export type { SinglePartyProps };
