import React from 'react';

import { Text, StyleSheet, View } from '@react-pdf/renderer';


const Common_001_partial_003_group = ({props}) => {

    // Centered 12px bold text

    const styles = StyleSheet.create({
        area: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            height: 20,
            marginBottom: 10,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
        },
        title: {
            fontSize: 12,
            color: 'red',
        }
    });


    let title = props?.title as string;

    return (
        <View style={styles.area}>
            <Text>{title ? title : 'Başlık'}</Text>
        </View>
    );
}
export default Common_001_partial_003_group;