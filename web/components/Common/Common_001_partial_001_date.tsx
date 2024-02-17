'use client';
import React, { useState , useEffect } from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';


const Common_001_partial_001_date = ({ props }) => {

    const [date, setDate] = useState<Date>(props?.date as Date);

    const [dateDay, setDateDay] = useState<number>(date?.getDate());
    const [dateMonth, setDateMonth] = useState<number>(date?.getMonth());
    const [dateYear, setDateYear] = useState<number>(date?.getFullYear());

    const styles = StyleSheet.create({
        area: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            width: '100%',
            height: 20,
            marginBottom: 10
        },
        title: {
            fontSize: 12,
            fontWeight: 'bold',
            fontFamily: 'Times-Roman',
            color: 'red',
        }
    });

    useEffect(() => {
        setDate(props?.date as Date);
        if (date) {
            setDateDay(date?.getDate());
            setDateMonth(date?.getMonth());
            setDateYear(date?.getFullYear());
        } else {
            setDateDay(null);
            setDateMonth(null);
            setDateYear(null);
        }
    }, [props]);


    /* format case:    
    * dd/MM/yyyy
    */

    return (
        <View style={styles.area}>
            <Text>
                {date ? 
                (dateDay ? (dateDay < 10 ? '0' + dateDay : dateDay) : '__') + '/' + 
                (dateMonth ? (dateMonth < 10 ? '0' + (dateMonth + 1) : (dateMonth + 1)) : '__') + '/' + 
                (dateYear ? dateYear : '____') : '__/__/____'}
            </Text>
        </View>
    );
}

export default Common_001_partial_001_date;