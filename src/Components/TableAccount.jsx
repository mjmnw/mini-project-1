import React from "react";

export default function TableAccount() {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg mb-20">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        User ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        Username
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                                    >
                                        Phone Number
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase"
                                        >
                                        Refferal Code
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-3 text-sm text-center font-medium text-white whitespace-nowrap">
                                        1
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                                        Jone Doe
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                                        jonne62@gmail.com
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                                        01239129332
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                                        i0c3xs9203
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}