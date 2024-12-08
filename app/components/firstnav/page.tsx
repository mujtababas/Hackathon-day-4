import Image from 'next/image'
import React from 'react'
import './fnav.css'

const FNAV = () => {
  return (
    <div>
        <div className="frstnav">
            <div className="ft">
                <Image width={36} height={36} src="/ft.png" alt='ft-photo'></Image>
            </div>
            <div className="skip">
                <Image width={100} height={100} src="/skip.png" alt='skip content'></Image>
            </div>
            <ul className=''>
                <li>Find a Store</li>
                <li>|</li>
                <li>Help</li>
                <li>|</li>
                <li>Join Us</li>
                <li>|</li>
                <li>Sign In</li>
            </ul>
        </div>
    </div>
  )
}

export default FNAV