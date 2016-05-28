import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
        <button onClick={this.props.showAddDeck}>+</button>
        <ul>
          {this.props.decks.map((deck, i) => {
            return <li key={i}> {deck.name} </li>
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
