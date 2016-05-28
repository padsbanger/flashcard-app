import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import {combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as localStore from './localStore'

import {cards, decks, addingDeck, cardFilter} from './reducers/index'

import App from './components/App'
import VisibleCards from './components/VisibleCards'
import NewCardModal from './components/NewCardModal'
import EditCardModal from './components/EditCardModal'
import StudyModal from './components/StudyModal'

const rootReducer = combineReducers({
  cards,
  decks,
  addingDeck,
  cardFilter,
  routing: routerReducer
})

let store = createStore(rootReducer, localStore.get())

const history = syncHistoryWithStore(browserHistory, store)

function run() {
  let state = store.getState()
  localStore.set(state, ['decks', 'cards'])

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path='/deck/:deckId' component={VisibleCards} >
            <Route path='/deck/:deckId/new' component={NewCardModal} />
            <Route path='/deck/:deckId/edit/:cardId' component={EditCardModal} />
            <Route path='/deck/:deckId/study' component={StudyModal} />
          </Route>
        </Route>
      </Router>
   </Provider> ,
    document.getElementById('app')
  )
}

run()

store.subscribe(run)
