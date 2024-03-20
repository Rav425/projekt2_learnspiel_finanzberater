import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function AdminQuestions() {
  return (
    <div className='flex'>
        <Sidebar />
        <div className="">
            <h2>{`Fragen: + ${}`}</h2>
        </div>
    </div>
  )
}
