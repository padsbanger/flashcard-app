import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import { addDeck, showAddDeck, hideAddDeck } from '../actions/index'

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  createDeck(e) {
    if(e.which !== 13) {
      return
    }
    this.props.addDeck(e.target.value)
    this.props.hideAddDeck()
  }

  render() {
    return (
      <div>
        <h2>All decks</h2>
        <ul>
          {this.props.decks.map((deck, i) => {
            return (
              <li key={i}><Link to={'/deck/'+deck.id}> {deck.name} </Link></li>
            )
          })}
        </ul>
        {this.props.addingDeck && <input onKeyPress={this.createDeck.bind(this)} /> }
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    decks: state.decks,
    addingDeck: state.addingDeck
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addDeck, showAddDeck, hideAddDeck
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
