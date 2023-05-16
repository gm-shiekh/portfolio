import React from 'react'
import {GoCalendar} from 'react-icons/go'

const Card = (props) => {
  return (
    <div className='box'>
        <h3 className=' title year'><GoCalendar className='icon'/> {props.year} </h3>
        <h3 className='title school'>{props.title} </h3>
        <h3 className='title'>{props.institute}</h3>
        <p>{ props.desc} </p>

    </div>
  )
}

export default Card