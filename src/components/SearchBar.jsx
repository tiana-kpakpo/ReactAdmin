import { BarsArrowUpIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, UsersIcon } from '@heroicons/react/20/solid'

export default function SerachBar() {
    return (
        <div>

            <div className="flex mt-2 rounded-md shadow-sm">
                <div className="relative flex items-stretch flex-grow focus-within:z-10">

                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Search"
                    />
                </div>
                <button
                    type="button"
                    className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    <MagnifyingGlassIcon className="-ml-0.5 h-5 w-5 " aria-hidden="true" />
                    Search
                </button>
            </div>
        </div>
    )
}
