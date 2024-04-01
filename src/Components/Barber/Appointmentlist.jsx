import React, { useState, useEffect } from 'react';
import appointmentlist from "../../mock/appointmentlist.json";

const Randevucard = () => {
    const [randevuListesi, setRandevuListesi] = useState([]);

    useEffect(() => {
        const veriAl = async () => {
            try {
                const response = await fetch('appointmentlist.json');
                const data = await response.json();
                setRandevuListesi(data);
            } catch (error) {
                console.error('Randevu verileri alınırken hata oluştu:', error);
            }
        };

        veriAl();
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-4">
            <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-2 pt-2 bg-white dark:bg-gray-900">
                <div>
                    <h1 className="text-white pl-4 text-2xl ">Randevu Listesi</h1>
                </div>
                <label htmlFor="table-search" className="absolute w-1 h-1  m-[-1px] overflow-hidden clip-[0 0 0 0] whitespace-nowrap border-0">Search</label>
                <div className="relative pr-2 ">
                    <div className="absolute inset-y-2 rtl:inset-r-0  flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ara..."/>
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Müşteri
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Personel
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Durum
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Saat
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appointmentlist.map((randevu, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                            </td>
                            <td scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={randevu.musteriResim} alt={randevu.musteriAdi} />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">{randevu.musteriAdi}</div>
                                    <div className="font-normal text-gray-500">{randevu.musteriTelefon}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {randevu.PersonelAdi}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Aktif
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <p className='font-medium hover:underline'>{randevu.randevuSaati}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='h-auto py-2 dark bg-gray-800 justify-around flex flex-row '>
                <button className='text-white border-2 py-2 px-4 dark:hover:bg-gray-600'>Sil</button>
                <button className='text-white border-2 py-2 px-4 dark:hover:bg-gray-600'>Kaydet</button>
            </div>
        </div>
    );
}

export default Randevucard;
