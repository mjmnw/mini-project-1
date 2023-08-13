import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function TableAccount() {
  const userSelector = useSelector((state) => state.auth);

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
                    Full Name
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
                    className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase "
                  >
                    My Points
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-middle text-gray-500 uppercase"
                  >
                    My Balance
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
                    {userSelector.full_name}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                    {userSelector.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                    {userSelector.phone_number}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                    {userSelector.points}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                    {userSelector.balance}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-white whitespace-nowrap">
                    {userSelector.refferal_code}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
