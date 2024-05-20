import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import appointmentlist from "../../mock/appointmentlist.json";

const AppointmentCard = () => {
    const [appointmentList, setAppointmentList] = useState([]);
    const [filter, setFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(0); // Başlangıç sayfa numarasını 0 olarak ayarlayın
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        setAppointmentList(appointmentlist);
    }, []);

    const handleApprove = (index) => {
        const updatedList = appointmentList.map((appointment, i) => {
            if (i === index) {
                return { ...appointment, Status: 'Approved' };
            }
            return appointment;
        });
        setAppointmentList(updatedList);
    };

    const handleReject = (index) => {
        const updatedList = appointmentList.map((appointment, i) => {
            if (i === index) {
                return { ...appointment, Status: 'Rejected' };
            }
            return appointment;
        });
        setAppointmentList(updatedList);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        setCurrentPage(0); // Filtre değiştiğinde sayfa numarasını sıfırlayın
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = appointmentList.filter(appointment => {
        if (filter === "All") return true;
        return appointment.Status === filter;
    }).slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(appointmentList.length / itemsPerPage);

    return (
        <div className="p-6 bg-white shadow-lg border-2 rounded-lg mx-auto mt-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Randevu Listesi</h1>
            <div className="mb-4 flex justify-between items-center">
                <label className="block border-2 p-2 text-sm font-medium text-gray-700">Filtre:</label>
                <select 
                    value={filter}
                    onChange={handleFilterChange}
                    className="block w-1/3 py-2 px-3 border-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    <option value="All">Tümü</option>
                    <option value="Approved">Onaylanan</option>
                    <option value="Rejected">Reddedilen</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Müşteri</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Personel</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zaman</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentItems.map((appointment, index) => (
                            <tr key={index} className="hover:bg-gray-100 transition duration-200">
                                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                    <img src={appointment.CustomerImage} alt={`${appointment.CustomerName}'s image`} className="h-10 w-10 rounded-full mr-4"/>
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{appointment.CustomerName}</div>
                                        <div className="text-sm text-gray-500">{appointment.CustomerPhone}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{appointment.EmployeName}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${appointment.Status === 'Approved' ? 'bg-green-100 text-green-800' : appointment.Status === 'Rejected' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {appointment.Status || "Bekleniyor"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{appointment.Time}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => handleApprove(index)}
                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                    >
                                        Onayla
                                    </button>
                                    <button
                                        onClick={() => handleReject(index)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Reddet
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ReactPaginate
        previousLabel={"Önceki"}
        nextLabel={"Sonraki"}
        breakLabel={"..."}
        breakClassName={"cursor-default"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"flex list-none"}
        subContainerClassName={"pages pagination"}
        activeClassName={"text-red-700"}
        pageClassName={"mx-1"}
        pageLinkClassName={"px-4 py-2 border border-gray-300 rounded-xl hover:bg-blue-500 hover:text-white transition-colors duration-300"}
        previousClassName={"mx-1"}
        previousLinkClassName={"px-4 py-2 border border-gray-300 rounded-xl hover:bg-blue-500  hover:text-white transition-colors duration-300"}
        nextClassName={"mx-1"}
        nextLinkClassName={"px-4 py-2 border border-gray-300 rounded-xl hover:bg-blue-500 hover:text-white transition-colors duration-300"}
        breakLinkClassName={"px-4 py-2 border border-gray-300 rounded"}
        className="flex flex-wrap justify-end pt-4"
      />
        </div>
    );
}

export default AppointmentCard;
