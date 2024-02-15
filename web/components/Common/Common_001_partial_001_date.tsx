'use client';
import React, { useState , useEffect } from 'react';

const Common_001_partial_001_date = ({ props }) => {

    const [date, setDate] = useState<Date>(props?.date as Date);

    const [dateDay, setDateDay] = useState<number>(date?.getDate());
    const [dateMonth, setDateMonth] = useState<number>(date?.getMonth());
    const [dateYear, setDateYear] = useState<number>(date?.getFullYear());

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
        //date of contact top right of the page
        <div className="flex justify-end text-lg">
            <p className="text-black text-right">
                {date ? 
                (dateDay ? (dateDay < 10 ? '0' + dateDay : dateDay) : '__') + '/' + 
                (dateMonth ? (dateMonth < 10 ? '0' + (dateMonth + 1) : (dateMonth + 1)) : '__') + '/' + 
                (dateYear ? dateYear : '____') : '__/__/____'}</p>
        </div>
    );
}

export default Common_001_partial_001_date;