// ADD decks
// SHOW ADD decks
// HIDE ADD decks

export function addDeck(name) {
  return {
    type: 'ADD_DECK',
    data: name
  }
}

export function showAddDeck() {
  return {
    type: 'SHOW_ADD_DECK'
  }
}

export function hideAddDeck() {
  return {
    type: 'HIDE_ADD_DECK'
  }
}

export function addCard(card) {
  return {
    type: 'ADD_CARD',
    data: card
  }
}

export function updateCard(card) {
  return {
    type: 'UPDATE_CARD',
    data: card
  }
}

export function deleteCard(cardId) {
  return {
    type: 'DELETE_CARD',
    data: cardId
  }
}

export function filterCards(query) {
  return {
    type: 'FILTER_CARDS',
    data: query
  }
}
