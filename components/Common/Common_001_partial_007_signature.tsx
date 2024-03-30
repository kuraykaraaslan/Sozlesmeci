import React from 'react';

import { Text, StyleSheet, View } from '@react-pdf/renderer';

interface Item {
    key: string;
    value: string;
}

const Common_001_partial_007_signature = ({ props }) => {

    let inputs = props?.table as Item[];

    //example
    // <Common_001_partial_007_signature props={{ table: [ { key: 'Ali Veli', value: 'Kiraya Veren' }, { key: 'Ahmet Mehmet', value: 'Kiracı' } ] }} />

    const styles = StyleSheet.create({
        area: {
            marginBottom: 10,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            width: '100%',
        },
        table: {
            width: '100%',
            height: 50,
            border: 0,
            borderColor: 'black',
        },
        row: {
            width: '100%',
            flexDirection: 'row',

        },
        cell: {
            width: '50%',
            border: 0,
            borderColor: 'black',
            height: 40,
            paddingLeft: 5,
            textAlign: 'center',
        }
    });

    return (
        <View style={styles.area}>
            <View style={styles.table}>
                        <View style={styles.row}>
                            {inputs.map((item, index) => {
                                return (
                                    <View key={index} style={styles.cell}>
                                        <Text>{item.value}</Text>
                                        <Text>{item.key}</Text>

                                    </View>
                                );
                            }
                            )}
                        </View>
            </View>
        </View>
    );
}

export default Common_001_partial_007_signature;