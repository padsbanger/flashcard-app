import React, { Component } from 'react'
import { connect } from 'react-redux'
import fuzzysearch from 'fuzzysearch'

import Card from './Card'

const matches = (filter, card) =>
  fuzzysearch(filter, card.front) || fuzzysearch(filter, card.back)

const mapStateToProps = ({cards, cardFilter}, {params: {deckId}} ) => ({
  cards: cards.filter(c => c.deckId === deckId  && matches(cardFilter, c))
})

const VisibleCards = ({cards, children}) => {
  return (
    <div>
      {cards.map(card => <Card card ={card} key={card.id} />)}
      {children}
    </div>
  )
}

export default connect(mapStateToProps)(VisibleCards)
