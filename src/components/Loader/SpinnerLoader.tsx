import { Spinner } from '@nextui-org/react'
import React from 'react'

const SpinnerLoader = () => {
  return (
    <div className='' style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}>
      <div className='flex items-center'>
        <Spinner />
      </div>
    </div>
  )
}

export default SpinnerLoader
