import React from 'react';

import SingleParty, { SinglePartyProps } from './Common_001_partial_005_singleparty';

interface CommonGroupProps {
    title: string | "Başlık";
    number: number | 1;
    parties: Array<SinglePartyProps>;
}

//EXAMPLE USAGE OF THIS COMPONENT

const Common_001_partial_004_parties = ({ title, number, parties }) => {
    return (
        <div className="contact-parties">
            <p className="contact-parties-title">{number ? `${number}. ${title}` : title}</p>
            {parties.map((party, index) => (
                <SingleParty key={index} inputs={party.inputs} title={party.title} />
            ))}
        </div>
    );
};

export default Common_001_partial_004_parties;
