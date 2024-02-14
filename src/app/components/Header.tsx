import React from 'react'

const Header = () => {
  return (
    <main className="flex items-center justify-between py-10 px-32">
      <h1 className="text-2xl font-bold">Logged</h1>
      <ul className="flex items-center justify-between">
        <li className='px-3'><a href="#">Download</a></li>
        <li  className='px-3'><a href="#">Support</a></li>
        <li  className='px-3'><a href="#">Blog</a></li>
        <li  className='px-3'><a href="#">Career</a></li>
      </ul>
      <h1>Open Logged</h1>
    </main>
  )
}

export default Header