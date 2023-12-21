import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex whitespace-nowrap '>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="Gaming"/>
      <Button name="Bollywood"/>
      <Button name="Soccer"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Trailers"/>
      <Button name="Recently uploaded"/>
      <Button name="Watched"/>
      <Button name="New to you"/>

    </div>
  )
}

export default ButtonList