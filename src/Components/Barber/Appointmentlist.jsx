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
        <div className="p-6 bg-white shadow-md border-2 border-black rounded-md">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Randevu Listesi</h1>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left">Müşteri</th>
                            <th className="px-4 py-2 text-left">Personel</th>
                            <th className="px-4 py-2 text-left">Durum</th>
                            <th className="px-4 py-2 text-left">Saat</th>
                            <th className="px-4 py-2 text-left">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointmentlist.map((randevu, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2">{randevu.musteriAdi}</td>
                                <td className="px-4 py-2">{randevu.PersonelAdi}</td>
                                <td className="px-4 py-2">{randevu.Durum}</td>
                                <td className="px-4 py-2">{randevu.randevuSaati}</td>
                                <td className="px-4 py-2">
                                    <button className="text-blue-500 hover:text-blue-700 mr-6">Onayla</button>
                                    <button className="text-red-500 hover:text-red-700">Reddet</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Randevucard;
