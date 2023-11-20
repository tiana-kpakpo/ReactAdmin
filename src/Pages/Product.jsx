import React from 'react'
import DashboardCard from '../components/DashboardCard'


export default function () {
  return (
    <>
    <div><DashboardCard/></div>

    <div className='flex row-auto mt-6'>
    <form className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className=" text-gray-700 font-semibold mb-2 flex">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="flex text-gray-700 font-semibold mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="stock" className="flex text-gray-700 font-semibold mb-2">
          Stock
        </label>
        <input
          type="number"
          id="stock"
          name="stock"
          className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="flex text-gray-700 font-semibold mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="flex text-gray-700 font-semibold mb-2">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          accept="image/*"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>

<div className=''>
    <div><DashboardCard/></div>
    <div><DashboardCard/></div>
    <div><DashboardCard/></div>
    <div><DashboardCard/></div>

</div>

    </div>

    
    </>
  )
}
