import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

function Ticket() {
    const [columns, setColumns] = useState([])
    const [records, setRecords] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/tickets')
        .then(res => {
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
        })
    })


    return(
        <div className="container mt-5">
            <table className="table ml-3 mr-3 w-full divide-y divide-gray-200 text-xl">
                <thead>
                    <tr>
                    {columns.map((c,i) => (
                        <th key={i}>{c}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((d,i) => (
                            <tr key={{i}} className="text-center">
                                <td>{d.userId}</td>
                                <td>{d.ticketType}</td>
                                <td>{d.ticketAmount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Ticket