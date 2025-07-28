import React from 'react'

export default function NavBar() {
  return (
    <nav className='text-zinc-50 h-screen'>
      <div className='bg-[#017A35] h-48 p-8 text-center'>
        <img src="" alt="" />
        <p>usuario</p>
        <p>usuario@gmail.com</p>
      </div>
      <div className="bg-[#4CAF50] h-134 p-8">
        <h2>Descobrir</h2>
        <ul>
          <li>
            <p>Inicio</p>
          </li>
          <li>
            <p>Agendar</p>
          </li>
          <h2>Meus Livros</h2>
          <li>
            <p>Livros</p>
          </li>
          <li>
            <p>Ranking de Empréstimos</p>
          </li>
        </ul>
      </div>
      <img src="" alt="" />

        
    </nav>
  )
}
