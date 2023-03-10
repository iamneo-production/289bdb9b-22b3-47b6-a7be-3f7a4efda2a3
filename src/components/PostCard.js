import React from 'react'

export const PostCard = (props) => {
  return (
   <>
   <div className='cards-details'>
            <div className='card-details'>
                <img src={props.img} alt='' className='card__img'/>
                <div className='card__info'>
                    <span className='card__category'>{props.title}</span>
                    <h3 className='card__title'>{props.sname}</h3>
                    <a href={props.links} >
                        <button>Click here</button>
                    
                    </a>
                </div>

            </div>
        </div>
   </>

  )
}
