import React from 'react';

interface Item {
    name: string;
}

//<Common_001_partial_007_signature props={{ persons: [ { name: 'Ali' }, { name: 'Veli' } ] }} />
const Common_001_partial_007_signature = ({ props }) => {

let inputs = props?.table as Item[];

return (
    <div className="flex justify-center w-full">
        <table className="w-full">
            <tbody>
                {inputs?.map((item, index) => { 
                    return (
                        <tr key={index}>
                            <td className="w-1/2 border px-4 py-2 font-bold text-sm	">{item.name}</td>
                        </tr>
                    );
                }
                )}

            </tbody>
        </table>
    </div>
);
}
export default Common_001_partial_007_signature;