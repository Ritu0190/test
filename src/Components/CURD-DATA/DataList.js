import React from 'react'
import DataItem from './DataItem'

const DataList = ({data, onDelete, onEdit, markHandle }) => {
    const renderData = data.map((item) => (
        <DataItem key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} markHandle={markHandle} />
    ))
  return (
    <div className='grid grid-cols-4 gap-6 mt-8'>
        {renderData}
    </div>
  )
}

export default DataList