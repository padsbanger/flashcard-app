import React from 'react'

import { showAddDeck, filterCards} from '../actions'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
  showAddDeck: () => dispatch(showAddDeck()),
  onFilter: query => dispatch(filterCards(query))
})

const Toolbar = ({showAddDeck, deckId, onFilter}) => {
  let deckTools = deckId ? (
    <p>
      <Link to={`/`}>Home</Link>
      <Link to={`/deck/${deckId}/new`}>New Card</Link>
      <Link to={`/deck/${deckId}/study`}>Study</Link>
      <input onChange={e => onFilter(e.target.value)} />
    </p>
  ) :null

  return (
    <div>
      <button onClick={showAddDeck}> New Deck </button> <div>{deckTools}</div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Toolbar)
