import React from 'react'

export default function Table({ columns, data }) {
    return (
        <div><table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-500">
                <tr>
                    {columns.map((column, i) => (
                        <th
                            key={i}
                            scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                        >
                            {column.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, i) => (
                    <tr key={i}>
                        {columns.map((column, j) => (
                            <td key={j} className="px-6 py-4 whitespace-nowrap">
                                {column.accessor ? row[column.accessor] : '-'}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table></div>
    )
}