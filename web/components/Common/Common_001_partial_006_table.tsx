import React from 'react';

interface Item {
    key: string;
    value: string;
}

//<Common_001_partial_006_table props={{ table: [["Taşınmazın Adresi", tasinmazin_adresi], ["Taşınmazın Cinsi", tasinmazin_cinsi],
const Common_001_partial_006_table = ({ props }) => {

let inputs = props?.table as Item[];

return (
    <div className="flex justify-center w-full">
        <table className="w-full  border border-black">
            <tbody>
                {inputs?.map((item, index) => { 
                    return (
                        <tr key={index}>
                            <td className="w-1/2  border border-black px-4 py-2 font-bold text-sm	">{item.key}</td>
                            <td className="w-1/2  border border-black px-4 py-2 text-sm	">{item.value}</td>
                        </tr>
                    );
                }
                )}
            </tbody>
        </table>
    </div>
);
}
export default Common_001_partial_006_table;