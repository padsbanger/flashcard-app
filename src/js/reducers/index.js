export function cardFilter (state = '', action) {
  switch (action.type) {
    case 'FILTER_CARDS':
      return action.data
    default:
      return state
  }
}

export function cards(state = [], action) {
  switch(action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      })
      return state.concat([newCard])
    case 'UPDATE_CARD':
      let cardUpdate = action.data
      return state.map(card => {
        if (card.id !== cardUpdate.id) return card
        return Object.assign({}, card, cardUpdate)
      })
    case 'DELETE_CARD':
      return state.filter(c => c.id !== action.data)
    default:
      return state
  }
}

export function decks(state = [], action) {
  switch(action.type) {
    case 'ADD_DECK':
      let newDeck = {
        name: action.data,
        id: +new Date
      }
      return state.concat([newDeck])
    default:
      return state
  }
}

export function addingDeck(state = false, action) {
  switch(action.type) {
    case 'SHOW_ADD_DECK':
      return true
    case 'HIDE_ADD_DECK':
      return false
    default:
      return state
  }
}
