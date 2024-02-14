import React from 'react'

const Header = () => {
  return (
    <main className="flex items-center justify-between py-10 px-32">
      <h1 className="text-2xl font-bold">Logged</h1>
      <ul className="flex">
        <li>Download</li>
        <li>Support</li>
        <li>Blog</li>
        <li>Career</li>
      </ul>
      <h1>Open Logged</h1>
    </main>
  )
}

export default Header