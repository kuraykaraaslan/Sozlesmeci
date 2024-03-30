import React from 'react';

import { Text, StyleSheet, View } from '@react-pdf/renderer';

interface Item {
    key: string;
    value: string;
}

//<Common_001_partial_006_table props={{ table: [["Taşınmazın Adresi", tasinmazin_adresi], ["Taşınmazın Cinsi", tasinmazin_cinsi],
const Common_001_partial_009_list = ({ props }) => {

    let inputs = props?.table as Item[];

    const styles = StyleSheet.create({
        area: {
            marginBottom: 10,
            fontFamily: 'Roboto',
            width: '100%',
        },
        table: {
            width: '100%',
            border: 0,
            borderColor: 'black',
        },
        row: {
            width: '100%',
            flexDirection: 'row',

        },
        number: {
            fontSize: 12,
            fontWeight: 'bold',
            marginRight: 5,
        },
        text: {
            fontSize: 12,
        },
        cell: {
            width: '50%',
            border: 1,
            borderColor: 'black',
            height: 20,
            paddingLeft: 5,
        }
    });

    return (
        <View style={styles.area}>
            <View style={styles.table}>
                {inputs.map((item, index) => {                            
                    return (
                        <View key={index} style={styles.row}>
                                <Text style={styles.number}>{index + 1}.</Text>
                                <Text style={styles.text}>{item.key}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
export default Common_001_partial_009_list;