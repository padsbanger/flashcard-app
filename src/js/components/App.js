import React from 'react'
import Sidebar from './Sidebar'
import Toolbar from './Toolbar'

import { connect } from 'react-redux'

const mapStateToProps = (props, {params: {deckId} }) => ({
  deckId
})

const App = (props) => {
  return (
    <div>
      <Toolbar deckId = {props.deckId}/>
      <Sidebar />
      {props.children}
    </div>
  )
}

export default connect(mapStateToProps)(App)
