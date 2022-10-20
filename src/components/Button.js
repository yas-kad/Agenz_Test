import React from 'react'

function Button(props) {

  const {isActive,title, isFilled } = props;
  const mainColor = '#460AF0';
  return (
    <div className='buttons'>
        <ul>
          { isActive ? 
            <li style={{ border: `1px solid ${mainColor}`, color:`${mainColor}`}}><span></span><a>{title}</a></li> :
            <li style={{ border: '1px solid rgba(0, 0, 0, 0.3)', backgroundColor: isFilled ?`${mainColor}` : 'white', color: isFilled? 'white' : `${mainColor}` }}><a>{title}</a></li>
          }
            
        </ul>
    </div>
  )
}

export default Button; 