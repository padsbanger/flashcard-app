import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link, browserHistory } from 'react-router'

class CardModal extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.front).focus()
  }

  onSave(e) {
    var front = ReactDOM.findDOMNode(this.refs.front)
    var back = ReactDOM.findDOMNode(this.refs.back)

    this.props.onSave(Object.assign({}, this.props.card, {
      front: front.value,
      back: back.value
    }))

    browserHistory.push(`/deck/${this.props.card.deckId}`)
  }

  onDelete(e) {
    this.props.onDelete(this.props.card.id)
    browserHistory.push(`/deck/${this.props.card.deckId}`)
  }


  render() {
    let {card, onDelete} = this.props
    return (
      <div>
        <h1>{ onDelete ? 'Edit': 'New'} Card</h1>
        <label>Card Front: </label>
        <textarea ref='front' defaultValue={card.front}/>
        <label>Card Back: </label>
        <textarea ref='back' defaultValue={card.back}/>
        <p>
          <button onClick={this.onSave.bind(this)}>Save Card</button>
          <Link to={`/deck/${card.deckId}`}>Cancel </Link>
          { onDelete ?
            <button onClick={this.onDelete.bind(this)}>Delete Card</button> : null
          }
        </p>
      </div>
    )
  }
}

export default CardModal
