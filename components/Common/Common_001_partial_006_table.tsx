import React from 'react';

import { Text, StyleSheet, View } from '@react-pdf/renderer';

interface Item {
    key: string;
    value: string;
}

//<Common_001_partial_006_table props={{ table: [["Taşınmazın Adresi", tasinmazin_adresi], ["Taşınmazın Cinsi", tasinmazin_cinsi],
const Common_001_partial_006_table = ({ props }) => {

    let inputs = props?.table as Item[];

    const styles = StyleSheet.create({
        area: {
            marginBottom: 10,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
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
                            <View style={styles.cell}>
                                <Text>{item.key}</Text>
                            </View>
                            <View style={styles.cell}>
                                <Text>{item.value}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
export default Common_001_partial_006_table;