import React, {useState} from 'react'
import './Button.css'

export default function Button() {
  const [isSelecetd, setSelected] = useState(0);

  const handleClick = (id) => {
    setSelected(id);
  }

  return (
    <div className='Buttons_group'>
        <ul>
            <li onClick={() => handleClick(1)} style={isSelecetd === 1 ? {border: '1px solid #460AF0'} : {border: '1px solid rgba(0, 0, 0, 0.3)'}}><span></span>À vendre</li>
            <li onClick={() => handleClick(2)} style={isSelecetd === 2 ? {border: '1px solid #460AF0'} : {border: '1px solid rgba(0, 0, 0, 0.3)'}}>Prix</li>
            <li onClick={() => handleClick(3)} style={isSelecetd === 3 ? {border: '1px solid #460AF0'} : {border: '1px solid rgba(0, 0, 0, 0.3)'}}>Type</li>
            <li onClick={() => handleClick(4)} style={isSelecetd === 4 ? {border: '1px solid #460AF0'} : {border: '1px solid rgba(0, 0, 0, 0.3)'}}>Surface</li>
            <li onClick={() => handleClick(5)} style={isSelecetd === 5 ? {border: '1px solid #460AF0'} : {border: '1px solid rgba(0, 0, 0, 0.3)'}}>Chambres</li>
            <button className='V_btn'>Valider</button>
        </ul>
    </div>
  )
}
