import { BRAND_NAME } from '@/utility/constant'
import React from 'react'

const Footer = () => {
  return (
    <>
    <hr />
    <footer className=" py-4 text-center border-separate">
        <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
      </footer>
      </>
  )
}

export default Footer