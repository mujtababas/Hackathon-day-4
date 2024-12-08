import Image from 'next/image'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import './snav.css'



const SNAV = () => {
  return (
    <div className='snav-main'>

        <div className="nike-img">
            <Image width={36} height={36} src="/nike.png" alt='nike-img'></Image>
        </div>
        <ul>
            <li>News & Featured</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>SNKERS</li>
        </ul>

        <div className="search">
            <input type="search" placeholder='Search' />
            <CiHeart size={20}/>
            <IoBagOutline size={15}/>


        </div>

    </div>
  )
}

export default SNAV