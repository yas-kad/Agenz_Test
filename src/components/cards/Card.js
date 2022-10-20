import React from 'react'
import './card.css'
import LikeImg from '../../images/like.png'

function Card(props) {

  const {CardImg, Price, Content, ville, annonce} = props;
  return (
    <div className='card'>
      <a href='#'>
        <div className='cardImg'>
          <img src={CardImg} alt='#' />
        </div>
        <div className='cardMenu'>
          <div>title</div>
          <div className='likeImg'>
            <img src={LikeImg} alt='#' />
          </div>
        </div>
        <div className='cardHeader'>
          <div className='cardTitle'>
            <h2>{Price} MAD</h2>
          </div>
          <div className='cardAdr'>
            <p>{Content}</p>
          </div>
          <div className='cardv'>
            <p>{ville}</p>
          </div>
          <div className='cardAn'>
            <p>{annonce}</p>
          </div>
        </div>
      </a>
    </div>
  )
}


export default Card;