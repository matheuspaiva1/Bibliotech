import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

export default function LayoutPages() {
  return (
    <div>
        <div className='flex gap-20'>
            <NavBar/>
            <Header/>
        </div>
    </div>
  )
}
