import React, { useState } from 'react'
import request from 'request'
import './App.css'

import Card from './Card'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('tetris')

  const requestRepo = name => {
    const url = `https://api.github.com/search/repositories?q=${name}`
    request(url, function(error, response, body) {
      setItems(JSON.parse(body).items)
      setLoading(false)
    })
  }

  console.log(items)

  if (items.length === 0) {
    requestRepo(name)
  }

  return (
    <div className="App">
      <h1>GitHub Battle</h1>
      <input
        type="text"
        value={name}
        onChange={event => {
          setLoading(true)
          setName(event.target.value)
          requestRepo(name)
        }}
      />
      {loading ? (
        <img
          src={'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'}
        />
      ) : (
        <ul>
          {items.map(item => {
            return <Card item={item}></Card>
          })}
        </ul>
      )}
    </div>
  )
}

export default App
