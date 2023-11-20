import React from 'react'

export default function DashboardCard({ key, colorClass, icon, value, title }) {
    return (
        <>
            <div key={key} className={`shadow-xl card w-96 ${colorClass}`}>
                <div className="items-center card-body">
                    <div className="flex items-center justify-center w-full h-full text-2xl " >
                        {icon}
                    </div>
                    <h2 className=" card-title">{title}</h2>
                    <p>{value}</p>
                </div>
            </div>
        </>
    )
}
