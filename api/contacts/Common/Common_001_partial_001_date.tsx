import React from 'react';

const Common_001_partial_001_date = ({ props }) => {

    let date = props?.date as Date;
    let format = props?.format as string;

    /* format cases:    
    * dd/MM/yyyy
    * d/M/yyyy
    * dd/MM/yy
    * d/M/yy
    * MM/dd/yyyy
    * */

    let dateDay = date?.getDate();
    let dateMonth = date?.getMonth();
    let dateYear = date?.getFullYear();
        
    return (
        <div className="contact-date">
            <p>{date ? (format === 'dd/MM/yyyy' ? (dateDay < 10 ? '0' + dateDay : dateDay) + '/' + (dateMonth < 10 ? '0' + dateMonth : dateMonth) + '/' + dateYear : 
                format === 'd/M/yyyy' ? dateDay + '/' + dateMonth + '/' + dateYear : 
                format === 'dd/MM/yy' ? (dateDay < 10 ? '0' + dateDay : dateDay) + '/' + (dateMonth < 10 ? '0' + dateMonth : dateMonth) + '/' + dateYear.toString().substr(2, 2) : 
                format === 'd/M/yy' ? dateDay + '/' + dateMonth + '/' + dateYear.toString().substr(2, 2) : 
                format === 'MM/dd/yyyy' ? (dateMonth < 10 ? '0' + dateMonth : dateMonth) + '/' + (dateDay < 10 ? '0' + dateDay : dateDay) + '/' + dateYear : 
                '__/__/____') : '__/__/____'}</p>
        </div>
    );

    return (
        <div className="contact-date">
            <p>{date ? date.toDateString() : '__/__/____'}</p>
        </div>
    );
}
export default Common_001_partial_001_date;