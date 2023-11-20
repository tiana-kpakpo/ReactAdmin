// data for dashboard widgets
import { BarsArrowUpIcon, BellIcon, UsersIcon } from '@heroicons/react/20/solid'

import DashboardCard from '../components/DashboardCard';

const colorMapping = {
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    primary: 'bg-blue-500',
};

const widgetsData = [
    {
        id: 1,
        title: 'New Users',
        value: '$21,000',

        color: 'success',
        icon: <BarsArrowUpIcon className="-ml-0.5 h-5 w-5 text-white" aria-hidden="true" />
    },
    {
        id: 2,
        title: 'Total Orders',
        value: '64',
        icon: <UsersIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />,
        color: 'warning',
    },
    {
        id: 3,
        title: 'Articles',
        value: '32',
        icon: <BellIcon className="w-5 h-5 text-white" aria-hidden="true" />,
        color: 'danger',
    },
    {
        id: 4,
        title: 'Total Sales',
        value: '$32,000',
        icon: <UsersIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />,
        color: 'primary',
    },
];



export default function Dashboard() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {
                    widgetsData.map((widget, i) => {
                        const colorClass = colorMapping[widget.color] || 'bg-base-100';
                        return (
                            <DashboardCard key={i} colorClass={colorClass} icon={widget.icon} value={widget.value} title={widget.title} />
                        );
                    })
                }
            </div>
        </>
    )
}
