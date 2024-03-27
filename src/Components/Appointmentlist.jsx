import React, { useState, useEffect } from 'react';

const Randevucard = () => {
    const [musteriAdi, setMusteriAdi] = useState('');
    const [musteriMail, setMusteriMail] = useState('');
    const [PersonelAdi, setPersonelAdi] = useState('');
    const [randevuSaati, setRandevuSaati] = useState('');
    const [musteriResim, setMusteriResim] = useState('');

    useEffect(() => {
        const veriAl = async () => {
            try {
                const response = await fetch('veri_alma_api_urlsi');
                const data = await response.json();

                const { ad, soyad, mail, Pad, Psoyad, Rsaat, mResim } = data;

                setMusteriAdi(`${Pad} ${Psoyad}`);
                setMusteriMail(mail);
                setPersonelAdi(`${ad} ${soyad}`);
                setRandevuSaati(Rsaat);
                setMusteriResim(mResim);
            } catch (error) {
                console.error('Müşteri verileri alınırken hata oluştu:', error);
            }
        };

        veriAl();
    }, []);

  return (
   

<div class="relative overflow-x-auto shadow-md sm:rounded-lg border-4">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-2 pt-2 bg-white dark:bg-gray-900">
        <div>
            <h1 className='text-white pl-4 text-2xl '>Randevu Listesi</h1>
            {/* <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span class="sr-only">Action button</span>
                Action
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button> */}
            {/* <!-- Dropdown menu --> */}
            {/* <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div> */}
        </div>
        <label for="table-search" class="absolute w-1 h-1  m-[-1px] overflow-hidden clip-[0 0 0 0] whitespace-nowrap border-0">Search</label>
        <div class="relative pr-2 ">
            <div class="absolute inset-y-2 rtl:inset-r-0  flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ara..."/>
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        {/* <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/> */}
                        {/* <label for="checkbox-all-search" class="sr-only">checkbox</label> */}
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Müşteri
                </th>
                <th scope="col" class="px-6 py-3">
                    Personel
                </th>
                <th scope="col" class="px-6 py-3">
                    Durum
                </th>
                <th scope="col" class="px-6 py-3">
                    Saat
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src={musteriResim} alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">{musteriAdi}</div>
                        <div class="font-normal text-gray-500">{musteriMail}</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                    {PersonelAdi}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Aktif
                    </div>
                </td>
                <td class="px-6 py-4">
                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">saat</a> */}
                    <p className='font-medium hover:underline'>{randevuSaati}</p>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src={musteriResim} alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">{musteriAdi}</div>
                        <div class="font-normal text-gray-500">{musteriMail}</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                {PersonelAdi}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Aktif
                    </div>
                </td>
                <td class="px-6 py-4">
                <p className='font-medium hover:underline'>{randevuSaati}</p>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src={musteriResim} alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">{musteriAdi}</div>
                        <div class="font-normal text-gray-500">{musteriMail}</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                {PersonelAdi}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Aktif
                    </div>
                </td>
                <td class="px-6 py-4">
                   
                    <p className='font-medium hover:underline'>{randevuSaati}</p>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">deneme</div>
                        <div class="font-normal text-gray-500">jese@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Vue JS Developer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Aktif
                    </div>
                </td>
                <td class="px-6 py-4">
                <p className='font-medium hover:underline'>14.30</p>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">deneme2</div>
                        <div class="font-normal text-gray-500">jese@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Vue JS Developer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Aktif
                    </div>
                </td>
                <td class="px-6 py-4">
                <p className='font-medium hover:underline'>15.00</p>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">deneme3</div>
                        <div class="font-normal text-gray-500">jese@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Vue JS Developer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Aktif
                    </div>
                </td>
                <td class="px-6 py-4">
                <p className='font-medium hover:underline'>15.30</p>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src={musteriResim} alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">{musteriAdi}</div>
                        <div class="font-normal text-gray-500">{musteriMail}</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    {PersonelAdi}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Aktif
                    </div>
                </td>
                <td class="px-6 py-4">
                <p className='font-medium hover:underline'>{randevuSaati}</p>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src={musteriResim} alt=""/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">{musteriAdi}</div>
                        <div class="font-normal text-gray-500">{musteriMail}</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    {PersonelAdi}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Pasif
                    </div>
                </td>
                <td class="px-6 py-4">
                <p className='font-medium hover:underline'>{randevuSaati}</p>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default Randevucard
