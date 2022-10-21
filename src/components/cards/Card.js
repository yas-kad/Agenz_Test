import React, {useState} from 'react'
import './card.css'
import LikeImg from '../../images/like.png'
import DisLikeImg from '../../images/dislike.png'

function Card(props) {

  const {CardImg, Price, Content, ville, annonce} = props;
  const [islike, setIsLike] = useState(false);

  const handleLike = () => {
      setIsLike(!islike);
  }

  return (
    <div className='card'>
       <div>
          <img src={CardImg} alt='#' />
       </div>
       <div className='card-desc'>
          <h1>{Price} MAD</h1>
          <h5 className='content'>{Content}</h5>
          <h5 className='ville'>{ville}</h5>
          <h5 className='annonce'>{annonce}</h5>
       </div>
      <div className='days-agenz'>3 days on agenz</div>
      <div className='heart-icon' onClick={handleLike}>
        <img src={islike ? LikeImg : DisLikeImg} alt='#' />
      </div>
    </div>
  )
}


export default Card;