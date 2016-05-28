// ADD decks
// SHOW ADD decks
// HIDE ADD decks

export function addDeck(name) {
  console.log(name)
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
