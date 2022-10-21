import React from 'react'
import './Button.css'

export default function Button() {
  return (
    <div className='Buttons_group'>
        <ul>
            <li><span></span>À vendre</li>
            <li>Prix</li>
            <li>Type</li>
            <li>Surface</li>
            <li>Chambres</li>
            <button className='V_btn'>Valider</button>
        </ul>
    </div>
  )
}
