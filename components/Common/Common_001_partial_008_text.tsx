import React from 'react';

import { Text } from '@react-pdf/renderer';

interface Item {
    name: string;
}

//<Common_001_partial_007_signature props={{ persons: [ { name: 'Ali' }, { name: 'Veli' } ] }} />
const Common_001_partial_008_text = ({ props }) => {

    let text = props?.text as string;


    return (
        <Text>{text ? text : 'Text'}</Text>
    );
}
export default Common_001_partial_008_text;