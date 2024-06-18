import React from 'react'
import Modal from 'antd/es/modal/Modal'
import { Spin } from 'antd'
function loading() {
  return (
    <div className='flex justify-center w-full h-[70vh] items-center'><Spin size='large'/></div>
  )
}

export default loading