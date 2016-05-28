import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import {combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'

import {cards, decks, addingDeck} from './reducers/index'

import Sidebar from './components/Sidebar'

const rootReducer = combineReducers({
  cards, decks, addingDeck
})

let store = createStore(rootReducer)

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
       <Provider store={store}>
        <div>
          <Sidebar/>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App></App> ,
  document.getElementById('app')
)
