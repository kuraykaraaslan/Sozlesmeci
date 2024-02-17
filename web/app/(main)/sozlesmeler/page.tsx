import React from "react";

const sozlesmeler = () => {

    return (
        <div className="min-h-screen bg-base-100 rounded-box">
            <div className="px-12 pt-8 mx-auto">
                <div className="overflow-x-auto w-full">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sözleşme Adı</th>
                                <th>Kategori</th>
                                <th>Güncelleme Tarihi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* K Harfi */}
                                <tr>

                                    <th>#K</th>
                                    <td><a href="/sozlesmeler/konut-kira-sozlesmesi">Konut Kira Sözleşmesi</a></td>
                                    <td>Borçlar Hukuku</td>
                                    <td>16.02.2024</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default sozlesmeler;