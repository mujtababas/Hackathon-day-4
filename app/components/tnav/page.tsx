import Link from 'next/link'
import React from 'react'
import './tnav.css'

const TNAV = () => {
  return (
    <div className='tnav-main'>
        <h3>Hello Nike App</h3>
        <div className="tnav-sec"><span>Download the app to access everything Nike.</span><Link href="/">Get Your Great</Link></div>
    </div>
  )
}

export default TNAV