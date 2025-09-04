import React from 'react'


const tableheading=[
    {
        colname:"Avatar",
        icon:"🎯"
    },
     {
        colname:"Name",
        icon:"💎"
    },
     {
        colname:"Status",
        icon:"⚛"
    },
]

const tabledata=[
    {
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjudy6P8FXgTMh-zhFyXlREBCv2wpUtppNw&s",
        name:"Courage",
        status:"Active"
    },
     {
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjudy6P8FXgTMh-zhFyXlREBCv2wpUtppNw&s",
        name:"Dragon",
        status:"Inactive"
    },
     {
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjudy6P8FXgTMh-zhFyXlREBCv2wpUtppNw&s",
        name:"Ben",
        status:"Active"
    }
]
const Table = () => {
  return (
    <div className='container mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-4'>User data</h2>
    <table className='min-w-full border border-collapse'>
        <thead>
            <tr>
                {tableheading.map((heading)=>(
                    <th key={heading.colname} className='bg-gray-400 border-gray-400 px-4 py-2'>
                    {heading.icon}{heading.colname}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {tabledata.map((user,index)=>(
                <tr key={index}>
                    <td className='border border-gray-300 px-4 py-2'>
                        <img width={50} height={50} src={user.avatar} alt="user avatar"/>
                    </td>
                    <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                    <td className={`border border-gray-300 px-4 py-2 ${user.status=="Active" ? `text-green-600`:`text-red-600`}`}
                    >
                    {user.status}</td>
                </tr>
            )
            )}
        </tbody>
    </table>
    </div>
  )
}

export default Table