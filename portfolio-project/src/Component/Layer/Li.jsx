import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({className,liText,children,href}) => {
  return (
    <li className='list-none'>
        <a className={`font-pop text-[16px] text-[#FAFAFA]/90 hover:text-[#20C996] transition-all duration-300  list-none ${className}`} href={href}>
            {liText}
        </a>
        {children}
    </li>
  )
}

export default Li