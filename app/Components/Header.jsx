import React from 'react'

export default function Header() {
  
  return (
    <header className='bg-[#017A35] text-zinc-50 h-48 w-full'>
      <select name="" id="" className='float-right m-8'>
        <option value="">
          usuario
        </option>
        <option value="">
          Sair
        </option>
      </select>
      <div>
        <h1> (colocar props.activeTab) </h1>  
        <p>Visualizar ranking completo</p>
      </div>
    </header>
  )
}
