import { Spinner } from '@nextui-org/react'
import React from 'react'

const Loader = () => {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%", // Assuming the parent container occupies the full width
      height: "100vh",
    }}
  >
    <Spinner />
  </div>
  )
}

export default Loader