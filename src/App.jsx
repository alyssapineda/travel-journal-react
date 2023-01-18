import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import Card from './Card'
import data from './data'

function App() {

  const cardElements = data.map(cards => {
    return (
      <Card
        key = {cards.id}
        cards = {cards} 
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <section className="cards-list">
        {cardElements} 
      </section>
      
       
    </div>
  )
}

export default App
