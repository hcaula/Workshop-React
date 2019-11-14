import React from 'react'
import './styles.css'

const Card = props => {
  const { item } = props

  return (
    <div>
      <div className="card">
        <p className="item">Name: {item.name}</p>
        <p className="item">Forks Count: {item.forks_count}</p>
      </div>
    </div>
  )
}

export default Card
